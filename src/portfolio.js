/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Fabrizio Bonavita",
  title: "Hi, I'm Fabrizio",
  subTitle: emoji(
    "Senior AI Engineer & Technical Lead with 7+ years of experience building production-grade Generative AI, RAG, and multi-agent systems for enterprise. M.Sc. in Communications Engineering (110/110 cum laude, Sapienza University of Rome). Specialized in Python, LLMs, LangChain, and cloud-native ML on GCP, AWS and Azure."
  ),
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/fraps93",
  linkedin: "https://www.linkedin.com/in/fabrizio-bonavita-ba9194110/",
  gmail: "fabriziobonavita93@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "SENIOR AI ENGINEER FOCUSED ON LLMs, RAG, MULTI-AGENT ORCHESTRATION AND ENTERPRISE-GRADE NLP",
  skills: [
    emoji(
      "⚡ Design and ship production-grade Retrieval-Augmented Generation (RAG / GraphRAG) pipelines with hybrid retrieval, supervised rerankers and parent–child chunking"
    ),
    emoji(
      "⚡ Architect multi-agent LLM systems for regulatory compliance, process governance and operational-guideline generation"
    ),
    emoji(
      "⚡ Build cloud-native ML services on GCP, AWS (SageMaker, Step Functions) and Azure with Docker, Kubernetes and CI/CD"
    ),
    emoji(
      "⚡ Lead end-to-end NLP solutions: classification, OCR, NER, semantic search, embeddings and vector databases"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "ai / llm",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "nlp",
      fontAwesomeClassname: "fas fa-comments"
    },
    {
      skillName: "machine learning",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "huggingface",
      fontAwesomeClassname: "fas fa-smile"
    },
    {
      skillName: "langchain",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "google-cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "microsoft-azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "agents",
      fontAwesomeClassname: "fas fa-users-cog"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Sapienza University of Rome",
      logo: require("./assets/images/sapienza.jpeg"),
      subHeader: "Master of Science in Communications Engineering",
      duration: "September 2016 - July 2019",
      desc: "Graduated 110/110 cum laude. Specialization in Machine Learning, Deep Learning, NLP, Data Science, IoT and Multimedia.",
      descBullets: [
        "Master Thesis: «Machine Learning techniques with a Granular Computing approach for text categorization». Supervisors Prof. Antonello Rizzi and Enrico De Santis",
        "Winner of the «Wanted the best» scholarship (Oct 2016)"
      ]
    },
    {
      schoolName: "Tor Vergata University of Rome",
      logo: require("./assets/images/tv.png"),
      subHeader:
        "Bachelor of Science in Media and Technology Sciences (Applied Mathematics)",
      duration: "September 2013 - July 2016",
      desc: "Graduated 110/110 cum laude. Topics: Mathematical Analysis, Fourier Analysis, Acoustics.",
      descBullets: [
        "Winner of the «Worthy Students» scholarship for 3 consecutive years (2013–2016)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
  
    {
      Stack: "Natural Language Processing",
      progressPercentage: "95%"
    },
    {
      Stack: "Semantic Search | Embeddings | RAG",
      progressPercentage: "90%"
    },

  {
      Stack: "LLM | Multi-Agent Systems",
      progressPercentage: "88%"
    },
    
    {
      Stack: "Python | BE Engineering",
      progressPercentage: "85%"
    },
    
    {
      Stack: "Cloud & MLOps (GCP / AWS / Azure)",
      progressPercentage: "70%"
    },
   
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "AI Tech Lead",
      company: "DOS Mind",
      companylogo: require("./assets/images/dosmind.jpg"),
      date: "April 2024 – Present",
      desc: "Partner of the company and technical lead of the DOS Mind AI spinoff. I drive R&D, architecture and delivery of LLM-based products for enterprise clients.",
      descBullets: [
        "Knowledge Hub: led research and architecture of a low-cost structured retrieval system combining vector-space geometry with a semantic correlation graph",
        "ContentLab: delivered a production-grade RAG pipeline with BM25 + semantic retrieval, parent-child chunking and supervised reranker (LLM-as-a-judge)",
        "Advanced RAG systems for PA regulatory circulars: correlate regulations and circulars to enterprise business processes to assess compliance and impact"
      ]
    },
    {
      role: "Deep Learning & NLP Coach",
      company: "ProfessionAI",
      companylogo: require("./assets/images/professionai_logo.png"),
      date: "October 2022 – Present",
      desc: "Coach for one of the leading Italian e-learning platforms on AI, ML and Data Science. Teach theoretical and practical Deep Learning / NLP modules and mentor enrolled students.",
      descBullets: [
        "Teach Recurrent Neural Networks (Vanilla RNN, LSTM, GRU)",
        "Teach Transformers architecture and applications",
        "Review and grade student assessments on a multilabel NLP case study: toxic language detection on social media with strongly imbalanced datasets"
      ]
    },
    {
      role: "Senior AI Engineer",
      company: "UniCredit",
      companylogo: require("./assets/images/unicredit.png"),
      bannerColor: "#E2001A",
      date: "July 2023 – April 2024",
      desc: "Senior ML Engineer in the AI Factory team designing Generative AI solutions for the bank.",
      descBullets: [
        "Audit Report Generation: GenAI solution helping auditors produce comprehensive audit reports",
        "OneMarket VA: virtual assistant integrated in the OneMarket app, powered by a RAG pipeline to surface information on internal investment products",
        "Listener Engine: summarization pipeline turning surveys and observations into executive-ready reports for top management"
      ]
    },
    {
      role: "Machine Learning Engineer",
      company: "Enel Group",
      companylogo: require("./assets/images/enel.png"),
      logoStyle: {
        padding: "1.2rem",
        objectFit: "contain",
        background: "#fff",
        boxSizing: "border-box"
      },
      date: "December 2021 – July 2023",
      desc: "ML Engineer in the NLP team of the Global Data Hub, building production NLP pipelines on AWS.",
      descBullets: [
        "ENGINE: documentary framework for envelope text classification. Preprocessing, page classification, OCR, ID-card recognition, NER",
        "GDPR: documentary framework to detect confidentiality and privacy content across company documents",
        "Semantic search over corporate contracts using a multilingual embedding model"
      ]
    },
    
    {
      role: "Machine Learning Engineer",
      company: "Almawave",
      companylogo: require("./assets/images/almawave.png"),
      date: "October 2020 – December 2021",
      desc: "Solution Architect for the conversational AI product Iride. End-to-end chatbot delivery for public-sector clients: NLP pipelines, dataset creation, feature extraction and model training (Python, Docker, Transformers, BERT).",
      descBullets: [
        "Built an end-to-end chatbot to help citizens locate EV charging stations across the city of Florence",
        "Designed and maintained multiple chatbots for INPS"
      ]
    },
    {
      role: "Data Scientist",
      company: "Reply",
      companylogo: require("./assets/images/replyLogo.png"),
      date: "May 2019 – October 2020",
      desc: "Consulting on data science and software engineering projects.",
      descBullets: [
        "Document classification for AdER",
        "Laws segmentation and Named Entity Recognition on juridical documents"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false",
  display: true,
  title: "Github Projects",
  subtitle:
    "SELECTED OPEN-SOURCE WORK ON RAG, MULTI-AGENT SYSTEMS AND APPLIED LLMs",
  githubUrl: socialMediaLinks.github,
  projects: [
    {
      name: "Agentic Debate Arena",
      description:
        "Multi-agent debate simulator powered by LLMs, with judge, scoring and tool-use. A small playground to explore how specialized agents argue, evaluate and converge on answers.",
      url: "https://github.com/fraps93/agentic-debate-arena",
      icon: "fas fa-balance-scale",
      language: "Python",
      languageColor: "#3572A5"
    },
    {
      name: "Legal RAG Pipeline",
      description:
        "End-to-end RAG pipeline for legal and compliance documents: parent-child chunking, hybrid search (FAISS + BM25) and LLM reranking. Runs fully local with Ollama, no API keys.",
      url: "https://github.com/fraps93/precise-rag",
      icon: "fas fa-book-reader",
      language: "Jupyter Notebook",
      languageColor: "#DA5B0B"
    },
    {
      name: "LangExtract Tutorial",
      description:
        "Step-by-step tutorial on extracting structured compliance data from legal and regulatory documents using LangExtract and a local LLM (Gemma via Ollama).",
      url: "https://github.com/fraps93/langextract-legal-tutorial",
      icon: "fas fa-file-contract",
      language: "Jupyter Notebook",
      languageColor: "#6f42c1"
    },
    {
      name: "Hexagonal FastAPI",
      description:
        "Reference backend architecture in Python showcasing Ports & Adapters, a declarative dependency-injection container and FastAPI + Pydantic",
      url: "https://github.com/fraps93/hexagonal-fastapi",
      icon: "fas fa-layer-group",
      language: "Python",
      languageColor: "#009485"
    },
    {
      name: "LLM Observatory",
      description:
        "Two-notebook tutorial on LLM observability and offline evaluation: multi-backend OpenTelemetry tracing (Phoenix, Langfuse, Opik) and side-by-side eval frameworks on a local Ollama RAG.",
      url: "https://github.com/fraps93/llm-observatory",
      icon: "fas fa-binoculars",
      language: "Jupyter Notebook",
      languageColor: "#DA5B0B"
    }
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Flagship Projects",
  subtitle:
    "ENTERPRISE-GRADE GENERATIVE AI, RAG AND MULTI-AGENT SYSTEMS I HAVE LED OR BUILT",
  projects: [
    {
      image: require("./assets/images/dosmind.jpg"),
      projectName: "Knowledge Hub",
      projectDesc:
        "Low-cost structured retrieval combining vector-space geometry with a semantic correlation graph to surface cross-silo enterprise knowledge, without LLM involvement at ingestion time. [Python, Embeddings, Vector DB, GraphRAG]",
      footerLink: []
    },
    {
      image: require("./assets/images/dosmind.jpg"), // TODO: replace with MEF logo
      projectName: "ContentLab",
      projectDesc:
        "Production-grade RAG pipeline for the MEF combining BM25 and neural retrieval, parent-child chunking and a supervised reranker for high-precision answers. Automated generation of operational guidelines via advanced prompt engineering. [Python, LangChain, Anthropic, GCP, BM25, Supervised Reranker]",
      footerLink: []
    },
   
    
    {
      image: require("./assets/images/unicredit.png"),
      projectName: "OneMarket Virtual Assistant",
      projectDesc:
        "Generative-AI virtual assistant integrated into the OneMarket banking application to help customers retrieve information about the bank's internal investment products. [Python, LLM, Prompt Engineering, Azure, RAG, LangChain]",
      footerLink: []
    },
   
    {
      image: require("./assets/images/unicredit.png"),
      projectName: "Audit Report Generation",
      projectDesc:
        "GenAI solution that helps auditors of the AI Factory team produce comprehensive audit reports automatically from raw findings, controls and evidence. [Python, LLM, Prompt Engineering, Azure, LangChain]",
      footerLink: []
    },

    {
      image: require("./assets/images/enel.png"),
      imageStyle: {padding: "1.5rem"},
      projectName: "ENGINE",
      projectDesc:
        "Documentary framework for envelope text classification at industrial scale: page classification (text + image), OCR, ID-card / document recognition, NER. Built and deployed end-to-end on AWS. [Python, Docker, AWS SageMaker, AWS Step Functions]",
      footerLink: []
    },
    {
      image: require("./assets/images/enel.png"),
      imageStyle: {padding: "1.5rem"},
      projectName: "Semantic Search on Contracts",
      projectDesc:
        "Semantic search across the Group's contracts via a multilingual embedding model exposed through Elasticsearch, for fast retrieval across heterogeneous legal documents. [Python, Kubernetes, Word Embeddings, Elasticsearch]",
      footerLink: []
    },
    {
      image: require("./assets/images/enel.png"),
      imageStyle: {padding: "1.5rem"},
      projectName: "GDPR Framework",
      projectDesc:
        "Documentary framework to detect confidentiality and privacy content across company documents: preprocessing, page classification (text + image), OCR, ID-card recognition, NER. [Python, Docker, AWS SageMaker, AWS Step Functions]",
      footerLink: []
    },
 
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications"),
  subtitle:
    "Academic honors and industry certifications obtained over the years",

  achievementsCards: [
    {
      title: "Hugging Face AI Agents Course",
      subtitle:
        "Certificate of completion issued by Hugging Face (2025). Hands-on course on building, deploying and orchestrating AI agents with LLMs, tools and frameworks like smolagents, LangGraph and LlamaIndex.",
      image: require("./assets/images/Hugging_Face_Logo_1.png"),
      imageAlt: "Hugging Face AI Agents Course",
      footerLink: []
    },
    {
      title: "TensorFlow: Advanced Techniques",
      subtitle:
        "Specialization issued by DeepLearning.ai (July 2022). Credential ID: TCSD55T3DXH9",
      image: require("./assets/images/dl.png"),
      imageAlt: "TensorFlow Specialization",
      footerLink: []
    },
    {
      title: "Applied Data Science with Python Specialization",
      subtitle:
        "University of Michigan via Coursera (December 2020). Credential ID: 8TE9TVEXP339",
      image: require("./assets/images/michigan.png"),
      imageAlt: "Applied Data Science",
      footerLink: []
    },
    {
      title: "Natural Language Processing Specialization",
      subtitle:
        "DeepLearning.ai (October 2020). Credential ID: 5GRA7UVEBW44",
      image: require("./assets/images/dl.png"),
      imageAlt: "NLP Specialization",
      footerLink: []
    },
    {
      title: "«Wanted the best» Scholarship",
      subtitle:
        "Awarded by Sapienza University of Rome (October 2016).",
      image: require("./assets/images/sapienza.jpeg"),
      imageAlt: "Sapienza Scholarship",
      footerLink: []
    },
    {
      title: "«Worthy Students» Scholarship",
      subtitle:
        "Awarded by Tor Vergata University of Rome for 3 consecutive academic years (2013–2016) for academic merit.",
      image: require("./assets/images/tv.png"),
      imageAlt: "Tor Vergata University Logo",
      footerLink: []
    },
  ],
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a Generative AI / NLP project, an architecture review or a collaboration? My inbox is open.",
  email_address: "fabriziobonavita93@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo
};
