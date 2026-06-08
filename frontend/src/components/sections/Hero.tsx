'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-bg-primary to-bg-surface flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold font-display mb-6 bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-violet bg-clip-text text-transparent"
        >
          Building the Future of AI & Digital Innovation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto"
        >
          Uychi AI & IT Hub - Central Asias emerging technology epicenter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="primary" size="lg">
            Become a Partner
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="secondary" size="lg">
            Open Office in Uychi
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
