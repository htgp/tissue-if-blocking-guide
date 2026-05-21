import { SelectionState, Recommendation } from '../types';

export function getRecommendations(state: SelectionState): Recommendation[] {
  const recommendations: Recommendation[] = [];

  // Logic 1: Gold Standard (Serum)
  recommendations.push({
    title: `经典同源封闭: 正常${state.secondaryHost}血清`,
    rank: "Primary",
    composition: `5% - 10% Normal ${state.secondaryHost} Serum in PBS/TBS`,
    reason: `与二抗宿主 (${state.secondaryHost}) 种属匹配，可最有效地封闭潜在的二抗非特异性结合位点及 Fc 受体。`,
    tips: [
      "孵育时间：30-60分钟，室温即可。",
      "若二抗纯度极高，可尝试降低浓度至 2%。"
    ]
  });

  // Logic 2: Modern/Economy (BSA)
  recommendations.push({
    title: "现代高效封闭: BSA 方案",
    rank: "Alternative",
    composition: "1% - 3% BSA + 0.1% Tween-20",
    reason: "成分简单且确切，不含内源性 IgG，能依靠物理屏蔽和电荷相互作用达到极佳信噪比。",
    tips: [
      "适用于 90% 的高纯度、亲和纯化二抗。",
      "成本极低，且比血清更稳定。"
    ]
  });

  // Logic 3: Special Tissue considerations
  if (state.tissueType === "immune") {
    recommendations.push({
      title: "针对高 Fc 受体组织: 双重强化封闭",
      rank: "Special",
      composition: `2% Normal ${state.secondaryHost} Serum + 1% BSA`,
      reason: "脾脏、淋巴等组织 Fc 受体极丰富，组合方案可同时针对受体和背景电荷吸附。",
      tips: [
        "建议加入 0.3% Triton X-100 增加组织通透性。",
        "可适当延长封闭时间至 90 分钟。"
      ]
    });
  }

  // Logic 4: Self-Host Warning
  if (state.primaryHost === state.primaryTarget) {
    recommendations.push({
      title: "风险提示: 同种属抗体污染 (e.g. Mouse-on-Mouse)",
      rank: "Special",
      composition: "专门的 MOM 阻断试剂 + BSA",
      reason: "您的二抗可能会直接结合组织内源性 IgG (例如鼠抗鼠)。",
      tips: [
        "建议使用特殊的阻断试剂封锁内源性 IgG。",
        "使用 F(ab) 片段化二抗可减少此类干扰。"
      ]
    });
  }

  return recommendations;
}
