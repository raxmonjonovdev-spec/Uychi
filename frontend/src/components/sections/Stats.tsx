'use client';

import { motion } from 'framer-motion';
import Counter from '@/components/ui/Counter';

const stats = [
  { label: 'Startup Projects', value: 12 },
  { label: 'Active Users', value: 2400 },
  { label: 'Jobs Created', value: 180 },
  { label: 'International Partners', value: 8 },
  { label: 'AI Solutions', value: 5 },
];

export default function Stats() {
  return (
    <section className="bg-bg-surface py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold font-mono text-accent-blue mb-2">
                <Counter value={stat.value} />
              </div>
              <p className="text-text-secondary text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
