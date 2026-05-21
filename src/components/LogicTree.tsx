import { AlertCircle, User, MousePointer2, Fingerprint } from 'lucide-react';
import { motion } from 'motion/react';

export default function LogicTree() {
  return (
    <section className="py-20 bg-slate-900 text-white rounded-[3rem] mx-6 mb-16 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-4xl mx-auto px-10 relative">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            核心辨析：一抗封闭 vs. 二抗封闭
          </h2>
          <p className="text-slate-400 max-w-2xl leading-relaxed">
            严格来说，实验中存在两个“封闭”时刻。它们的目的不同，操作逻辑也不同。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* Timeline Connector */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2" />
          
          {/* Phase 1 */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm">01</div>
              <h3 className="text-xl font-bold text-blue-400">Pre-Primary Blocking</h3>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">主封闭 (一抗前)</span>
              <p className="text-sm text-slate-200 mb-4 font-medium">目的是“占位”。在抗体进入前，先用蛋白质占领组织内所有的 Fc 受体和电荷位点。</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-xs">
                  <span className="text-blue-500">●</span>
                  <span className="text-slate-400">浓度：5-10%</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <span className="text-blue-500">●</span>
                  <span className="text-slate-400">策略：必须考虑二抗种属 (Serum)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-sm">02</div>
              <h3 className="text-xl font-bold text-emerald-400">Secondary Diluent</h3>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">维持封闭 (二抗时)</span>
              <p className="text-sm text-slate-200 mb-4 font-medium">目的是“竞争”。在二抗孵育液中保留低浓度封闭成分，防止二抗在长时间孵育中移位或寻找非特异位点。</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-xs">
                  <span className="text-emerald-500">●</span>
                  <span className="text-slate-400">浓度：1-2%</span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <span className="text-emerald-500">●</span>
                  <span className="text-slate-400">策略：与主封闭一致 (Serum-matched)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-blue-500/5 border border-blue-500/20 rounded-3xl">
          <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
             <AlertCircle className="w-5 h-5 text-blue-400" />
             专家建议：是否有必要单独再封闭一次？
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            通常情况下，<span className="text-white font-bold underline decoration-blue-500 decoration-2 underline-offset-4">不需要</span>在孵育完一抗后再单独进行一次二抗前的封闭。因为一抗前的“主封闭”已经完成了对组织位点的占据。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <span className="text-xs font-bold text-slate-400 block mb-1">极少数需区分的场景</span>
              <p className="text-xs text-slate-500">使用 Biotin-Streptavidin 系统时，一抗和二抗间需专门阻断内源性生物素。</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <span className="text-xs font-bold text-slate-400 block mb-1">二抗背景过高的补救</span>
              <p className="text-xs text-slate-500">若背景极强，可尝试在二抗前增加 10min 的 10% 同源血清二次封闭。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
