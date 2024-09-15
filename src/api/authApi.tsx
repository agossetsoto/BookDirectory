import axios from 'axios';

import { FormValues, ApiResponse } from '../types';

const REGISTER_URL = 'https://reqres.in/api/';

// The handleSignInSubmit function for handling form submission
export const handleSignInSubmit = async (
  values: FormValues,
  slug: 'register' | 'login',
  navigate: Function,
  login: Function,
): Promise<ApiResponse> => {
  try {
    const response = await axios.post(`${REGISTER_URL}${slug}`, {
      email: values.email,
      password: values.password,
    });
    login();
    navigate('/directory');
    console.log(`User ${slug} successfully:`, response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error(`Error ${slug} user:`, error);
    return { success: false, error };
  }
};