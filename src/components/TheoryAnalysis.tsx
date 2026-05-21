import { motion } from 'motion/react';
import { Scale, Brain, ShieldCheck } from 'lucide-react';

export default function TheoryAnalysis() {
  const theories = [
    {
      title: "同源封闭 (Homologous)",
      subtitle: "经典“金标准”",
      logic: "占据二抗的潜在非特异性结合位点",
      evidence: "血清中的正常 IgG 可预先占据组织中的 Fc 受体。",
      verdict: "针对 Fc 受体丰富的组织（如脾脏、淋巴）效果最佳。",
      icon: <Scale className="w-6 h-6 text-blue-500" />,
      color: "from-blue-50 to-indigo-50 border-blue-200"
    },
    {
      title: "异源/通用封闭 (Heterologous)",
      subtitle: "现代高效法",
      logic: "利用 BSA 或 Casein 进行物理及电荷屏蔽",
      evidence: "二抗大多经过亲和纯化，非特异性结合率极低。",
      verdict: "适用于 90% 以上的常规 IF 实验，成本极低。",
      icon: <Brain className="w-6 h-6 text-emerald-500" />,
      color: "from-emerald-50 to-teal-50 border-emerald-200"
    }
  ];

  return (
    <section className="py-16 max-w-4xl mx-auto px-6">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">科学原理：两种理论的博弈</h2>
        <p className="text-slate-500 max-w-xl">
          为什么“同源封闭”不再是必须的？我们通过三层维度进行科学剖析。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {theories.map((theory, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`p-8 rounded-[2.5rem] border-2 bg-gradient-to-br ${theory.color} relative overflow-hidden`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white rounded-2xl shadow-sm">
                {theory.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 leading-none">{theory.title}</h3>
                <span className="text-xs font-bold text-slate-400 uppercase mt-1 inline-block tracking-widest">{theory.subtitle}</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase block mb-1">主张逻辑</span>
                <p className="text-slate-700 font-medium">{theory.logic}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase block mb-1">关键依据</span>
                <p className="text-sm text-slate-600 leading-relaxed">{theory.evidence}</p>
              </div>
              <div className="pt-4 border-t border-slate-200/50">
                <p className="text-xs font-bold text-slate-800">
                  <span className="text-blue-600 mr-2">专家结论:</span>
                  {theory.verdict}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-slate-900 text-white rounded-[2rem] p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
           <ShieldCheck className="w-5 h-5 text-emerald-400" />
           现代真相：为什么 BSA 往往足够？
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-2">
            <span className="text-2xl font-bold text-blue-400">01</span>
            <h4 className="font-bold text-sm">洗脱效应</h4>
            <p className="text-xs text-slate-400">封闭后充分洗掉多余血清，残留 IgG 浓度极低，难以与二抗产生大规模竞争。</p>
          </div>
          <div className="space-y-2">
            <span className="text-2xl font-bold text-blue-400">02</span>
            <h4 className="font-bold text-sm">浓度梯度</h4>
            <p className="text-xs text-slate-400">二抗工作浓度虽低(μg/mL)，但其抗原特异性亲和力极强，远胜非特异吸附。</p>
          </div>
          <div className="space-y-2">
            <span className="text-2xl font-bold text-blue-400">03</span>
            <h4 className="font-bold text-sm">纯化工艺</h4>
            <p className="text-xs text-slate-400">商品化二抗多经过交叉吸附，针对性的背景干扰已在生产阶段被大规模过滤。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
