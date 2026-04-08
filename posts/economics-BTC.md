title: "BTC 定价模型研究资料汇总"
category: "economics"
date: "2026-04-10"




> 收集时间：2026-04-08
> 来源：学术论文、机构报告、行业分析

---

## 一、核心理论模型

### 1. Stock-to-Flow (S2F) 模型

**创始人**：PlanB (@100trillionUSD)
**核心论文**：
- [Modeling Bitcoin's Value with Scarcity](https://medium.com/@100trillionUSD/modeling-bitcoins-value-with-scarcity-91fa0fc03e25) (2019年3月)
- [Bitcoin Stock-to-Flow Cross Asset Model (S2FX)](https://medium.com/@100trillionUSD/bitcoin-stock-to-flow-cross-asset-model-50d260feed12) (2020年4月)

**模型原理**：
```
S2F Ratio = Total Stock (存量) ÷ Annual Flow (年产量)
```

**关键数据**（2024年减半后）：
| 资产 | S2F 比率 | 稀缺性等级 |
|------|---------|-----------|
| 黄金 | ~65 | 高 |
| 比特币 | ~113-120 | 极高 |
| 白银 | ~22 | 中等 |

**预测价格**：
- 2024-2028 周期平均价格：$500,000 (PlanB 预测)
- S2FX 模型预测：$288,000

**局限性**：
- 仅考虑供应端，忽略需求变化
- 无法预测黑天鹅事件
- 2022年熊市期间预测偏差达80%+

---

### 2. Metcalfe's Law (梅特卡夫定律)

**核心观点**：网络价值与用户数量的平方成正比
```
Network Value ∝ N²
```

**重要研究**：
- [Digital Blockchain Networks appear to be following Metcalfe's Law](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3078248) - Timothy Peterson (2018)
- Fidelity Digital Assets 估值报告 (2022年6月)

**应用方法**：
1. 使用活跃地址数作为网络采用度指标
2. 基于手机/互联网历史采用曲线预测未来增长
3. 价格与地址数的幂回归模型

**预测价格**（基于不同采用曲线）：
| 采用基准 | 2025年预测 | 2030年预测 |
|---------|-----------|-----------|
| 手机采用曲线 | $239,578 | $1,246,088 |
| 互联网采用曲线 | $100,229 | $343,186 |

---

### 3. 供需均衡框架模型

**重要论文**：
- [A supply and demand framework for Bitcoin price forecasting](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5059523) - Murray A. Rudd, Dennis Porter (2024年12月)

**核心发现**：
- 机构采用、战略储备积累和供应冲击协同推动价格上涨
- 保守情景：2027年初-2028年秋达到 $1M
- 牛市情景：2027年1月前达到 $1M+

---

## 二、学术研究论文

### 1. 机器学习与BTC价格预测

**论文**：Predicting Bitcoin (BTC) Price in the Context of Economic Theories: A Machine Learning Approach
- **期刊**：Entropy (Basel), 2022年10月
- **作者**：Sahar Erfanian 等
- **链接**：https://pmc.ncbi.nlm.nih.gov/articles/PMC9601835/

**研究方法**：
- OLS、Ensemble Learning、SVR、MLP 对比
- 宏观经济指标（供需理论）
- 微观经济指标（市场微观结构理论）
- 区块链信息指标（成本定价理论）
- 技术指标

**核心结论**：
- SVR（支持向量回归）模型表现最优
- 技术指标是短期价格预测的有效因子
- 宏观经济和区块链指标具有长期预测能力

---

### 2. BTC定价与采用理论

**论文**：Bitcoin Pricing, Adoption, and Usage: Theory and Evidence
- **机构**：Stanford Graduate School of Business
- **作者**：Susan Athey 等 (2016年8月)
- **链接**：https://www.gsb.stanford.edu/faculty-research/working-papers/bitcoin-pricing-adoption-usage-theory-evidence

**研究内容**：
- 用户采用与使用动态模型
- 汇率不确定性摩擦分析
- 市场基本面如何决定法币兑BTC汇率
- 用户类型、交易类型和地理分布的采用模式

---

### 3. BTC基本面价值与投机行为

**论文**：Bitcoin's fundamental value and speculative behavior: A new framework for price dynamics
- **期刊**：The North American Journal of Economics and Finance (2025)
- **作者**：Zhang Ting 等
- **链接**：https://ideas.repec.org/a/eee/ecofin/v80y2025ics1062940825001494.html

**理论框架**：
- 区分基本面投资者（基于网络效应、用户采用、算力）
- 区分投机者（基于历史价格走势）
- 捕捉波动率持续性、肥尾收益、长记忆性等特征

---

### 4. BTC回报预测能力研究

**论文**：Bitcoin Return Prediction: Is It Possible via Stock-to-Flow, Metcalfe's Law, Technical Analysis, or Market Sentiment?
- **期刊**：Journal of Risk and Financial Management (2024年10月)
- **作者**：Austin Shelton
- **链接**：https://www.mdpi.com/1911-8074/17/10/443

**测试的预测因子**：
- S2F Deflection
- Metcalfe's Law (% Change in N²)
- 技术指标（RSI、移动平均线）
- 市场情绪（Fear & Greed Index）

**核心发现**：
- S2F 和 Metcalfe's Law 在样本内有效，样本外预测能力有限
- 技术指标和市场情绪与回报相关性较弱
- 混合多模型策略可显著跑赢单纯持有

---

## 三、机构研究报告

### 1. Fidelity Digital Assets - BTC估值报告

**报告**：Valuing Bitcoin (2022年6月)
- **链接**：https://www.fidelitydigitalassets.com/sites/g/files/djuvja3256/files/acquiadam/1145306.1.0%20-%20Fidelity%20Digital%20Assets%20Valuing%20Bitcoin%20%2805.07%29.pdf

**主要观点**：
- BTC最好被理解为一种新兴货币资产
- 最优估值方法通过供需曲线分析
- Metcalfe's Law 是最具说服力的估值技术之一
- 采用曲线将是未来价值积累的最重要驱动因素

---

## 四、模型对比总结

| 模型 | 主要输入 | 时间跨度 | 优势 | 局限性 |
|-----|---------|---------|------|--------|
| **S2F** | 供应稀缺性 | 4+年周期 | 供应计划可预测 | 完全忽略需求 |
| **Metcalfe's Law** | 网络用户增长 | 长期 | 捕捉网络效应 | 假设采用曲线持续 |
| **供需框架** | 机构采用+供应 | 2-4年 | 综合考虑供需 | 依赖机构采用假设 |
| **机器学习** | 多因子综合 | 短期-中期 | 可捕捉复杂关系 | 需要大量数据 |
| **彩虹图** | 对数价格回归 | 4+年周期 | 直观可视化 | 无基本面基础 |
| **MVRV** | 市值/已实现市值 | 数月 | 捕捉市场情绪 | 需链上数据解读 |

---

## 五、实用工具与资源

### S2F 实时追踪工具
| 工具 | 特点 | 免费访问 |
|-----|------|---------|
| [LookIntoBitcoin](https://www.lookintobitcoin.com/) | 界面简洁，多种链上模型 | 是 |
| [Bitbo](https://charts.bitbo.io/stock-to-flow/) | S2F偏离度图表 | 是 |
| [Coinglass](https://coinglass.com/) | 实时S2F比率 | 是 |
| [Bitcoin Magazine Pro](https://www.bitcoinmagazinepro.com/charts/stock-to-flow-model/) | 专业级数据 | 部分免费 |

---

## 六、关键参考文献

1. PlanB. (2019). Modeling Bitcoin's Value with Scarcity. Medium.
2. PlanB. (2020). Bitcoin Stock-to-Flow Cross Asset Model. Medium.
3. Peterson, T. (2018). Metcalfe's Law as a Model for Bitcoin's Value. SSRN.
4. Fidelity Digital Assets. (2022). Valuing Bitcoin.
5. Erfanian, S. et al. (2022). Predicting Bitcoin Price in the Context of Economic Theories. Entropy.
6. Shelton, A. (2024). Bitcoin Return Prediction via S2F, Metcalfe's Law, TA, or Sentiment. JRFM.
7. Athey, S. et al. (2016). Bitcoin Pricing, Adoption, and Usage: Theory and Evidence. Stanford GSB.
8. Rudd, M.A. & Porter, D. (2024). A supply and demand framework for Bitcoin price forecasting. SSRN.

---

## 七、研究建议

1. **多模型验证**：不要依赖单一模型，结合S2F、Metcalfe's Law、MVRV等多种框架
2. **关注采用曲线**：网络用户增长是比供应更重要的长期驱动因素
3. **警惕黑天鹅**：所有模型都无法预测监管冲击、交易所崩溃等突发事件
4. **定期更新**：BTC市场结构快速演变，模型参数需要持续校准
5. **风险管理**：即使模型预测准确，仓位管理仍是投资成功的关键

---

*文档创建：小米 🌾*
*最后更新：2026-04-08*
