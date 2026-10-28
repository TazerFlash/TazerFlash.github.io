// All site copy lives here. Edit this file to update the portfolio; components only render it.
// Wrap text in **double asterisks** to bold it (used to highlight metrics).
// Leave a URL as an empty string to hide that link until it is ready.

export const site = {
  name: 'Rohan Pol',
  initials: 'RP',
  title: 'Rohan Pol | Data Scientist, Product Analytics & Generative AI',
  description:
    'Data Scientist with 2+ years across Google, ICCC Bharat, and Philips, working on product analytics, machine learning, and Generative AI.',
  ogImage: 'og.png',
  resume: 'resume.pdf',
  // Optional: drop a photo at public/profile.jpg and it replaces the initials automatically.
  photo: 'profile.jpg',
};

export const contact = {
  email: 'rohanpolwork@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rohan-pol-/',
  github: 'https://github.com/TazerFlash',
};

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const hero = {
  eyebrow: 'Product Analytics · Generative AI',
  name: 'Rohan Pol',
  headline: 'Data Scientist, Product Analytics & Generative AI',
  tagline:
    'Turning product data and LLMs into decisions, from launch-stage funnel analysis at Google to agentic AI pipelines for Ads abuse detection.',
  stats: [
    { value: '8% → 14%', label: 'Onboarding retention, Windows Desktop Google App' },
    { value: '66%', label: 'ATO pattern detection automated with a Gemini agentic pipeline' },
    { value: '$90M+', label: 'Potential fraud losses quantified for Ads Fraud leadership' },
    { value: '860+', label: 'Reviewers moved off manual workflows' },
  ],
};

export const about = {
  paragraphs: [
    'Data Scientist with 2+ years across Google, ICCC Bharat, and Philips, spanning product analytics, machine learning, and Generative AI.',
    'At Google, I worked on Ads Account Takeover and Scaled Abuse, building data pipelines and Gemini-based agentic and RAG systems, and contributed to the launch of the Windows Desktop Google App through a 20% project in product data science.',
    'I build end to end, from SQL and BigQuery pipelines and statistical testing to imbalanced-data classifiers and quantized on-device LLMs. I was recognised with two Google Peer Bonuses.',
  ],
  location: 'Hyderabad / Bengaluru, India',
  education: {
    school: 'Manipal Institute of Technology',
    degree: 'Bachelor of Technology (B.Tech)',
    dates: 'Sep 2020 – Jul 2024',
  },
  focus: ['Product Data Science', 'Generative AI', 'Anti-abuse ML'],
};

export type Job = {
  company: string;
  short: string; // label on the Experience tab
  role: string;
  location: string;
  dates: string;
  badge?: string;
  metrics: string[];
  bullets: string[];
};

export const experience: Job[] = [
  {
    company: 'Google',
    short: 'Ads Abuse',
    role: 'Data Scientist, Ads Account Takeover / Scaled Abuse',
    location: 'Hyderabad, India',
    dates: 'Apr 2025 – Oct 2026',
    metrics: ['860+ reviewers', '−60% analysis time', '66% automated', '$90M+ quantified'],
    bullets: [
      'Engineered a data pipeline to ingest and cleanse high-volume Account Takeover (ATO) data for Google Ads, replacing manual workflows for **860+ reviewers**.',
      'Ran statistical tests (t-tests) to validate removing **30+ redundant features** from ATO Incident Observations, improving data quality and cutting reviewer analysis time by **60%**.',
      'Developed a Gemini-based agentic pipeline grounded in Actor Threat Intelligence to improve training and calibration data for anti-abuse models, automating **66%** of ATO pattern detection.',
      'Built a Weekly Business Review for Ads Fraud leadership using a RAG pipeline over operational resource-utilisation tables, quantifying **$90M+** in potential fraud losses, **$75M+** in recoverable revenue, and the reviewer headcount needed to meet target response rates.',
    ],
  },
  {
    company: 'Google',
    short: 'Desktop App',
    role: 'Product Data Scientist, Windows Desktop Google App',
    location: 'NY-based team, remote',
    dates: 'Jan 2026 – Apr 2026',
    badge: '20% Project',
    metrics: ['8% → 14% retention', '−52% drop-off', '±2 pp forecast'],
    bullets: [
      'Partnered with product managers on the launch strategy for the **Windows Desktop Google App**, delivering onboarding-funnel, retention, and user-behaviour analyses that shaped pre-launch product decisions.',
      'Analysed the onboarding funnel to identify technical and accessibility blockers, isolating **8% retention** and a **73% drop-off** after search-profile creation.',
      'Redesigned onboarding around the most-used Search verticals based on a deep-dive into user queries, lifting retention from **8% to 14%** and reducing funnel drop-off by **52%**.',
      'Built a user-level churn classification model using Gradient Boosting on engagement signals from simulated pre-production releases, forecasting post-update retention within **±2 pp** of actuals to assess each fix’s impact before rollout.',
    ],
  },
  {
    company: 'ICCC Bharat',
    short: 'Analytics',
    role: 'Analytics Engineer',
    location: 'Bengaluru, India',
    dates: 'Oct 2024 – Mar 2025',
    metrics: ['−50% retrieval time', '77% precision', '+80% leads'],
    bullets: [
      'Designed and built a dynamic map dashboard prototype giving users instant access to college data through interactive location markers, cutting information retrieval time by **50%**.',
      'Built a Random Forest classifier predicting a student’s probability of admission from competitive-exam scores, achieving **77% precision**.',
      'Developed an interactive chatbot on the main website to collect user responses through an in-chat form, increasing lead generation by **80%**.',
    ],
  },
  {
    company: 'Philips',
    short: 'Intern',
    role: 'Data Scientist Intern',
    location: 'Chennai, India',
    dates: 'Jan 2024 – Jul 2024',
    metrics: ['6 KPIs', '−30–35% manual work', '−14% planning errors'],
    bullets: [
      'Performed exploratory data analysis on supply-chain customer-experience data to identify **6 KPIs** across billing disputes, project schedule, and delivery performance.',
      'Centralised a fragmented reporting system by building a Power BI dashboard app with Power Automate pipelines collecting data from SharePoint, reducing manual data work by **30–35%**.',
      'Built a logistic regression model to identify drivers of project-schedule errors; the resulting process changes cut planning errors by **14%**.',
    ],
  },
];

export type Project = {
  title: string;
  short: string; // label on the Projects tab
  description: string;
  status?: string; // optional build/test status shown under the description
  tags: string[];
  metrics: string[];
  highlights: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: 'Bankruptcy Prediction for Financial Institutions',
    short: 'Bankruptcy Prediction',
    description:
      'Predicting company bankruptcy from 95 financial ratios on a highly imbalanced dataset (3% bankrupt).',
    tags: ['Python', 'Scikit-Learn', 'Random Forest', 'XGBoost', 'SMOTE'],
    metrics: ['PR-AUC 0.31', '~10× base rate', '~60% recall'],
    highlights: [
      'Benchmarked Random Forest and XGBoost with SMOTE oversampling and undersampling on a stratified hold-out set.',
      'The best model (Random Forest + SMOTE) identified **~60% of bankrupt firms** with a **PR-AUC of 0.31**, about **10×** the base rate.',
      'Evaluated on recall and PR-AUC instead of accuracy, because a predict-all-solvent baseline already scores 97% accuracy.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/TazerFlash/Prediction-of-bankruptcy-for-a-Company' }],
  },
  {
    title: 'On-Device Financial Copilot (Dual-Memory RAG)',
    short: 'On-Device Financial Copilot',
    description:
      'An offline-first financial copilot that answers questions about SEC filings in the context of the user’s own portfolio, without sending any data off the device.',
    status: 'Runs end to end on desktop and on an Android emulator (Pixel 8 Pro).',
    tags: [
      'TypeScript',
      'React Native',
      'llama.cpp / llama.rn',
      'Qwen2.5-0.5B-Instruct (4-bit GGUF)',
      'bge-small',
      'BM25',
      'Hybrid RAG',
      'SEC EDGAR',
    ],
    metrics: ['hit@3 2/6 → 18/18', 'TTFT 6.0 s → ~3.3 s', '3.4 → 9.8 tok/s', '~256 MB memory'],
    highlights: [
      'Dual-memory design: Layer 1 searches **~3,300 passages** from the latest 10-K and 10-Q filings; Layer 2 holds the user’s watchlist, target prices, sentiment and notes, capped at **1,000 tokens**. Answers follow a Facts → Impact on you → Bottom line format and cite their sources.',
      'Hybrid retrieval (bge-small embeddings + BM25 keywords, fused by reciprocal rank) with company filtering, recency for “last quarter” questions and near-duplicate removal. An eval harness lifted retrieval hit@3 from **2/6 to 18/18** (6 questions × 3 runs).',
      'Halved time to first token (**6.0 s → ~3.3 s**) and kept app-owned memory at **~256 MB** on a laptop CPU.',
      'On Android, patched llama.rn to load its AVX2 build, raising generation from **3.4 to 9.8 tokens/s** and cutting a full answer from **~162 s to ~40 s** on the emulator.',
      'Benchmarked Qwen2.5 0.5B vs 1.5B and found the remaining errors come from the small model answering from the top-ranked passage; a re-ranker is the next step.',
      'Platform-agnostic TypeScript core shared by desktop and the Android app, with **23 unit tests**.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/TazerFlash/Contextual_Stock_Tracker' }],
  },
];

export const skills = [
  {
    group: 'Languages & Libraries',
    items: ['Python', 'SQL', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-Learn', 'Hugging Face Transformers'],
  },
  { group: 'Data & Cloud', items: ['BigQuery', 'Google Cloud Platform', 'Vertex AI', 'Git', 'Jupyter'] },
  { group: 'Analytics & BI', items: ['Power BI', 'Tableau', 'Excel'] },
  {
    group: 'Data Science',
    items: [
      'Statistical Testing',
      'Funnel & Retention Analysis',
      'Churn Modelling',
      'Predictive Modelling',
      'Imbalanced Classification',
    ],
  },
  {
    group: 'Generative AI',
    items: [
      'RAG Pipelines',
      'Agentic Pipelines (Gemini)',
      'Embeddings & Vector Search',
      'On-Device LLM Inference (llama.cpp, GGUF)',
    ],
  },
];

export const achievements = [
  {
    year: '2026',
    title: 'Google Peer Bonus (2×)',
    // TODO: add one line on what ATO NoteMaker does.
    description: 'Awarded by senior peers for the execution and launch of ATO NoteMaker.',
  },
  {
    year: '2025',
    title: 'HelloAI Hackathon',
    description: 'Selected among the top 100 teams in India for the finals, held at Google.',
  },
  {
    year: '2022',
    title: 'CSAW CTF',
    description: 'Qualified for the India finals as one of the top 15 teams.',
  },
];
