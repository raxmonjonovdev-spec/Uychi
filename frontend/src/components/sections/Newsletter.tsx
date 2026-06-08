'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="bg-bg-primary py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold font-display mb-4">Stay Updated</h2>
        <p className="text-text-secondary mb-8">Get the latest news and opportunities from Uychi AI & IT Hub</p>
        
        {submitted ? (
          <div className="bg-accent-green/20 border border-accent-green rounded-lg p-4 text-accent-green">
            Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-bg-surface border border-white/10 rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue"
            />
            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
