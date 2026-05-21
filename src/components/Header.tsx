import { Beaker, ShieldAlert, CheckCircle2, FlaskConical } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <FlaskConical className="w-6 h-6 text-blue-600" />
          </div>
          <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">实验技术深度指南</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6"
        >
          组织免疫荧光 (IF) <br />
          <span className="text-blue-600">封闭策略：从理论金标准到现代实践</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-600 leading-relaxed max-w-2xl"
        >
          封闭 (Blocking) 的选择常在“经典同源血清”与“现代 BSA 简法”间徘徊。本指南结合前沿实验分析，为您梳理最优决策逻辑。
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 p-6 bg-red-50 rounded-2xl border border-red-100"
          >
            <ShieldAlert className="w-6 h-6 text-red-500 shrink-0" />
            <div>
              <h3 className="font-bold text-red-900 mb-1">关键痛点：非特异结合</h3>
              <p className="text-sm text-red-800 leading-snug">
                组织中的 Fc 受体、静电荷基团及疏水区会诱导抗体非特异吸附，造成极高背景或假阳性。
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 p-6 bg-green-50 rounded-2xl border border-green-100"
          >
            <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
            <div>
              <h3 className="font-bold text-green-900 mb-1">现代目标：高信噪比 (SNR)</h3>
              <p className="text-sm text-green-800 leading-snug">
                通过精准封闭，在确保不掩盖弱阳性信号的前提下，最大限度降低背景噪声。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
