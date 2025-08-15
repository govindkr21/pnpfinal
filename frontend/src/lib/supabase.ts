import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key';

const isSupabaseConfigured = import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database functions for seminar registrations
export const createSeminarRegistration = async (data: {
  name: string;
  email: string;
  phone: string;
  address: string;
  occupation: string;
}) => {
  if (!isSupabaseConfigured) {
    throw new Error('Please connect to Supabase to enable registration functionality');
  }

  const { data: registration, error } = await supabase
    .from('seminar_registrations')
    .insert(data)
    .select()
    .single();

  if (error) throw error;
  return registration;
};

export const getSeminarRegistrations = async () => {
  if (!isSupabaseConfigured) {
    throw new Error('Please connect to Supabase to access registration data');
  }

  const { data, error } = await supabase
    .from('seminar_registrations')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

// Database functions for community registrations
export const createCommunityRegistration = async (data: {
  email: string;
  number: string;
  dob: string;
}) => {
  if (!isSupabaseConfigured) {
    throw new Error('Please connect to Supabase to enable community registration functionality');
  }

  const { data: registration, error } = await supabase
    .from('community_registrations')
    .insert(data)
    .select()
    .single();

  if (error) throw error;
  return registration;
};

export const getCommunityRegistrations = async () => {
  if (!isSupabaseConfigured) {
    throw new Error('Please connect to Supabase to access community registration data');
  }

  const { data, error } = await supabase
    .from('community_registrations')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};