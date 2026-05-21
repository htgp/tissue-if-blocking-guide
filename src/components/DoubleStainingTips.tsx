import { AlertCircle, Zap, Microscope, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

export default function DoubleStainingTips() {
  return (
    <section className="py-16 max-w-4xl mx-auto px-6 mb-20 text-slate-800">
      <div className="flex items-center gap-2 mb-10">
        <Zap className="w-5 h-5 text-amber-500" />
        <h2 className="text-2xl font-bold tracking-tight">实验方案优化与配方建议</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold flex items-center gap-2 mb-3">
              <Microscope className="w-5 h-5 text-blue-500" />
              针对不同样本的封闭决策
            </h3>
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                <span className="text-xs font-bold text-blue-600 block mb-1">场景 1：常规免疫荧光</span>
                <p className="text-sm font-medium">推荐使用 1-3% BSA (或 0.5% Casein)</p>
                <p className="text-xs text-slate-500 mt-1">理由：成本低，排除血清 IgG 竞争，兼容绝大多数商业化高纯度二抗。</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-xl border border-purple-100">
                <span className="text-xs font-bold text-purple-600 block mb-1">场景 2：高背景组织（脾、淋巴）</span>
                <p className="text-sm font-medium">推荐使用 1% BSA + 2-5% 同源血清</p>
                <p className="text-xs text-slate-500 mt-1">理由：双重保险。BSA 封闭蛋白吸附，血清封闭丰富的 Fc 受体。</p>
              </div>
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
                <span className="text-xs font-bold text-amber-600 block mb-1">场景 3：磷酸化蛋白检测</span>
                <p className="text-sm font-medium">绝对避免使用脱脂牛奶</p>
                <p className="text-xs text-slate-500 mt-1">理由：牛奶含磷酸酶。应改用 BSA 或 0.5% Casein。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-slate-500 uppercase text-xs tracking-widest mb-4">典型配方示例 (Formulations)</h4>
          
          <div className="p-4 bg-slate-900 rounded-2xl text-white">
            <h5 className="font-mono text-emerald-400 text-sm mb-2">1% BSA/PBST (通用型)</h5>
            <p className="font-mono text-xs text-slate-400 leading-relaxed">
              1g BSA + 100mL PBS <br/>
              + 0.1% Tween-20 (增加润湿性)
            </p>
          </div>

          <div className="p-4 bg-slate-900 rounded-2xl text-white">
            <h5 className="font-mono text-emerald-400 text-sm mb-2">5% 正常血清 (针对特殊组织)</h5>
            <p className="font-mono text-xs text-slate-400 leading-relaxed">
              5mL 正常血清 + 95mLPBS <br/>
              + 0.3% Triton X-100 (增加厚组织通透性)
            </p>
          </div>

          <div className="mt-6 flex gap-3 p-4 bg-amber-50 border border-amber-100 rounded-xl">
             <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
             <p className="text-xs text-amber-800 leading-relaxed">
               <span className="font-bold">过滤建议：</span> 封闭液应采用 0.22µm 滤膜过滤，以防止非特异性蛋白斑点形成，特别是在高倍镜成像下。
             </p>
          </div>
        </div>
      </div>

      <div className="mt-12 p-8 bg-slate-50 border border-slate-200 rounded-[2rem] text-center">
        <p className="text-slate-500 text-sm italic">
          “Nature Protocols (2015) 指出：对多数商业化高纯度二抗，BSA 封闭已足够。无需盲目追求同源血清，应优先评估抗体纯度与样本通透性。”
        </p>
      </div>
    </section>
  );
}
