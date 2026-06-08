'use client';

import { motion } from 'framer-motion';
import { Zap, Users, TrendingUp } from 'lucide-react';

const propositions = [
  {
    icon: Zap,
    title: 'AI-Powered Ecosystem',
    description: 'Cutting-edge AI labs, deep learning infrastructure, and R&D centers.',
  },
  {
    icon: Users,
    title: 'Startup-Ready Infrastructure',
    description: 'Coworking spaces, mentorship, funding access, legal support.',
  },
  {
    icon: TrendingUp,
    title: 'Government-Backed Growth',
    description: 'IT Park tax benefits, state grants, and bilateral tech agreements.',
  },
];

export default function ValueProposition() {
  return (
    <section className="bg-bg-primary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold font-display text-center mb-16">Why Uychi?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {propositions.map((prop, i) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-bg-surface border border-white/10 rounded-xl p-8 hover:border-accent-blue transition-all"
              >
                <Icon className="w-10 h-10 text-accent-blue mb-4" />
                <h3 className="text-xl font-bold mb-3">{prop.title}</h3>
                <p className="text-text-secondary">{prop.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
