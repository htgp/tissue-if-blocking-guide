import { Layers, Dna, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function ComparisonCards() {
  const data = [
    {
      title: "正常血清 (Normal Serum)",
      icon: <Layers className="w-6 h-6 text-blue-500" />,
      description: "最常用且最强力的封闭选择。含有大量的免疫球蛋白和蛋白质，能极好地封闭Fc受体。",
      pros: ["含有多种蛋白质，覆盖面广", "专门封闭同种属的Fc通路", "背景通常最干净"],
      cons: ["可能含有内源性IgG（需考虑种属交叉）", "价格相对较高"],
      bestFor: "石蜡切片、冰冻切片、以及具有丰富Fc受体的组织（如脾脏、淋巴）。",
      color: "border-blue-200 bg-blue-50/50"
    },
    {
      title: "BSA (牛血清白蛋白)",
      icon: <Dna className="w-6 h-6 text-emerald-500" />,
      description: "一种高度纯化的单蛋白封闭剂。主要通过空间位阻和电荷相互作用来减少非特异结合。",
      pros: ["成分确切，不含内源性IgG", "成本低，性质稳定", "易于在实验室中配制"],
      cons: ["对Fc受体的封闭能力弱于血清", "在高灵敏度实验中可能封闭不全"],
      bestFor: "细胞爬片、背景本身较低的实验，或需要严格控制蛋白质成分的实验。",
      color: "border-emerald-200 bg-emerald-50/50"
    }
  ];

  return (
    <section className="py-16 max-w-4xl mx-auto px-6">
      <div className="flex items-center gap-2 mb-8">
        <Info className="w-5 h-5 text-slate-400" />
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">常用封闭剂深度对比</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`flex flex-col p-8 rounded-3xl border-2 ${item.color} relative overflow-hidden`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
            </div>
            
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              {item.description}
            </p>

            <div className="space-y-4 flex-grow">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">优势</h4>
                <ul className="text-sm space-y-2">
                  {item.pros.map((pro, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span className="text-slate-700">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">局限</h4>
                <ul className="text-sm space-y-2">
                  {item.cons.map((con, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-red-400 font-bold">!</span>
                      <span className="text-slate-700">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/50">
              <span className="text-xs font-bold text-slate-400 uppercase block mb-1">最推荐用于</span>
              <p className="text-sm text-slate-800 font-medium">
                {item.bestFor}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
