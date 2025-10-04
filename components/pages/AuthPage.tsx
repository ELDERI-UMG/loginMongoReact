
import React, { useState } from 'react';
import LoginForm from '../auth/LoginForm';
import RegisterForm from '../auth/RegisterForm';
import type { User } from '../../types';

interface AuthPageProps {
  onLoginSuccess: (data: { user: User; token: string }) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLoginSuccess }) => {
  const [isLoginView, setIsLoginView] = useState(true);

  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-800 shadow-2xl rounded-2xl p-8 mb-4 border border-gray-700">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">
              {isLoginView ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-gray-400">
              {isLoginView ? 'Sign in to continue' : 'Get started with a new account'}
            </p>
          </div>
          {isLoginView ? (
            <LoginForm onLoginSuccess={onLoginSuccess} />
          ) : (
            <RegisterForm onRegisterSuccess={onLoginSuccess} />
          )}
        </div>
        <div className="text-center">
          <button onClick={toggleView} className="text-sm text-indigo-400 hover:text-indigo-300 font-semibold transition-colors duration-300">
            {isLoginView ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
