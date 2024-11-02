import React, { useState } from 'react';
import Navigation from './components/Navigation';
import CargoCard from './components/CargoCard';
import type { UserRole, CargoPost } from './types';

// Mock data for demonstration
const MOCK_CARGO: CargoPost = {
  id: '1',
  userId: 'user1',
  title: 'Industrial Equipment Transport',
  cargoType: 'Machinery',
  weight: 2500,
  dimensions: {
    length: 4,
    width: 2,
    height: 2.5
  },
  pickupLocation: {
    address: 'Los Angeles, CA',
    datetime: '2024-03-20T10:00:00Z'
  },
  dropoffLocation: {
    address: 'San Francisco, CA',
    datetime: '2024-03-21T15:00:00Z'
  },
  status: 'posted',
  price: 2800,
  specialInstructions: 'Requires forklift for loading/unloading',
  createdAt: '2024-03-15T08:00:00Z'
};

function App() {
  const [activeRoute, setActiveRoute] = useState('dashboard');
  const [userRole] = useState<UserRole>('driver');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        role={userRole}
        activeRoute={activeRoute}
        onNavigate={setActiveRoute}
      />
      
      <main className="ml-20 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Available Cargo</h1>
            <p className="text-gray-600 mt-2">Find and manage cargo transportation requests</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <CargoCard
                key={index}
                cargo={{
                  ...MOCK_CARGO,
                  id: `cargo-${index}`,
                  price: MOCK_CARGO.price + (index * 500),
                  pickupLocation: {
                    ...MOCK_CARGO.pickupLocation,
                    address: index % 2 === 0 ? 'Los Angeles, CA' : 'Seattle, WA'
                  }
                }}
                onInterested={() => console.log('Interested in cargo', index)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;