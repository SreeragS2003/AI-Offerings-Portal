import type { Offering, TeamMember } from "@/types";

export const TEAM: TeamMember[] = [
  { name: "Name 1", role: "VP, AI Solutions", bio: "Shapes the portfolio and partnerships that move AI from idea to impact.", photo: "1" },
  { name: "Name 2", role: "Head of Applied AI", bio: "Leads teams building reliable, production-ready AI experiences for enterprise clients.", photo: "2" },
  { name: "Name 3", role: "Director, AI Strategy", bio: "Helps organizations identify the highest-value opportunities for responsible AI adoption.", photo: "3" },
  { name: "Name 4", role: "Principal Architect", bio: "Designs secure AI platforms that connect data, models, and business workflows.", photo: "4" },
];

export const OFFERINGS: Offering[] = [
  {
    id: 1,
    name: "CodeCrafter",
    category: "Generative AI",
    tagline: "AI-Native Modernization platform",
    description:
      "Build, fine-tune, and deploy large language models at enterprise scale with built-in guardrails, audit trails, and multi-model routing.",
    url: import.meta.env.VITE_OFFERING_CODECRAFTER_URL,
    icon: "✦",
  },
  {
    id: 2,
    name: "DocumentIQ",
    category: "NLP & Text",
    tagline: "Intelligent document processing",
    description:
      "Extract, classify, and validate structured data from any document type — contracts, invoices, forms — with 97%+ accuracy using transformer models.",
    url: import.meta.env.VITE_OFFERING_DOCUMENT_IQ_URL,
    icon: "◈",
  },
  {
    id: 3,
    name: "VisionEdge",
    category: "Computer Vision",
    tagline: "Real-time visual inspection AI",
    description:
      "Deploy defect detection, quality assurance, and object recognition pipelines on edge hardware with sub-50ms inference latency.",
    url: import.meta.env.VITE_OFFERING_VISION_EDGE_URL,
    icon: "◉",
  },
  {
    id: 4,
    name: "ProcessBot",
    category: "Process Automation",
    tagline: "AI-native process automation",
    description:
      "Combine RPA with AI decision-making to automate complex workflows that traditional bots cannot handle — including exception management.",
    url: import.meta.env.VITE_OFFERING_PROCESS_BOT_URL,
    icon: "⬡",
  },
  {
    id: 5,
    name: "InsightEngine",
    category: "AI Analytics",
    tagline: "Predictive analytics at scale",
    description:
      "Surface hidden patterns in operational data with automated feature engineering, model selection, and real-time dashboard integration.",
    url: import.meta.env.VITE_OFFERING_INSIGHT_ENGINE_URL,
    icon: "◆",
  },
  {
    id: 6,
    name: "ModelHub",
    category: "AI Infrastructure",
    tagline: "Centralized model registry & serving",
    description:
      "Manage the full ML model lifecycle — versioning, A/B testing, rollback, and canary deployments — from a single governance layer.",
    url: import.meta.env.VITE_OFFERING_MODEL_HUB_URL,
    icon: "⬛",
  },
  {
    id: 7,
    name: "SentimentPulse",
    category: "NLP & Text",
    tagline: "Customer voice analytics",
    description:
      "Analyze sentiment, intent, and emerging themes across customer calls, tickets, and reviews in 40+ languages with real-time alerting.",
    url: import.meta.env.VITE_OFFERING_SENTIMENT_PULSE_URL,
    icon: "◎",
  },
  {
    id: 8,
    name: "AnomalyGuard",
    category: "AI Analytics",
    tagline: "Multivariate anomaly detection",
    description:
      "Detect operational anomalies across time-series sensor data, logs, and transactions using unsupervised ML — with explainable root-cause analysis.",
    url: import.meta.env.VITE_OFFERING_ANOMALY_GUARD_URL,
    icon: "▲",
  },
  {
    id: 9,
    name: "CopilotFactory",
    category: "Generative AI",
    tagline: "Custom AI copilot builder",
    description:
      "Rapidly build and deploy domain-specific AI copilots for internal teams — grounded on your knowledge base, secured by your IAM.",
    url: import.meta.env.VITE_OFFERING_COPILOT_FACTORY_URL,
    icon: "✦",
  },
  {
    id: 10,
    name: "FraudShield",
    category: "AI Analytics",
    tagline: "Real-time fraud detection",
    description:
      "Intercept fraudulent transactions in under 10ms using adaptive graph neural networks that evolve with attacker behavior.",
    url: import.meta.env.VITE_OFFERING_FRAUD_SHIELD_URL,
    icon: "◈",
  },
  {
    id: 11,
    name: "SupplyMind",
    category: "AI Analytics",
    tagline: "Supply chain intelligence",
    description:
      "Forecast demand, optimize inventory, and predict disruptions across multi-tier supply chains with scenario simulation.",
    url: import.meta.env.VITE_OFFERING_SUPPLY_MIND_URL,
    icon: "◆",
  },
  {
    id: 12,
    name: "MedVision",
    category: "Computer Vision",
    tagline: "Medical imaging AI",
    description:
      "FDA-ready computer vision platform for radiology, pathology, and dermatology — with DICOM support and clinician-in-the-loop workflows.",
    url: import.meta.env.VITE_OFFERING_MED_VISION_URL,
    icon: "◉",
  },
  {
    id: 13,
    name: "ContractAI",
    category: "NLP & Text",
    tagline: "Contract lifecycle intelligence",
    description:
      "Review, redline, and risk-score contracts at machine speed. Extract obligations, key dates, and clause deviations automatically.",
    url: import.meta.env.VITE_OFFERING_CONTRACT_AI_URL,
    icon: "◈",
  },
  {
    id: 14,
    name: "DataForgе",
    category: "AI Infrastructure",
    tagline: "Synthetic data generation",
    description:
      "Generate statistically faithful synthetic datasets for training, testing, and privacy-safe data sharing without exposing PII.",
    url: import.meta.env.VITE_OFFERING_DATA_FORGE_URL,
    icon: "⬛",
  },
  {
    id: 15,
    name: "AgentMesh",
    category: "Generative AI",
    tagline: "Multi-agent orchestration framework",
    description:
      "Design, deploy, and monitor networks of autonomous AI agents that collaborate on complex multi-step enterprise tasks.",
    url: import.meta.env.VITE_OFFERING_AGENT_MESH_URL,
    icon: "✦",
  },
  {
    id: 16,
    name: "RetailLens",
    category: "Computer Vision",
    tagline: "In-store analytics platform",
    description:
      "Track shelf compliance, customer dwell patterns, and planogram adherence from existing CCTV infrastructure — no new hardware needed.",
    url: import.meta.env.VITE_OFFERING_RETAIL_LENS_URL,
    icon: "◉",
  },
  {
    id: 17,
    name: "HR AutoPilot",
    category: "Process Automation",
    tagline: "AI-powered HR operations",
    description:
      "Automate candidate screening, onboarding workflows, leave processing, and compliance reporting with conversational AI interfaces.",
    url: import.meta.env.VITE_OFFERING_HR_AUTOPILOT_URL,
    icon: "⬡",
  },
  {
    id: 18,
    name: "CodeAssist Pro",
    category: "Generative AI",
    tagline: "Enterprise code generation",
    description:
      "Secure, on-premise code completion and generation grounded on your internal APIs, standards, and legacy codebase — no data leaves your perimeter.",
    url: import.meta.env.VITE_OFFERING_CODE_ASSIST_PRO_URL,
    icon: "✦",
  },
  {
    id: 19,
    name: "MLOps360",
    category: "AI Infrastructure",
    tagline: "End-to-end MLOps platform",
    description:
      "Unify experiment tracking, pipeline orchestration, model monitoring, and drift detection across cloud and on-premise environments.",
    url: import.meta.env.VITE_OFFERING_MLOPS_360_URL,
    icon: "⬛",
  },
  {
    id: 20,
    name: "CallIntelligence",
    category: "NLP & Text",
    tagline: "Contact center AI analytics",
    description:
      "Transcribe, analyze, and coach from 100% of customer calls — surfacing compliance risks, escalation signals, and agent improvement areas.",
    url: import.meta.env.VITE_OFFERING_CALL_INTELLIGENCE_URL,
    icon: "◎",
  },
  {
    id: 21,
    name: "PredictiveMaint",
    category: "AI Analytics",
    tagline: "Asset failure prediction",
    description:
      "Reduce unplanned downtime by 40% by predicting equipment failures days in advance using IoT telemetry and physics-informed ML.",
    url: import.meta.env.VITE_OFFERING_PREDICTIVE_MAINT_URL,
    icon: "◆",
  },
  {
    id: 22,
    name: "SafetyWatch",
    category: "Computer Vision",
    tagline: "Workplace safety AI",
    description:
      "Detect PPE violations, unsafe postures, and restricted-zone breaches in real time across manufacturing, construction, and logistics sites.",
    url: import.meta.env.VITE_OFFERING_SAFETY_WATCH_URL,
    icon: "◉",
  },
  {
    id: 23,
    name: "TaxAssist AI",
    category: "Process Automation",
    tagline: "Intelligent tax processing",
    description:
      "Automate tax form classification, data extraction, reconciliation, and exception flagging — reducing processing time by up to 70%.",
    url: import.meta.env.VITE_OFFERING_TAX_ASSIST_URL,
    icon: "⬡",
  },
  {
    id: 24,
    name: "KnowledgeGraph",
    category: "NLP & Text",
    tagline: "Enterprise knowledge graph builder",
    description:
      "Automatically construct and maintain an enterprise knowledge graph from unstructured documents, wikis, and databases for RAG applications.",
    url: import.meta.env.VITE_OFFERING_KNOWLEDGE_GRAPH_URL,
    icon: "◎",
  },
  {
    id: 25,
    name: "CloudCost AI",
    category: "AI Infrastructure",
    tagline: "ML workload cost optimizer",
    description:
      "Automatically right-size, schedule, and spot-bid ML training and inference workloads across AWS, Azure, and GCP to cut cloud spend.",
    url: import.meta.env.VITE_OFFERING_CLOUD_COST_AI_URL,
    icon: "⬛",
  },
  {
    id: 26,
    name: "PersonaEngine",
    category: "Generative AI",
    tagline: "AI-powered personalization at scale",
    description:
      "Deliver individualized content, offers, and experiences to millions of users in real time using contextual multi-armed bandit models.",
    url: import.meta.env.VITE_OFFERING_PERSONA_ENGINE_URL,
    icon: "✦",
  },
  {
    id: 27,
    name: "ESG Analyzer",
    category: "AI Analytics",
    tagline: "ESG data intelligence platform",
    description:
      "Aggregate, validate, and report on ESG metrics across your value chain — with regulatory framework mapping for GRI, TCFD, and CSRD.",
    url: import.meta.env.VITE_OFFERING_ESG_ANALYZER_URL,
    icon: "◆",
  },
];
