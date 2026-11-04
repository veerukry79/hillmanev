/*
# Create enquiries table for website contact and dealership forms

1. New Tables
- `enquiries`
  - `id` (uuid, primary key)
  - `enquiry_type` (text): either 'customer' (product enquiry) or 'dealership' (dealership application)
  - `name` (text, required)
  - `phone` (text, required)
  - `email` (text, optional)
  - `city` (text, optional)
  - `message` (text, optional)
  - `created_at` (timestamp, defaults to now)

2. Security
- Row level security is enabled.
- Visitors (anon and authenticated) may only INSERT new enquiries. Submissions cannot be read back through the public API.
- Length and value checks guard against oversized or invalid submissions.

3. Notes
- The site has no sign-in, so the public insert policy is intentional and scoped to this write-only form.
- Submissions are read from the Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  enquiry_type text NOT NULL CHECK (enquiry_type IN ('customer', 'dealership')),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 5 AND 20),
  email text CHECK (email IS NULL OR char_length(email) <= 200),
  city text CHECK (city IS NULL OR char_length(city) <= 120),
  message text CHECK (message IS NULL OR char_length(message) <= 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON enquiries TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries" ON enquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);
