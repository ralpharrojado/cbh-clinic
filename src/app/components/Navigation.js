'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#EAEAEA] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#4A90E2] text-3xl">medical_services</span>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold leading-tight tracking-tight text-[#111827]">CBH Clinic</h2>
              <p className="text-xs text-[#6B7280]">OB-GYNE &amp; Ultrasound Services</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-[#374151] hover:text-[#4A90E2]">Home</Link>
            <Link href="/services" className="text-sm font-medium text-[#374151] hover:text-[#4A90E2]">OB-GYNE Services</Link>
            <Link href="/ultrasound" className="text-sm font-medium text-[#374151] hover:text-[#4A90E2]">Ultrasound Services</Link>
            <Link href="/vaccination" className="text-sm font-medium text-[#374151] hover:text-[#4A90E2]">Vaccination Services</Link>
            <Link href="/booking" className="text-sm font-medium text-[#374151] hover:text-[#4A90E2]">Book Appointment</Link>
          </nav>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[#374151]">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#EAEAEA]">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-base font-medium text-[#374151] hover:text-[#4A90E2] py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="text-base font-medium text-[#374151] hover:text-[#4A90E2] py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                OB-GYNE Services
              </Link>
              <Link 
                href="/ultrasound" 
                className="text-base font-medium text-[#374151] hover:text-[#4A90E2] py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ultrasound Services
              </Link>
              <Link 
                href="/vaccination" 
                className="text-base font-medium text-[#374151] hover:text-[#4A90E2] py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Vaccination Services
              </Link>
              <Link 
                href="/booking" 
                className="text-base font-medium text-white bg-[#4A90E2] hover:bg-[#4A90E2]/90 py-3 px-4 rounded-lg text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
