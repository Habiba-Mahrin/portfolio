import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Youtube, 
  Mail, 
  ExternalLink, 
  ChevronDown,
  Calendar,
  MapPin,
  Code,
  Brain,
  Briefcase,
  GraduationCap,
  Award,
  Users,
  Moon,
  Sun,
  Terminal,
  Coffee,
  Sparkles,
  Instagram,
  FileText,
  Download
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    'print("hello world!")',
    "I'm Habiba Mahrin.",
    '... and i can somewhat code :)',
    'Building intelligent systems with care, clarity & impact'
  ];

  useEffect(() => {
    if (currentTextIndex < texts.length) {
      const currentText = texts[currentTextIndex];
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentTextIndex(currentTextIndex + 1);
          setDisplayedText('');
        }, 1500);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayedText, currentTextIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'techstack', 'experience', 'projects', 'publications', 'leadership', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      company: "Grey.Box",
      role: "Software Engineering Intern",
      period: "April 2025 - Present",
      location: "Montreal, Quebec, CA",
      website: "https://www.grey-box.ca/home/",
      description: "Working in a team as a member of 'Project Symmetry.' Led the development of an AI-powered project focusing on improving Wikipedia content in underrepresented languages. Utilized state-of-the-art translation models like T5 and Marian to provide accurate translations. Contributed to developing a tool ensuring consistent translations and creating a unified knowledge base for global users."
    },
    {
      company: "HEADSTARTER",
      role: "Software Engineering Resident",
      period: "April 2025 - August 2025",
      location: "New York, NY (Remote)",
      website: "https://headstarter.co/",
      description: "Built 14+ machine learning, AI-engineering and full-stack projects in fast-paced software team environments. Developed 5+ neural networks in Python, 11 apps in Typescript on AWS/Vercel. Implemented LLM-chaining, hyperparameter tuning, fine-tuning on 10+ LLM models. Coached by Google Machine Learning, Google Kubernetes, Two Sigma, Tesla, Figma and Citadel Engineers. Created 321+ commits on GitHub with 7-day deadlines achieving 40% Career Capital increase."
    },
    {
      company: "avolta, Inc.",
      role: "Software Engineering Intern",
      period: "Sep 2025 - December 2025",
      location: "Canada",
      website: "https://www.avoltacanada.com/",
      description: "Assisted in the design and development of software systems for security applications, including automotive anti-theft systems. Collaborated with team members to write, test, and debug code. Participated in research and development activities to explore new technologies in software engineering. Contributed to documentation and presentation of project findings and results."
    },
    {
      company: "Canada Learning Code",
      role: "AI Instructor & Subject Matter Expert",
      period: "August 2025",
      location: "Canada",
      website: "https://www.canadalearningcode.ca/teaching-code/",
      description: "Joined as an AI instructor for Speed Networking Events designed to give early and mid-career learners networking opportunities. Hosted AMAs on building sustainable systems for work/life balance using tools like Notion, ChatGPT, and Zapier. Shared real-world approaches for automating workflows and organizing productivity systems."
    },
    {
      company: "Flowealth Academy",
      role: "Course Creator",
      period: "August 2025",
      location: "Remote",
      website: "https://flowealthacademy.com/",
      description: "Created comprehensive course content for Data Analysis with Excel and Power BI. Developed 5-module course outline with learning objectives, quizzes per module, and mini capstone project including Sales Dashboard creation."
    }
  ];

  const projects = [
    {
      title: "Brain Tumor Classification with Neural Networks",
      description: "Developed advanced neural network architectures for classifying brain tumors in MRI scans using transfer learning and custom convolutional layers. Integrated Gemini 1.5 Flash model to generate intelligent explanations for model predictions, enhancing interpretability in medical AI applications.",
      tech: ["PyTorch", "CNNs", "Gemini API", "Transfer Learning", "Computer Vision"],
      demo: "#",
      github: "#"
    },
    {
      title: "HireSense AI - Voice-based Intelligent Recruiter",
      description: "Full-stack web application that automates candidate screening through real-time, voice-enabled AI recruiter. Features role-specific interview questions, interactive voice interviews using Vapi, transcripted summaries, and performance analytics. Reduces time-to-hire and standardizes first-round interviews at scale.",
      tech: ["Next.js", "Supabase", "Vapi", "OpenAI", "Real-time Voice"],
      demo: "#",
      github: "#"
    },
    {
      title: "Breakup Bloom - Emotional Recovery Platform",
      description: "Supportive interactive platform guiding individuals through emotional healing after breakups. Features breakup vault with time-lock mechanism, no-contact enforcer, AI companion with CBT-trained dialogue, mood tracking, and anonymous support circles. Promotes healthy detachment through digital boundaries and wellness activities.",
      tech: ["React", "Node.js", "LangChain", "Firebase", "AI Chatbot"],
      demo: "#",
      github: "#"
    },
    {
      title: "AI Coding Agent",
      description: "Intelligent system that reviews pull requests in GitHub repositories and suggests code improvements using AI. Features GitHub API integration, file parsing, token calculation, LLM-powered code analysis, and automated review comments for enhanced code quality and development workflow.",
      tech: ["Node.js", "OpenAI API", "GitHub API", "Code Analysis"],
      demo: "#",
      github: "#"
    },
    {
      title: "MCP Server - Workflow Automation",
      description: "Built MCP server implementing the Model Context Protocol to automate end-to-end workflows combining Google Calendar, Notion, and GitHub. Enables LLMs to securely access real-world tools and data, creating intelligent AI agents that perform tasks reliably at scale with proper authentication and permissions.",
      tech: ["Next.js", "MCP", "Notion API", "GitHub API", "Google Calendar"],
      demo: "#",
      github: "#"
    },
    {
      title: "Multimodal Video Analysis",
      description: "Advanced video analysis platform with Gemini's video understanding capabilities. Features YouTube video upload, chat interface with video content, section breakdown with hyperlinked timestamps, natural language frame queries, and multimodal RAG implementation for comprehensive video interaction.",
      tech: ["Next.js", "Gemini", "LangChain", "RAG", "Video Processing"],
      demo: "#",
      github: "#"
    },
    {
      title: "Customer Churn Prediction",
      description: "End-to-end machine learning pipeline for customer churn prediction. Includes data preprocessing, training of 5 different ML models, hyperparameter tuning, model evaluation, and web application deployment for real-time inference and business decision support.",
      tech: ["Python", "Scikit-learn", "Flask", "Machine Learning", "Data Analysis"],
      demo: "#",
      github: "#"
    }
  ];

  const publications = [
    {
      title: "Enhancing Emergency Response Through Speech Emotion Recognition: A Machine Learning Approach",
      authors: "Deb, P., Mahrin, H., & Rahman, A.",
      venue: "26th International Conference on Computer and Information Technology (ICCIT), IEEE",
      year: "2023",
      doi: "10.1109/ICCIT60459.2023.10440971",
      link: "https://ieeexplore.ieee.org/abstract/document/10440971"
    },
    {
      title: "Evaluating Online Sexism Detection: A Comparative Study of Machine Learning Models using the EDOS Dataset",
      authors: "P. Deb et al.",
      venue: "IEEE 9th International Conference for Convergence in Technology (I2CT)",
      year: "2024",
      doi: "10.1109/I2CT61223.2024.10543680",
      link: "https://ieeexplore.ieee.org/abstract/document/10543680"
    },
    {
      title: "Sentiment Analysis of Customer Reviews on Food Ordering Portals of Bangladesh using Natural Language Processing",
      authors: "Deb, P., Bhuiyan, A. R., & Mahrin, H.",
      venue: "6th International Conference on Cybernetics, Cognition and Machine Learning Applications (ICCCMLA)",
      year: "2024",
      link: "https://ieeexplore.ieee.org/document/10871506"
    }
  ];

  const programmingLanguages = ["Python ", "JavaScript", "TypeScript", "C++", "Java", "SQL", "HTML", "CSS", "Assembly", "Dart"];
  const frontendTech = ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"];
  const backendTech = ["Node.js", "Express.js", "FastAPI", "Spring Boot"];
  const databases = ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Firestore"];
  const cloudDevOps = ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "GitHub Actions"];
  const mlAI = ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "Hugging Face", "OpenAI API", "RAG"];
  const tools = ["Git", "Redis", "Kafka", "GraphQL", "PyTest", "JUnit"];

  const themeClasses = {
    bg: isDarkMode ? 'bg-gray-900' : 'bg-white',
    text: isDarkMode ? 'text-gray-100' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    textMuted: isDarkMode ? 'text-gray-400' : 'text-gray-500',
    card: isDarkMode ? 'bg-gray-800' : 'bg-white',
    cardHover: isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50',
    border: isDarkMode ? 'border-gray-700' : 'border-gray-200',
    accent: 'text-mantis-green',
    accentBg: 'bg-mantis-green',
    accentHover: 'hover:bg-mantis-green-dark'
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses.bg}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 ${isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md border-b ${themeClasses.border} z-50`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className={`font-bold text-xl ${themeClasses.text} flex items-center gap-2`}>
              <Terminal className="text-mantis-green" size={20} />
              Habiba Mahrin
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-8">
                {['About', 'Education', 'Tech Stack', 'Experience', 'Projects', 'Publications', 'Leadership', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-mantis-green ${
                      activeSection === item.toLowerCase().replace(' ', '') ? 'text-mantis-green' : themeClasses.textSecondary
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg ${themeClasses.card} ${themeClasses.border} border hover:bg-mantis-green/10 transition-colors duration-200`}
              >
                {isDarkMode ? <Sun className="text-mantis-green" size={18} /> : <Moon className="text-mantis-green" size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className={`pt-32 pb-20 ${themeClasses.bg}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="mb-8">
              <div className={`font-mono text-lg ${themeClasses.textMuted} mb-4 h-8`}>
                <span className="text-mantis-green">{'>'}</span> {displayedText}
                <span className="animate-pulse text-mantis-green">|</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-16">
              <a
                href="https://www.linkedin.com/in/habibamahrin/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-mantis-green text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-mantis-green-dark transition-all duration-200 flex items-center gap-2 hover:scale-105"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="https://github.com/Habiba-Mahrin"
                target="_blank"
                rel="noopener noreferrer"
                className={`${themeClasses.card} ${themeClasses.text} px-6 py-3 rounded-lg font-medium border ${themeClasses.border} hover:border-mantis-green transition-all duration-200 flex items-center gap-2 hover:scale-105`}
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${themeClasses.card} ${themeClasses.text} px-6 py-3 rounded-lg font-medium border ${themeClasses.border} hover:border-mantis-green transition-all duration-200 flex items-center gap-2 hover:scale-105`}
              >
                <Mail size={18} />
                Medium
              </a>
              <a
                href="https://www.youtube.com/@HabibaMahrin-k9w"
                target="_blank"
                rel="noopener noreferrer"
                className={`${themeClasses.card} ${themeClasses.text} px-6 py-3 rounded-lg font-medium border ${themeClasses.border} hover:border-mantis-green transition-all duration-200 flex items-center gap-2 hover:scale-105`}
              >
                <Youtube size={18} />
                YouTube
              </a>
            </div>

            <div className="animate-bounce">
              <button
                onClick={() => scrollToSection('about')}
                className={`${themeClasses.textMuted} hover:text-mantis-green transition-colors duration-200`}
              >
                <ChevronDown size={32} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-4xl font-bold ${themeClasses.text} mb-8`}>about()</h2>
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Content */}
            <div className="lg:col-span-3">
              <div className="pl-4 border-l-2 border-mantis-green space-y-6">
                <p className={`text-lg ${themeClasses.textSecondary}`}>What's up!</p>
                <p className={`text-lg ${themeClasses.textSecondary} leading-relaxed`}>
                  Master's student in Software Engineering at Ontario Tech University, passionate about building 
                  intelligent systems and contributing to impactful research in machine learning and AI.
                </p>
                
                <div className="mt-8">
                  <h3 className={`text-lg font-medium ${themeClasses.text} mb-4`}>A bit about me:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                      <Brain className="text-mantis-green" size={20} />
                      <p className={themeClasses.textSecondary}>I'm interested in a lot of topics such as NLP/LLMs, RAG, AI Agents and other things!</p>
                    </div>
                    <div className="flex items-center gap-3 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                      <Coffee className="text-mantis-green" size={20} />
                      <p className={themeClasses.textSecondary}>I’m fluent in two things: brewing the perfect cup of tea and getting lost in new cuisines</p>
                    </div>
                    <div className="flex items-center gap-3 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                      <Sparkles className="text-mantis-green" size={20} />
                      <p className={themeClasses.textSecondary}>
                        Obsessed with all things skincare ✨ Testing, reviewing & glowing! 
                        <a href="#" className="text-mantis-green hover:text-mantis-green-dark ml-2 inline-flex items-center gap-1">
                          <Instagram size={16} />
                          Visit my IG review page
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-mantis-green to-mantis-green-dark p-1">
                  <img
                    src="/IMG-20250726-WA0010.jpg"
                    alt="Habiba Mahrin"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 ${themeClasses.bg}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-4xl font-bold ${themeClasses.text} mb-16`}>education()</h2>
          <div className="space-y-8">
            <div className={`${themeClasses.card} rounded-2xl p-8 border ${themeClasses.border} hover:border-mantis-green/50 transition-all duration-200`}>
              <div className="flex items-start gap-4">
                <div className="bg-mantis-green/10 p-3 rounded-lg">
                  <GraduationCap className="text-mantis-green" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold ${themeClasses.text}`}>Master of Engineering, Software Engineering</h3>
                  <p className="text-mantis-green font-medium text-lg">Ontario Tech University</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      Jan 2025 - April 2026
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      Oshawa, Ontario, Canada
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${themeClasses.card} rounded-2xl p-8 border ${themeClasses.border} hover:border-mantis-green/50 transition-all duration-200`}>
              <div className="flex items-start gap-4">
                <div className="bg-mantis-green/10 p-3 rounded-lg">
                  <GraduationCap className="text-mantis-green" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold ${themeClasses.text}`}>Bachelor of Computer Science and Engineering</h3>
                  <p className="text-mantis-green font-medium text-lg">BRAC University</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      June 2020 - May 2024
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      Dhaka, Bangladesh
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-4xl font-bold ${themeClasses.text} mb-16`}>techStack()</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className={`${themeClasses.card} rounded-xl p-6 border ${themeClasses.border} hover:border-mantis-green/50 transition-all duration-200 animate-fade-in-up`}>
              <h3 className={`text-lg font-semibold ${themeClasses.text} mb-4 flex items-center gap-2`}>
                <Code className="text-mantis-green" size={20} />
                Core Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {programmingLanguages.map((lang, index) => (
                  <span
                    key={lang}
                    className={`px-3 py-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-full text-sm ${themeClasses.textSecondary} border ${themeClasses.border} hover:border-mantis-green/50 transition-colors duration-200 animate-fade-in-up`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend Tech */}
            <div className={`${themeClasses.card} rounded-xl p-6 border ${themeClasses.border} hover:border-mantis-green/50 transition-all duration-200 animate-fade-in-up`}>
              <h3 className={`text-lg font-semibold ${themeClasses.text} mb-4 flex items-center gap-2`}>
                <Code className="text-mantis-green" size={20} />
                Frontend Tech
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontendTech.map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-full text-sm ${themeClasses.textSecondary} border ${themeClasses.border} hover:border-mantis-green/50 transition-colors duration-200 animate-fade-in-up`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Tech */}
            <div className={`${themeClasses.card} rounded-xl p-6 border ${themeClasses.border} hover:border-mantis-green/50 transition-all duration-200 animate-fade-in-up`}>
              <h3 className={`text-lg font-semibold ${themeClasses.text} mb-4 flex items-center gap-2`}>
                <Code className="text-mantis-green" size={20} />
                Backend Tech
              </h3>
              <div className="flex flex-wrap gap-2">
                {backendTech.map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-full text-sm ${themeClasses.textSecondary} border ${themeClasses.border} hover:border-mantis-green/50 transition-colors duration-200 animate-fade-in-up`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className={`${themeClasses.card} rounded-xl p-6 border ${themeClasses.border} hover:border-mantis-green/50 transition-all duration-200 animate-fade-in-up`}>
              <h3 className={`text-lg font-semibold ${themeClasses.text} mb-4 flex items-center gap-2`}>
                <Code className="text-mantis-green" size={20} />
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {databases.map((db, index) => (
                  <span
                    key={db}
                    className={`px-3 py-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-full text-sm ${themeClasses.textSecondary} border ${themeClasses.border} hover:border-mantis-green/50 transition-colors duration-200 animate-fade-in-up`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {db}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className={`${themeClasses.card} rounded-xl p-6 border ${themeClasses.border} hover:border-mantis-green/50 transition-all duration-200 animate-fade-in-up`}>
              <h3 className={`text-lg font-semibold ${themeClasses.text} mb-4 flex items-center gap-2`}>
                <Code className="text-mantis-green" size={20} />
                Cloud & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {cloudDevOps.map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-full text-sm ${themeClasses.textSecondary} border ${themeClasses.border} hover:border-mantis-green/50 transition-colors duration-200 animate-fade-in-up`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* ML & AI */}
            <div className={`${themeClasses.card} rounded-xl p-6 border ${themeClasses.border} hover:border-mantis-green/50 transition-all duration-200 animate-fade-in-up`}>
              <h3 className={`text-lg font-semibold ${themeClasses.text} mb-4 flex items-center gap-2`}>
                <Brain className="text-mantis-green" size={20} />
                Machine Learning / AI
              </h3>
              <div className="flex flex-wrap gap-2">
                {mlAI.map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-full text-sm ${themeClasses.textSecondary} border ${themeClasses.border} hover:border-mantis-green/50 transition-colors duration-200 animate-fade-in-up`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 ${themeClasses.bg}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-4xl font-bold ${themeClasses.text} mb-16`}>experience()</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`${themeClasses.card} rounded-xl p-8 border ${themeClasses.border} hover:border-mantis-green/50 transition-all duration-200 hover:scale-[1.02] animate-fade-in-up`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="bg-mantis-green/10 p-2 rounded-lg mt-1">
                        <Briefcase className="text-mantis-green" size={20} />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold ${themeClasses.text}`}>{exp.role}</h3>
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg text-mantis-green hover:text-mantis-green-dark font-semibold flex items-center gap-1 transition-colors duration-200"
                        >
                          {exp.company}
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500 md:ml-4">
                    <div className="flex items-center gap-1 justify-end mb-1">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1 justify-end">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <p className={`${themeClasses.textSecondary} leading-relaxed`}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-4xl font-bold ${themeClasses.text} mb-16`}>projects()</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${themeClasses.card} rounded-xl p-6 border ${themeClasses.border} hover:border-mantis-green/50 transition-all duration-200 hover:scale-105 hover:shadow-lg animate-fade-in-up`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-mantis-green/10 p-2 rounded-lg">
                    <Brain className="text-mantis-green" size={20} />
                  </div>
                  <h3 className={`text-lg font-bold ${themeClasses.text} leading-tight`}>{project.title}</h3>
                </div>
                <p className={`${themeClasses.textSecondary} text-sm mb-4 leading-relaxed`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded text-xs ${themeClasses.textSecondary} border ${themeClasses.border}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    className="flex items-center gap-1 text-sm text-mantis-green hover:text-mantis-green-dark font-medium transition-colors duration-200"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    className={`flex items-center gap-1 text-sm ${themeClasses.textMuted} hover:text-mantis-green font-medium transition-colors duration-200`}
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className={`py-20 ${themeClasses.bg}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-4xl font-bold ${themeClasses.text} mb-16`}>publications()</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className={`${themeClasses.card} rounded-xl p-8 border ${themeClasses.border} hover:border-mantis-green/50 transition-all duration-200 animate-fade-in-up`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-mantis-green/10 p-3 rounded-lg">
                    <Award className="text-mantis-green" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold ${themeClasses.text} mb-2 leading-tight`}>{pub.title}</h3>
                    <p className={`${themeClasses.textSecondary} mb-1`}>{pub.authors}</p>
                    <p className={`${themeClasses.textMuted} text-sm mb-2`}>{pub.venue} ({pub.year})</p>
                    {pub.doi && (
                      <p className={`text-xs ${themeClasses.textMuted} mb-3`}>DOI: {pub.doi}</p>
                    )}
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-mantis-green hover:text-mantis-green-dark font-medium transition-colors duration-200"
                    >
                      <ExternalLink size={14} />
                      View Publication
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-4xl font-bold ${themeClasses.text} mb-16`}>leadership()</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${themeClasses.card} rounded-xl p-8 border ${themeClasses.border} hover:border-mantis-green/50 transition-all duration-200 animate-fade-in-up`}>
              <div className="flex items-start gap-4">
                <div className="bg-mantis-green/10 p-3 rounded-lg">
                  <Users className="text-mantis-green" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold ${themeClasses.text} mb-2`}>IEEE Robotics and Automation Society</h3>
                  <p className="text-mantis-green font-medium">Treasurer</p>
                  <p className={`text-sm ${themeClasses.textMuted} mb-3`}>Jan 2022 - Nov 2022</p>
                  <a
                    href="https://drive.google.com/drive/folders/your-certificate-folder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-mantis-green hover:text-mantis-green-dark font-medium transition-colors duration-200"
                  >
                    <FileText size={14} />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>

            <div className={`${themeClasses.card} rounded-xl p-8 border ${themeClasses.border} hover:border-mantis-green/50 transition-all duration-200 animate-fade-in-up`}>
              <div className="flex items-start gap-4">
                <div className="bg-mantis-green/10 p-3 rounded-lg">
                  <Users className="text-mantis-green" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold ${themeClasses.text} mb-2`}>BRAC University Computer Club</h3>
                  <p className="text-mantis-green font-medium">Communication Department Executive</p>
                  <p className={`text-sm ${themeClasses.textMuted}`}>Jun 2021 - Dec 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${themeClasses.bg}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl font-bold ${themeClasses.text} mb-8`}>.contact()</h2>
            <div className="pl-4 border-l-2 border-mantis-green space-y-6">
              <p className={`text-lg ${themeClasses.textSecondary} leading-relaxed`}>
                Are you interested in any of my projects? Are you curious about my work? Want a good book recommendation?
              </p>
              <div className="flex items-center gap-3">
                <Mail className="text-mantis-green" size={24} />
                <div>
                  <p className={`${themeClasses.textSecondary} mb-1`}>email me!</p>
                  <a 
                    href="mailto:habibamahrin10@gmail.com"
                    className="text-mantis-green hover:text-mantis-green-dark font-medium text-lg transition-colors duration-200"
                  >
                    habibamahrin10@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="#"
                  className="flex items-center gap-2 text-mantis-green hover:text-mantis-green-dark font-medium transition-colors duration-200"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white py-12`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Terminal className="text-mantis-green" size={20} />
              <span className="text-lg font-semibold">well, what now?</span>
              <span className="text-2xl">🥑</span>
            </div>
            <p className="text-gray-400 text-sm">
              Software Engineer • AI Researcher • Master's Student at Ontario Tech University
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-xs">
                © 2025 Habiba Mahrin. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;