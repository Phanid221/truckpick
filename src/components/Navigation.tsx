import React from 'react';
import { Truck, Package, Users, Bell, User } from 'lucide-react';
import type { UserRole } from '../types';

interface NavigationProps {
  role: UserRole;
  onNavigate: (route: string) => void;
  activeRoute: string;
}

export default function Navigation({ role, onNavigate, activeRoute }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 h-screen w-20 bg-gray-900 flex flex-col items-center py-8">
      <div className="mb-12">
        <Truck className="w-10 h-10 text-blue-500" />
      </div>
      
      <div className="flex flex-col items-center space-y-8">
        <button
          onClick={() => onNavigate('dashboard')}
          className={`p-3 rounded-xl transition-colors ${
            activeRoute === 'dashboard' 
              ? 'bg-blue-500 text-white' 
              : 'text-gray-400 hover:text-white hover:bg-gray-800'
          }`}
        >
          {role === 'driver' ? (
            <Truck className="w-6 h-6" />
          ) : (
            <Package className="w-6 h-6" />
          )}
        </button>

        {role === 'mediator' && (
          <button
            onClick={() => onNavigate('users')}
            className={`p-3 rounded-xl transition-colors ${
              activeRoute === 'users'
                ? 'bg-blue-500 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            <Users className="w-6 h-6" />
          </button>
        )}

        <button
          onClick={() => onNavigate('notifications')}
          className={`p-3 rounded-xl transition-colors ${
            activeRoute === 'notifications'
              ? 'bg-blue-500 text-white'
              : 'text-gray-400 hover:text-white hover:bg-gray-800'
          }`}
        >
          <Bell className="w-6 h-6" />
        </button>

        <button
          onClick={() => onNavigate('profile')}
          className={`p-3 rounded-xl transition-colors ${
            activeRoute === 'profile'
              ? 'bg-blue-500 text-white'
              : 'text-gray-400 hover:text-white hover:bg-gray-800'
          }`}
        >
          <User className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}