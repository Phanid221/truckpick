export type UserRole = 'driver' | 'shipper' | 'mediator';

export interface User {
  id: string;
  role: UserRole;
  name: string;
  email: string;
  rating: number;
  completedDeliveries?: number;
}

export interface CargoPost {
  id: string;
  userId: string;
  title: string;
  cargoType: string;
  weight: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  pickupLocation: {
    address: string;
    datetime: string;
  };
  dropoffLocation: {
    address: string;
    datetime: string;
  };
  status: 'posted' | 'assigned' | 'in-transit' | 'delivered';
  price: number;
  specialInstructions?: string;
  createdAt: string;
}