
import React, { useState } from 'react';
import { login } from '../../services/authService';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import type { User } from '../../types';

interface LoginFormProps {
  onLoginSuccess: (data: { user: User; token: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await login(email, password);
      onLoginSuccess(response);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        id="email"
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="you@example.com"
      />
      <Input
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="••••••••"
      />
      {error && <p className="text-sm text-red-400 text-center">{error}</p>}
      <div>
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? 'Signing In...' : 'Sign In'}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
