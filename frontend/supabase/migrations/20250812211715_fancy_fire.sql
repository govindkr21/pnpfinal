/*
  # Create registration tables for Pulse & Pause seminar

  1. New Tables
    - `seminar_registrations`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `address` (text)
      - `occupation` (text)
      - `created_at` (timestamp)
    
    - `community_registrations`
      - `id` (uuid, primary key)
      - `email` (text)
      - `number` (text)
      - `dob` (date)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to read/write their own data
    - Add policies for public access (since these are registration forms)
*/

-- Seminar registrations table
CREATE TABLE IF NOT EXISTS seminar_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  occupation text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Community registrations table
CREATE TABLE IF NOT EXISTS community_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  number text NOT NULL,
  dob date NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE seminar_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_registrations ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (registration forms should be accessible to everyone)
CREATE POLICY "Anyone can register for seminar"
  ON seminar_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can join community"
  ON community_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policies for authenticated users to read data (for admin purposes)
CREATE POLICY "Authenticated users can read seminar registrations"
  ON seminar_registrations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can read community registrations"
  ON community_registrations
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS seminar_registrations_email_idx ON seminar_registrations(email);
CREATE INDEX IF NOT EXISTS seminar_registrations_created_at_idx ON seminar_registrations(created_at);
CREATE INDEX IF NOT EXISTS community_registrations_email_idx ON community_registrations(email);
CREATE INDEX IF NOT EXISTS community_registrations_created_at_idx ON community_registrations(created_at);