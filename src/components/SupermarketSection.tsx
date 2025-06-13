
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SupermarketSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Grocery', 'Snacks', 'Beverages', 'Household'];

  const products = [
    {
      id: 1,
      name: "Basmati Rice 5kg",
      category: "Grocery",
      price: 350,
      originalPrice: 400,
      image: "/placeholder.svg",
      inStock: true,
      discount: "12% OFF"
    },
    {
      id: 2,
      name: "Maggi Noodles Pack",
      category: "Snacks",
      price: 140,
      originalPrice: 160,
      image: "/placeholder.svg",
      inStock: true,
      discount: "13% OFF"
    },
    {
      id: 3,
      name: "Coca Cola 2L",
      category: "Beverages",
      price: 80,
      originalPrice: 90,
      image: "/placeholder.svg",
      inStock: true,
      discount: "11% OFF"
    },
    {
      id: 4,
      name: "Surf Excel 1kg",
      category: "Household",
      price: 180,
      originalPrice: 200,
      image: "/placeholder.svg",
      inStock: true,
      discount: "10% OFF"
    },
    {
      id: 5,
      name: "Tata Tea Premium",
      category: "Grocery",
      price: 240,
      originalPrice: 260,
      image: "/placeholder.svg",
      inStock: false,
      discount: "8% OFF"
    },
    {
      id: 6,
      name: "Lays Classic 25g",
      category: "Snacks",
      price: 20,
      originalPrice: 25,
      image: "/placeholder.svg",
      inStock: true,
      discount: "20% OFF"
    }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Digital Supermarket
          </h2>
          <p className="text-lg text-muted-foreground">
            Fresh products, competitive prices, home delivery available
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="px-6 py-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-4">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-lg bg-gray-100"
                  />
                  {product.discount && (
                    <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
                      {product.discount}
                    </Badge>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                      <span className="text-white font-semibold">Out of Stock</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-primary">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button 
                  className="w-full" 
                  disabled={!product.inStock}
                  variant={product.inStock ? "default" : "secondary"}
                >
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SupermarketSection;
