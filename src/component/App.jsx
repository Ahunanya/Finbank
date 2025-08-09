// src/component/App.jsx
import React from "react";
import {
  ShieldCheck,
  Smartphone,
  Banknote,
  Lock,
  DollarSign,
  PieChart,
} from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

function Tag({ text }) {
  return (
    <span className="px-4 py-1 bg-black text-white rounded-full text-sm">
      {text}
    </span>
  );
}

const spendingData = [
  { month: "Jan", spending: 400 },
  { month: "Feb", spending: 300 },
  { month: "Mar", spending: 500 },
  { month: "Apr", spending: 200 },
  { month: "May", spending: 450 },
  { month: "Jun", spending: 350 },
];

<div className="bg-white p-6 rounded-xl shadow">
  <h3 className="font-semibold mb-4">Spending Overview</h3>
  <div className="h-56">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={spendingData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="month" stroke="#6b7280" />
        <YAxis stroke="#6b7280" />
        <Tooltip />
        <Line type="monotone" dataKey="spending" stroke="#000" strokeWidth={2} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>




export default function App() {
  return (
    <div className="bg-white text-black font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-black"></div>
          <span className="font-bold text-lg">Finbank</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#services" className="hover:text-gray-500">
            Services
          </a>
          <a href="#about" className="hover:text-gray-500">
            About us
          </a>
          <a href="#contact" className="hover:text-gray-500">
            Contact us
          </a>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
          Sign Up
        </button>
      </nav>

      {/* Hero */}
      <section className="text-center py-16 px-4">
        <div className="mb-6 flex justify-center gap-4 flex-wrap">
          <Tag text="Track Spending" />
          <Tag text="FinTech Solution" />
          <Tag text="Digital Banking" />
          <Tag text="AI-driven" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          New era of finance.
        </h1>

        {/* Card mockup section */}
        <div className="relative mx-auto w-full max-w-5xl bg-gray-100 rounded-2xl p-8 shadow-lg flex flex-col md:flex-row gap-6">
          {/* Left: Features */}
          <div className="flex-1 space-y-4">
            <Feature
              title="Innovative"
              description="Seamless online banking experiences that give you control over your finances, anytime, anywhere."
              active
              icon={<ShieldCheck className="w-5 h-5" />}
            />
            <Feature
              title="Customer-Centric"
              description="We design everything with your needs at the center."
              icon={<Smartphone className="w-5 h-5" />}
            />
            <Feature
              title="Efficient"
              description="Faster, more reliable transactions with lower fees."
              icon={<Banknote className="w-5 h-5" />}
            />
          </div>

          {/* Right: Card image */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-80 h-48 bg-black text-white rounded-xl p-6 flex flex-col justify-between shadow-md">
              <span className="text-blue-400 font-semibold text-lg">
                Finbank Card
              </span>
              <div>
                <span className="text-xl tracking-widest">
                  0123 4567 8901 0203
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-300">
                <span>VALID 12/30</span>
                <span>CVV 123</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <ServiceCard
            title="Secure Transactions"
            description="Bank-level encryption to keep your money safe."
            icon={<Lock className="w-6 h-6" />}
          />
          <ServiceCard
            title="Currency Exchange"
            description="Real-time currency conversions with low fees."
            icon={<DollarSign className="w-6 h-6" />}
          />
          <ServiceCard
            title="Financial Insights"
            description="Track your spending and set savings goals."
            icon={<PieChart className="w-6 h-6" />}
          />
        </div>

        {/* Dashboard preview */}
        <div className="bg-white p-6 rounded-xl shadow">
  <h3 className="font-semibold mb-4">Spending Overview</h3>
  <div className="h-56">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={spendingData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="month" stroke="#6b7280" />
        <YAxis stroke="#6b7280" />
        <Tooltip />
        <Line type="monotone" dataKey="spending" stroke="#000" strokeWidth={2} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-4">Balance Summary</h3>
            <div className="text-3xl font-bold">$12,500</div>
            <p className="text-gray-500 mt-1">Available Balance</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">
          Ready to take control of your finances?
        </h2>
        <p className="text-gray-600 mb-8">
          Join thousands of users who trust Stellar for seamless online banking.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
          Get Started Now
        </button>
      </section>

 <footer className="bg-black text-white mt-16">
  {/* Top footer content */}
  <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
    
    {/* Column 1 - Brand + Social */}
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-6 h-6 rounded-full bg-white"></div>
        <span className="font-bold text-lg">Finbank</span>
      </div>
      <p className="text-gray-400 text-sm mb-6 max-w-sm">
        Redefining finance with security, speed, and simplicity.  
        Trusted by thousands of users worldwide.
      </p>

      <h4 className="font-semibold mb-3">Follow Us</h4>
      <div className="flex space-x-4 text-gray-400">
        <a href="#"><Facebook className="w-5 h-5 hover:text-white" /></a>
        <a href="#"><Twitter className="w-5 h-5 hover:text-white" /></a>
        <a href="#"><Linkedin className="w-5 h-5 hover:text-white" /></a>
        <a href="#"><Instagram className="w-5 h-5 hover:text-white" /></a>
      </div>
    </div>

    {/* Column 2 - Links */}
    <div className="grid grid-cols-2 gap-8">
      {/* Company Links */}
      <div>
        <h4 className="font-semibold mb-3">Company</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><a href="#about" className="hover:text-white">About Us</a></li>
          <li><a href="#services" className="hover:text-white">Services</a></li>
          <li><a href="#careers" className="hover:text-white">Careers</a></li>
          <li><a href="#blog" className="hover:text-white">Blog</a></li>
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h4 className="font-semibold mb-3">Resources</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><a href="#help" className="hover:text-white">Help Center</a></li>
          <li><a href="#faq" className="hover:text-white">FAQs</a></li>
          <li><a href="#security" className="hover:text-white">Security</a></li>
          <li><a href="#terms" className="hover:text-white">Terms of Service</a></li>
        </ul>
      </div>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
    © {new Date().getFullYear()} Stellar Finance. All rights reserved.
  </div>
</footer>
  </div>
  );
}

// Feature Component
function Feature({ title, description, icon, active }) {
  return (
    <div
      className={`p-4 rounded-lg border flex items-start space-x-3 ${
        active ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="mt-1">{icon}</div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p
          className={`text-sm mt-1 ${
            active ? "opacity-80" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

// Service Card Component
function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <div className="mb-4 text-black">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
  );
}
