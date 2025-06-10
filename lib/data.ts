import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import kahanaLogo from "@/public/kahana_logo.ico"
import qbLogo from "@/public/quantitative_brokers_logo.ico"
import bdsrLogo from "@/public/bdsr_logo.ico"
import tvsLogo from "@/public/tvs_logo.ico"

import NavibotImg from "@/public/Navibot.png"
import BrainImg from "@/public/BrainScanNet.png"
import HRLImg from "@/public/HRL.png"
import encoderdecoderImg from "@/public/encoderdecoder.png"
import SQLInjectionArchImg from "@/public/SQLInjectionArch.png"
import DQNImg from "@/public/QLearningvsDQN.png"
import GLCMImg from "@/public/Methodology_GLCM.jpeg"
import CricketImg from "@/public/MCST.png"
import HangmanImg from "@/public/Hangman.jpg"
import BikeImg from "@/public/BikeRecommendation.jpg"
import LoanImg from "@/public/LoanDefault.jpg"

import htmLogo from "@/public/skills/html.svg" 
import cppLogo from "@/public/skills/cpp.svg"
import cssLogo from "@/public/skills/css.svg"
import firebaseLogo from "@/public/skills/firebase.svg"
import gitLogo from "@/public/skills/git.svg"
import javaLogo from "@/public/skills/java.svg"
import javascriptLogo from "@/public/skills/javascript.svg"
import mongodbLogo from "@/public/skills/mongodb.svg"
import mysqlLogo from "@/public/skills/mysql.svg"
import nodejsLogo from "@/public/skills/nodejs.svg"
import pythonLogo from "@/public/skills/python.svg"
import reactLogo from "@/public/skills/react.svg"
import tailwindLogo from "@/public/skills/tailwindcss.svg"
import typescriptLogo from "@/public/skills/typescript.svg"
import jenkinsLogo from "@/public/skills/jenkins.svg"
import tensorflowLogo from "@/public/skills/tensorflow.svg"
import pytorchLogo from "@/public/skills/pytorch.svg"
import awsLogo from "@/public/skills/aws.svg"
import braincircuitLogo from "@/public/skills/brain-circuit.svg"
import linuxLogo from "@/public/skills/linux.svg"
import dlLogo from "@/public/skills/deep-learning.png"
import androidLogo from "@/public/skills/android.svg"
import arduinoLogo from "@/public/skills/arduino.svg"
import scikitlearnLogo from "@/public/skills/scikit-learn.svg"



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Achievements",
    hash: "#achievements",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer",
    location: "Kahana Inc",
    company_icon: kahanaLogo,
    description1: "• Proposed advanced features & coordinated with cross-functional teams to design & implement UI/UX using React JS",
    description2: "• Integrated analytics tool & initiated data-driven upgrades to meet user demands: Increased User Retention rate by 4%",
    icon: React.createElement(CgWorkAlt),
    date: "September 2023 - Jan 2024",
  },
  {
    title: "Software Engineer  - Full-time",
    location: "Quantitative Brokers",
    company_icon: qbLogo,
    description1: "• Developed an internal application facilitating the seamless creation & transmission of Financial Information Exchange (FIX) protocol messages, automating and streamlining the order messaging process and enhancing trading operations",
    description2: "• Spearheaded the enhancement of the FIX messaging tool by integrating functionalities for complex Multi-Leg orders, driving a 15% operational efficiency improvement and enabling sophisticated trading strategies and faster execution",
    icon: React.createElement(CgWorkAlt),
    date: "July 2022 - June 2023",
  },
  {
    title: "Software Engineer - Intern",
    location: "Quantitative Brokers",
    company_icon: qbLogo,
    description1: "• Led the strategic integration of SonarQube & BlackDuck into Jenkins pipeline, reducing critical vulnerabilities by 20%",
    description2: "• Designed a robust VueJS Web-app, significantly improving database performance through decentralized PostgreSQL",
    icon: React.createElement(CgWorkAlt),
    date: "May 2021 - July 2021",
  },
  {
    title: "Big Data Engineer - Intern",
    location: "Big Data Science Research",
    company_icon: bdsrLogo,
    description1: "• Automated the extraction of Google Maps data, elevating OpenStreetMap visualization using data overlay techniques",
    description2: "• Devised a proprietary map-matching algorithm to accurately model urban traffic flow, aiding in efficient city planning",
      icon: React.createElement(CgWorkAlt),
    date: "April 2020 - June 2020",
  },
  {
    title: "Machine Learning Engineer - Intern",
    location: "Alphabt & TVS Motors Ltd",
    company_icon: tvsLogo,
    description1: "• Implemented a program to scan & verify vehicle labels using openCV, boosting validation performance system by 3%",
    description2: "• Devised a custom TensorFlow-based object detection model, achieving an 99% accuracy in text engraving recognition",
    icon: React.createElement(CgWorkAlt),
    date: "May 2019 - July 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Personal Assistant Bot",
    description:
      "Fine-tuned the Mistral LLM with QLora on a custom dataset to build a specialized and efficient personal assistant bot.  Integrated a Retrieval-Augmented Generation (RAG) pipeline to query personal documents, ensuring precise answers.",
    tags: ["Python", "Deep Learning", "LLM", "RAG", "QLora"],
    icons: [
      "logos:python",
      "lucide:brain-circuit"
    ],
    imageUrl: NavibotImg,
    githubLink: "https://github.com/Naveen015/Personal-Assistant-Bot",
  },
  {
    title: "LLM-Powered Mac Automation Tool",
    description:
      "Developed a LangChain system for LLM Mac control, replicating core functionalities of Anthropic's Computer Control. Implemented tools for text simulation, mouse automation, image analysis, application management & web navigation.",
    tags: ["Python", "Deep Learning", "LLM"],
    icons: [
      "logos:python",
      "lucide:brain-circuit"
    ],
    githubLink: "https://github.com/Naveen015/Computer-Control-Prototype",
  },
  {
    title: "AI-Powered SQL Injection Detection System",
    description:
     "Developed a secure PHP-based web system with login, access control, and DistilBERT-powered SQL injection prevention. Achieved 99% detection accuracy using supervised fine-tuned LLMs; performed log analysis and penetration testing with SQLMap. Hardened the system using input sanitization, HTTPS setup, Apache WAF simulation, and prepared statements for robust security.",
    tags: ["Python", "Deep Learning", "LLM", "SQL", "PHP", "Security"],
    icons: [
      "logos:python",
      "logos:php",
      "logos:sql",
      "lucide:brain-circuit"
    ],
    imageUrl: SQLInjectionArchImg,
    githubLink: "https://github.com/Naveen015/AI-Powered-SQL-Injection-Detection-System",
  },
  {
    title: "BrainScanNet: MRI-Based Brain Tumor Detection with CNNs",
    description:
      "Built a CNN-based classification pipeline using VGG-16 and DenseNet to detect brain tumors from cropped MRI images. Preprocessed data via cropping and augmentation; VGG-16 model achieved highest accuracy among tested architectures.  Designed an assistive tool aimed at enhancing radiologist efficiency and diagnostic consistency in tumor identification.",
    tags: ["Python", "Deep Learning", "CNN", ],
    icons: [
      "logos:python",
      "lucide:brain-circuit"
    ],
    imageUrl: BrainImg,
    githubLink: "https://github.com/Naveen015/BrainScanNet-MRI-Based-Brain-Tumor-Detection-with-CNNs",
  },
  {
    title: "Trajectory-Aware Human Feedback for Hierarchical RL",
    description:
      "Proposed a novel Hierarchical Reinforcement Learning framework to improve subgoal generation in complex tasks. Deployed the Deep-RL framework in the FetchReach environment, resulting in a 10% increase in task success rates",
    tags: ["Python", "Deep Learning", "LLM"],
    icons: [
      "logos:python",
      "lucide:brain-circuit"
    ],
    imageUrl: HRLImg, 
    githubLink: "https://github.com/Naveen015/Trajectory-Aware-Human-Feedback-for-Hierarchical-RL",
  },
  {
    title: "Chatbot",
    description:
      "Built comprehensive knowledge base by web scraping & advanced NLP techniques enabling efficient data retrieval. Engineered an LSTM-based model with an attention mechanism, improving response relevance and context by 25%",
    tags: ["Python", "Deep Learning", "LLM"],
    icons: [
      "logos:python",
      "lucide:brain-circuit"
    ],
    imageUrl: encoderdecoderImg,
    githubLink: "https://github.com/Naveen015/chatbot",
  },
  {
    title: "Surface Texture Analysis",
    description:
      "Systemized an approach in identifying machined surface textures with CV & ML techniques, achieved 99.6% accuracy. Built Neural Network employing statistical features from GLCM for texture classification improving accuracy by 44%",
    tags: ["Python", "Deep Learning", "Computer Vision", "GLCM"],
    icons: [
      "logos:python",
      "lucide:brain-circuit"
    ],
    imageUrl: GLCMImg,
    githubLink: "https://github.com/Naveen015/Surface-Texture-Analysis",
  },
  {
    title: "Analysis of Optimization Algorithms",
    description:
          "Assessed the performance of various Stochastic Optimization algorithms on control agents created using OpenAI gym environment. Developed and applied multiple Gradient Descent algorithms to optimize Deep Q-Network which achieved a 15% boost in agent’s return",  
    tags: ["Python", "Deep Learning", "Reinforcement Learning", "Gradient Descent"],
    icons: [
      "logos:python",
      "lucide:brain-circuit"
    ],
    imageUrl: DQNImg,
    githubLink: "https://github.com/Naveen015/Optimization-Algorithms",
  },
  {
    title: "Multi Agent Cricket Game - Reinforcement Learning",
    description:
      "Formulated cricket game as Markov Decision Process for optimal decision-making of actions in dynamic system. Modeled a 2-player Monte Carlo Tree Search algorithm for better action selection which elevated match outcomes",
    tags: ["Python", "Reinforcement Learning", "Monte Carlo Tree Search"],
    icons: [
      "logos:python",
      "lucide:brain-circuit"],
    imageUrl: CricketImg,
    githubLink: "https://github.com/Naveen015/Cricket-Game",
  },
  {
    title: "Hangman Game",
    description:
      "Designed an algorithm for Hangman game where player has to guess letters of a word with limited number of guesses. Augmented N-gram language model for capturing letter patterns to improve prediction & achieved an accuracy of 62%",
    tags: ["Python", "NLP", "N-Gram"],
    icons: [
      "logos:python",
      "lucide:brain-circuit"
    ],
    imageUrl: HangmanImg,
    githubLink: "https://github.com/Naveen015/Hangman-Game",
  },
  {
    title: "Bike Tour Recommendation",
    description:
      "Optimized bike tour recommendations through exhaustive data preprocessing, data binning and feature engineering. Drafted an ensemble of XGB, LGBM and CatBoost with meticulous hyper-parameter tuning yielding a 0.71 accuracy",    
    tags: ["Python", "Machine Learning", "Ensemble Methods", "XGB", "CatBoost", "LGBM"],
    icons: [
      "logos:python",
      "lucide:brain-circuit"
    ],
    githubLink: "https://github.com/Naveen015/Machine-Learning-Hackathon",
  },
  {
    title: "Loan Default Prediction",
    description: "Developed loan default classifier using SMOTE and KNN Imputer for data pre-processing, achieving robust predictive accuracy. Achieved F1 score of 0.95 by rigorously tuning hyperparameters in Random Forest Classifier, significantly enhancing learning outcomes",
    tags: ["Python", "Machine Learning"],
    icons: [
      "logos:python",
      "lucide:brain-circuit"],
    githubLink: "https://github.com/Naveen015/Loan-Default-Prediction",
  },
  {
    title: "DIC’s Terrace Farming Robot",
    description: "Won Silver prize in DIC's Terrace Farming Robot for hilly areas challenge in Inter IIT Tech Meet among over 20+ teams. Designed an Autonomous agricultural robot that is capable of ploughing, seeding and harvesting by climbing up and down steps in hills. Programmed the bot with Arduino to follow the wall by a PID control system (Proportional-Integral-Derivative) using ultrasonic sensors",
    tags: ["Python", "ROS", "IOT", "PID"],
    icons: [
      "logos:python"],
  },
  {
    title: "Unmanned Ground Vehicle",
    description: "Developed a program for UGV bot using ROS that transmits sensor & video feed to a remote system and tracked its path in the given map. Programmed the bot to create a 3D map of surrounding using kinect-360 and localize itself in the given map by Monte Carlo Localization",
    tags: ["Python"],
    icons: [
      "logos:python"],
    githubLink: "https://github.com/Naveen015/UGV",
  },
  {
    title: "Water Levitation Project",
    description: "Developed a program to control frequency of strobe lights and water pumps for levitating the water using the principle of Stroboscopic effect. Designed a PCB (Printed Circuit Board) using Eagle and fabricated the circuit along with Arduino to control pumps & lights to make patterns",
    tags: ["Python", "Eagle"],
    icons: ["logos:python"],
  },
  {
    title: "Floor Cleaning Bot",
    description: "Designed a model of remote controlled Semi-Automatic Bot using Arduino, Bluetooth module and qualified for Asia & Limca Book of Records",
    tags: ["Arduino", "Python"],
  }
] as const;

export const skillsData =  [
  {
    name: "HTML",
    icon: htmLogo,
    link: "www.example.com",
  },
  {
    name: "CSS",
    icon: cssLogo,
    link: "www.example.com",
  },
  {
    name: "React",
    icon: reactLogo,
    link: "https://reactjs.org/",
  },
  {
    name: "TailwindCSS",
    icon: tailwindLogo,
    link: "https://tailwindcss.com/",
  },
  {
    name: "Javascript",
    icon: javascriptLogo,
  },
  {
    name: "Typescript",
    icon: typescriptLogo,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Node.js",
    icon: nodejsLogo,
    link: "https://nodejs.org/",
  },
  {
    name: "Jenkins",
    icon: jenkinsLogo,
    link: ""
  },
  {
    name: "Python",
    icon: pythonLogo,
    link: "https://python.com/",
  },
  {
    name: "C++",
    icon: cppLogo,
  },

  {
    name: "Java",
    icon: javaLogo,
  },
  {
    name: "MySQL",
    icon: mysqlLogo,
    link: "https://www.mysql.com/",
  },
  {
    name: "MongoDB",
    icon: mongodbLogo,
    link: "https://www.mongodb.com/",
  },
  {
    name: "Git",
    icon: gitLogo,
    link: "https://git-scm.com/",
  },
  {
    name: "Firebase",
    icon: firebaseLogo,
    link: "https://firebase.org/",
  },
  {
    name: "Linux",
    icon: linuxLogo,
    link: ""
  },
  {
    name: "Android",
    icon: androidLogo,
    link: ""
  },
  {
  name: "Pytorch",
  icon: pytorchLogo,
  link: ""
  },
  {
  name: "Tensorflow",
  icon: tensorflowLogo,
  link: ""
  },
  // {
  //   name: "Artificial Intelligence",
  //   icon: dlLogo,
  //   link: ""
  // },
  {
    name: "Scikit Learn",
    icon: scikitlearnLogo
  },
  {
    name: "Arduino",
    icon: arduinoLogo,
    link: ""
  },
] as const;

export const achievementsData = [
  {
    year: "2021",
    description: "Awarded a Scholarship for Graduate Studies for receiving merit score in Graduate Aptitude Test in Engineering (GATE)"
  },
  {
    year: "2019",
    description: "Won Silver prize in DIC's Terrace Farming Robot for hilly areas challenge in Inter IIT Tech Meet among over 20+ teams"
  },
  {
    year: "2017",
    description: "Qualified for Asia and Limca Book of Records for most number of robots cleaning an area (A Clean India Initiative)"
  },
  {
    year: "2017",
    description: "Secured All India Rank 793 ( out of 200,000+ candidates ) in Joint Entrance Examination Advanced JEE-Adv"
  },
  {
    year: "2016",
    description: "Qualified among top 1% in India for Final Level National Mathematics Talent Contest in class XI and XII"
  },
  {
    year: "2015",
    description: "Awarded a Special Merit Certificate for Outstanding Performance in AISSE"
  },
  {
    year: "2014",
    description: "Qualified Junior Level National Mathematics Olympiad Contest in class IX"
  }
 ] as const;

export const about = {
  name: 'Naveen Prashanna',
  role: 'Computer Scientist',
  description: 'Hello, I’m Naveen Prashanna Gurumurthy, a passionate computer scientist specializing in Intelligent Systems. I’m currently pursuing a Master of Science degree at the University of Texas at Dallas, building upon my strong educational foundation from the Indian Institute of Technology Madras (IIT-M), where I earned a Bachelor + Master of Technology degree in Mechanical Engineering with a Minor in Artificial Intelligence and Machine Learning.',
  resume: "https://naveen015.github.io/portfolio/static/media/Naveen_CS.67485900.pdf",
  social: {
    linkedin: 'https://linkedin.com/in/naveen015',
    github: 'https://github.com/naveen015'
  },
} as const;