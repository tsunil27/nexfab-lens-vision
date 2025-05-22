
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-nexfab-darker/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/b6ae6d47-33d5-4fde-b284-aa975447ed49.png" 
              alt="Nexfab.ai Logo" 
              className="h-8 mr-2"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-nexfab-purple to-nexfab-purple-light bg-clip-text text-transparent">
              Nexfab.ai
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">Home</Link>
          <Link to="/products" className="text-sm text-white/70 hover:text-white transition-colors">Products</Link>
          <Link to="/about" className="text-sm text-white/70 hover:text-white transition-colors">About Us</Link>
          <Link to="/contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact</Link>
          <Button variant="secondary" className="bg-nexfab-purple hover:bg-nexfab-purple-dark text-white">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-nexfab-darker/95 backdrop-blur-sm border-b border-white/10 transition-all duration-300",
        isMobileMenuOpen ? "max-h-64 py-4" : "max-h-0 py-0 overflow-hidden"
      )}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link to="/" className="text-sm text-white/70 hover:text-white py-2">Home</Link>
          <Link to="/products" className="text-sm text-white/70 hover:text-white py-2">Products</Link>
          <Link to="/about" className="text-sm text-white/70 hover:text-white py-2">About Us</Link>
          <Link to="/contact" className="text-sm text-white/70 hover:text-white py-2">Contact</Link>
          <Button variant="secondary" className="bg-nexfab-purple hover:bg-nexfab-purple-dark text-white w-full">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
