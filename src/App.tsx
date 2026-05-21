/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import ProtocolWizard from './components/ProtocolWizard';
import TheoryAnalysis from './components/TheoryAnalysis';
import ComparisonCards from './components/ComparisonCards';
import LogicTree from './components/LogicTree';
import DoubleStainingTips from './components/DoubleStainingTips';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      <Header />
      
      <main>
        <ProtocolWizard />
        <TheoryAnalysis />
        <ComparisonCards />
        <LogicTree />
        <DoubleStainingTips />
      </main>

      <footer className="py-12 border-t border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-xs">IF</div>
            <span className="font-bold text-slate-900">Tissue IF Guide</span>
          </div>
          
          <p className="text-sm text-slate-500">
            © 2024 · 免疫荧光技术专题系列
          </p>

          <div className="flex gap-6">
            <span className="text-xs font-bold text-slate-400 uppercase cursor-help hover:text-slate-600 transition-colors">技术标准</span>
            <span className="text-xs font-bold text-slate-400 uppercase cursor-help hover:text-slate-600 transition-colors">文献支持</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
