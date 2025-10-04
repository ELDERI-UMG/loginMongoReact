
import React from 'react';
import type { User } from '../../types';
import { Button } from '../ui/Button';

interface DashboardPageProps {
  user: User;
  onLogout: () => void;
}

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);


const DashboardPage: React.FC<DashboardPageProps> = ({ user, onLogout }) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-2xl bg-gray-800 shadow-2xl rounded-2xl p-8 border border-gray-700 text-center transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-bold text-white mb-4">Dashboard</h1>
        <p className="text-lg text-gray-300 mb-8">Welcome, <span className="text-indigo-400 font-semibold">{user.name}!</span></p>
        
        <div className="bg-gray-900/50 rounded-lg p-6 mb-8 text-left space-y-4">
            <div className="flex items-center">
                <UserIcon />
                <div>
                    <p className="text-sm text-gray-400">Name</p>
                    <p className="font-medium text-white">{user.name}</p>
                </div>
            </div>
             <div className="flex items-center">
                <EmailIcon />
                <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium text-white">{user.email}</p>
                </div>
            </div>
        </div>

        <Button onClick={onLogout} variant="danger">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default DashboardPage;
