-- Create dedicated schema
CREATE SCHEMA IF NOT EXISTS venturerank_os;

-- Enable RLS extension
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA venturerank_os;

-- Ideas table
CREATE TABLE venturerank_os.ideas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    pain_severity SMALLINT CHECK (pain_severity BETWEEN 0 AND 10),
    frequency SMALLINT CHECK (frequency BETWEEN 0 AND 10),
    market_size SMALLINT CHECK (market_size BETWEEN 0 AND 10),
    monetization_clarity SMALLINT CHECK (monetization_clarity BETWEEN 0 AND 10),
    data_availability SMALLINT CHECK (data_availability BETWEEN 0 AND 10),
    defensibility SMALLINT CHECK (defensibility BETWEEN 0 AND 10),
    network_effects SMALLINT CHECK (network_effects BETWEEN 0 AND 10),
    automation_potential SMALLINT CHECK (automation_potential BETWEEN 0 AND 10),
    founder_fit SMALLINT CHECK (founder_fit BETWEEN 0 AND 10),
    urgency_score SMALLINT CHECK (urgency_score BETWEEN 0 AND 10),
    buildability_score SMALLINT CHECK (buildability_score BETWEEN 0 AND 10),
    founder_advantage_score SMALLINT CHECK (founder_advantage_score BETWEEN 0 AND 10),
    confidence_score SMALLINT CHECK (confidence_score BETWEEN 0 AND 10),
    bucket TEXT NOT NULL CHECK (bucket IN ('BUILD FIRST', 'HIGH PRIORITY', 'BACKLOG')),
    rationale TEXT NOT NULL,
    risks JSONB NOT NULL DEFAULT '[]'::jsonb,
    recommended_action TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Add indexes for common filters
CREATE INDEX idx_ideas_bucket ON venturerank_os.ideas(bucket);
CREATE INDEX idx_ideas_category ON venturerank_os.ideas(category);

-- Update timestamp trigger
CREATE OR REPLACE FUNCTION venturerank_os.update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_ideas_timestamp
BEFORE UPDATE ON venturerank_os.ideas
FOR EACH ROW
EXECUTE FUNCTION venturerank_os.update_timestamp();

-- Enable RLS
ALTER TABLE venturerank_os.ideas ENABLE ROW LEVEL SECURITY;

-- Policies
-- Allow authenticated users to read all ideas
CREATE POLICY ideas_select_policy ON venturerank_os.ideas
FOR SELECT
TO authenticated
USING (true);

-- Only service role can modify data
CREATE POLICY ideas_modify_policy ON venturerank_os.ideas
FOR ALL
TO service_role
USING (true);
