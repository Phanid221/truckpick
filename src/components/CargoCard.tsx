import React from 'react';
import { MapPin, Package, Calendar, DollarSign } from 'lucide-react';
import type { CargoPost } from '../types';

interface CargoCardProps {
  cargo: CargoPost;
  onInterested?: () => void;
  showActions?: boolean;
}

export default function CargoCard({ cargo, onInterested, showActions = true }: CargoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{cargo.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{cargo.cargoType}</p>
        </div>
        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
          {cargo.status}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <MapPin className="w-5 h-5 mr-2 text-gray-400" />
          <div>
            <p className="text-sm">From: {cargo.pickupLocation.address}</p>
            <p className="text-sm">To: {cargo.dropoffLocation.address}</p>
          </div>
        </div>

        <div className="flex items-center text-gray-600">
          <Package className="w-5 h-5 mr-2 text-gray-400" />
          <p className="text-sm">
            {cargo.weight}kg • {cargo.dimensions.length}x{cargo.dimensions.width}x{cargo.dimensions.height}m
          </p>
        </div>

        <div className="flex items-center text-gray-600">
          <Calendar className="w-5 h-5 mr-2 text-gray-400" />
          <p className="text-sm">
            Pickup: {new Date(cargo.pickupLocation.datetime).toLocaleDateString()}
          </p>
        </div>

        <div className="flex items-center text-gray-600">
          <DollarSign className="w-5 h-5 mr-2 text-gray-400" />
          <p className="text-sm font-medium">${cargo.price.toLocaleString()}</p>
        </div>
      </div>

      {showActions && (
        <div className="mt-6 flex space-x-3">
          <button
            onClick={onInterested}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Show Interest
          </button>
          <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
            View Details
          </button>
        </div>
      )}
    </div>
  );
}