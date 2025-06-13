
import React from 'react';
import { ShoppingCart, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">SmartSeva</h1>
              <p className="text-xs text-muted-foreground">Your Digital Service Center</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary"
                placeholder="Search products, services..."
              />
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-1">
              <ShoppingCart className="h-5 w-5" />
              <span>Cart (0)</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-1">
              <User className="h-5 w-5" />
              <span className="hidden sm:inline">Login</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
