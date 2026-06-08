'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const startups = [
  {
    id: 1,
    name: 'MedTech AI',
    tagline: 'AI-powered diagnostic assistant for rural clinics',
    icon: '🏥',
  },
  {
    id: 2,
    name: 'FinTech AI',
    tagline: 'AI credit scoring and micro-lending platform',
    icon: '💰',
  },
  {
    id: 3,
    name: 'AgriTech AI',
    tagline: 'Satellite + IoT crop monitoring with AI yield prediction',
    icon: '🌾',
  },
];

export default function FeaturedStartups() {
  return (
    <section className="bg-bg-surface py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold font-display text-center mb-16">Featured Startups</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {startups.map((startup, i) => (
            <motion.div
              key={startup.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-accent-blue/10 to-accent-violet/10 border border-white/10 rounded-xl p-8 hover:border-accent-blue transition-all group cursor-pointer"
            >
              <div className="text-4xl mb-4">{startup.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{startup.name}</h3>
              <p className="text-text-secondary mb-6">{startup.tagline}</p>
              <div className="flex items-center text-accent-blue group-hover:translate-x-2 transition-transform">
                <span className="text-sm font-semibold">View Project</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
