import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MousePointer2, ChevronRight, FlaskConical, AlertCircle, CheckCircle2, History } from 'lucide-react';
import { Species, SelectionState } from '../types';
import { getRecommendations } from '../utils/recommender';

const speciesOptions: Species[] = ["Mouse", "Rabbit", "Rat", "Goat", "Donkey", "Human", "Other"];
const tissueOptions = [
  { id: "normal", label: "普通软组织 (心、肝、脑、肾)", icon: "🧠" },
  { id: "immune", label: "免疫/富血管组织 (脾、淋巴、骨髓)", icon: "🩸" },
  { id: "cell", label: "细胞爬片/涂片", icon: "🧫" },
  { id: "paraffin", label: "石蜡切片 (FFPE)", icon: "🕯️" },
];

export default function ProtocolWizard() {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState<SelectionState>({
    tissueType: "normal",
    primaryHost: "Rabbit",
    primaryTarget: "Mouse",
    secondaryHost: "Goat",
  });

  const recommendations = useMemo(() => getRecommendations(selection), [selection]);

  const updateSelection = (key: keyof SelectionState, value: any) => {
    setSelection(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));
  const reset = () => {
    setStep(1);
  };

  return (
    <section className="py-20 max-w-5xl mx-auto px-6" id="wizard">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">智能实验方案配置器</h2>
        <p className="text-slate-500">点击下方选项，我们将为您生成量身定制的封闭液建议。</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Selection Area (Left) */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/40 overflow-hidden sticky top-8">
            {/* Horizontal Step Indicator on Mobile, Vertical on Desktop */}
            <div className="flex lg:flex-col bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-100 p-4 lg:p-6 gap-2">
              {[
                { n: 1, text: "组织", icon: "🔬" },
                { n: 2, text: "一抗宿主", icon: "🧬" },
                { n: 3, text: "一抗靶标", icon: "🎯" },
                { n: 4, text: "二抗宿主", icon: "🧪" }
              ].map((s) => (
                <button
                  key={s.n}
                  onClick={() => setStep(s.n)}
                  className={`flex-1 lg:flex-none flex items-center gap-2 p-2 lg:p-3 rounded-lg lg:rounded-xl transition-all text-left ${
                    step === s.n ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-400 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-sm lg:text-base">{s.icon}</span>
                  <span className={`text-[10px] lg:text-xs font-bold uppercase tracking-wider ${step === s.n ? 'opacity-100' : 'opacity-60'} hidden sm:inline`}>{s.text}</span>
                </button>
              ))}
            </div>

            {/* Selection Body */}
            <div className="p-6 lg:p-8 min-h-[320px] flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex-grow"
                >
                  {step === 1 && (
                    <div className="grid grid-cols-1 gap-3">
                      {tissueOptions.map(opt => (
                        <button
                          key={opt.id}
                          onClick={() => { updateSelection('tissueType', opt.id); nextStep(); }}
                          className={`p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${
                            selection.tissueType === opt.id ? 'border-blue-500 bg-blue-50' : 'border-slate-100 hover:border-slate-200 bg-white'
                          }`}
                        >
                          <span className="text-xl">{opt.icon}</span>
                          <span className="font-bold text-slate-800 text-sm">{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {(step === 2 || step === 3 || step === 4) && (
                    <div className="grid grid-cols-3 gap-2">
                      {speciesOptions.map(species => {
                        const targetKey = step === 2 ? 'primaryHost' : step === 3 ? 'primaryTarget' : 'secondaryHost';
                        return (
                        <button
                          key={species}
                          onClick={() => { updateSelection(targetKey, species); nextStep(); }}
                          className={`p-3 rounded-lg border-2 transition-all text-center ${
                            selection[targetKey] === species ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-100' : 'border-slate-100 bg-white'
                          }`}
                        >
                           <span className="text-xs font-bold text-slate-700">{species}</span>
                        </button>
                      )})}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Summary of choices */}
              <div className="mt-8 pt-6 border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">当前体系</span>
                  <button onClick={reset} className="text-[10px] font-bold text-blue-500 hover:underline">重新配置</button>
                </div>
                <div className="flex flex-wrap gap-1">
                  <div className="px-2 py-0.5 bg-slate-100 rounded text-[10px] font-bold text-slate-600">组织: {tissueOptions.find(o => o.id === selection.tissueType)?.label.split(' ')[0]}</div>
                  <div className="px-2 py-0.5 bg-blue-50 rounded text-[10px] font-bold text-blue-600">{selection.primaryHost} anti-{selection.primaryTarget}</div>
                  <div className="px-2 py-0.5 bg-emerald-50 rounded text-[10px] font-bold text-emerald-600">宿主: {selection.secondaryHost}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Area (Right) */}
        <div className="lg:col-span-7">
            <div className="space-y-6">
              {recommendations.map((rec, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-6 lg:p-8 rounded-[2rem] border-2 bg-white relative overflow-hidden flex flex-col md:flex-row gap-6 ${
                    rec.rank === 'Primary' ? 'border-blue-500 ring-8 ring-blue-50' : 'border-slate-200 shadow-sm'
                  }`}
                >
                  {rec.rank === 'Primary' && (
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-bl-2xl">
                      建议首选 (Best SNR)
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        rec.rank === 'Primary' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        <FlaskConical className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-lg leading-tight">{rec.title}</h3>
                    </div>
                    
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">{rec.reason}</p>

                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">技术建议</span>
                      <ul className="space-y-1.5">
                         {rec.tips.map((tip, i) => (
                           <li key={i} className="text-xs text-slate-600 flex gap-2">
                             <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                             {tip}
                           </li>
                         ))}
                      </ul>
                    </div>
                  </div>

                  <div className="w-full md:w-56 shrink-0 flex flex-col gap-3">
                    <div className={`p-4 rounded-2xl h-full flex flex-col justify-center border ${
                      rec.rank === 'Primary' ? 'bg-blue-50 border-blue-100' : 'bg-slate-50 border-slate-100'
                    }`}>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">配方构成</span>
                      <p className={`font-mono text-xs font-bold leading-relaxed ${
                        rec.rank === 'Primary' ? 'text-blue-700' : 'text-slate-700'
                      }`}>
                        {rec.composition}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {recommendations.length === 0 && (
                <div className="p-20 text-center bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                  <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-400 font-medium">完善左侧参数以激活方案直达</p>
                </div>
              )}
            </div>
        </div>
      </div>
    </section>
  );
}
