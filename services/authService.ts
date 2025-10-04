
import type { AuthResponse, User } from '../types';

// This is a mock service. In a real application, you would make fetch/axios calls
// to your Node.js backend API (e.g., 'http://localhost:5000/api/auth/login').

const MOCK_DELAY = 1000; // 1 second delay to simulate network latency

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  console.log(`Attempting to log in with email: ${email}`);
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password123') {
        const user: User = {
          id: '1',
          name: 'Test User',
          email: 'test@example.com',
        };
        const token = 'fake-jwt-token-for-testing-purposes';
        resolve({ user, token });
      } else {
        reject(new Error('Invalid email or password.'));
      }
    }, MOCK_DELAY);
  });
};

export const register = async (name: string, email: string, password: string): Promise<AuthResponse> => {
  console.log(`Attempting to register user: ${name} with email: ${email}`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!name || !email || !password) {
        reject(new Error('All fields are required.'));
        return;
      }
      if (password.length < 6) {
        reject(new Error('Password must be at least 6 characters long.'));
        return;
      }

      // In a real backend, you'd check if the email already exists.
      // Here, we'll just simulate a successful registration.
      const newUser: User = {
        id: new Date().getTime().toString(), // Generate a mock ID
        name,
        email,
      };
      const token = 'fake-jwt-token-for-new-user';
      resolve({ user: newUser, token });

    }, MOCK_DELAY);
  });
};
