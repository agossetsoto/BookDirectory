import React, { useMemo } from 'react';
import { useForm, Controller, ControllerRenderProps } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { handleSignInSubmit } from '../api/authApi'; 
import { FormValues } from '../types';
import { useAuth } from '../context/AuthContext';

import { TextField, Button, Container, Typography } from '@mui/material';

const LogIn: React.FC = () => {
  const { login } = useAuth();
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const navigate = useNavigate();

  const memoizedNavigate = useMemo(() => navigate, [navigate]);

  const onSubmit = (values: FormValues) => {
    handleSignInSubmit(values, 'login', memoizedNavigate, login);
  }

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Log In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          }}
          render={({ field }: { field: ControllerRenderProps<FormValues, 'email'> }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
          render={({ field }: { field: ControllerRenderProps<FormValues, 'password'> }) => (
            <TextField
              {...field}
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Register
        </Button>
        <Typography variant="body1" align="right">
          Don't have an account? <Button component={Link} to="/signin">Sign In</Button>
        </Typography>
      </form>
    </Container>
  );
};

export default LogIn;