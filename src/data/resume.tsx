import { Icons } from "@/components/icons";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Anshul Gupta",
  initials: "AG",
  url: "https://anshul-portfolio-alpha.vercel.app",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/Delhi,+India",
  description:
    "Product Management Enthusiast — Bridging Engineering, User Experience & Business Impact to Build Scalable Products",
  summary:
    "I'm a Computer Science student at Bharati Vidyapeeth's College of Engineering (CGPA: 8.94) with a product mindset forged at the intersection of engineering, business, and user experience. As a **Product & Software Development Intern at Commudle**, I collaborated with cross-functional agile teams to ship features that moved real metrics — from a newsletter preview that boosted content creation efficiency by 40% to mobile-first improvements that enhanced self-navigation by 35%.\n\nMy engineering foundation in React, TypeScript, Angular, and API integrations lets me translate user problems into shippable solutions. I've led product strategy for **Sentinel**, an AI-powered Employee Insights Agent that placed **Top 6 among 300+ teams** at AlgoQuest 2025, and built products spanning content platforms, finance dashboards, and social-impact redistribution systems.\n\nBeyond building, I lead at scale — organizing national hackathons with **10K+ participants** at Google & Microsoft venues, managing a Pre-Placement Bootcamp for **300+ students**, and coordinating **TEDxBVCOE** for 200+ attendees. I think like a Product Manager: starting with user research and problem discovery, prioritizing ruthlessly, and measuring what matters.",
  avatarUrl: "/me.png",
  hero: {
    headline:
      "Building Products at the Intersection of Technology, User Experience, and Business Impact",
    subheadline:
      "Product Management Enthusiast · Product Strategy Aspirant · Technical Product Builder",
    intro:
      "Computer Science student and Product & Software Development Intern who turns user problems into measurable product outcomes — from 40% workflow gains at Commudle to Top 6 finishes among 300+ teams at national competitions.",
    metrics: [
      { value: "40%", label: "Workflow Efficiency Gain" },
      { value: "Top 6", label: "Among 300+ Teams" },
      { value: "10K+", label: "Participants Impacted" },
      { value: "300+", label: "Students Led" },
    ],
    ctas: [
      { label: "View My Work", href: "#projects", variant: "default" as const },
      { label: "Get in Touch", href: "#contact", variant: "outline" as const },
    ],
  },
  seo: {
    metaTitle:
      "Anshul Gupta | Product Management Enthusiast & Technical Product Builder",
    metaDescription:
      "Product Management enthusiast and Computer Science student bridging engineering, UX, and business impact. Commudle intern, AlgoQuest Top 6 finalist, hackathon organizer impacting 10K+ participants.",
    keywords: [
      "Anshul Gupta",
      "Product Management",
      "Product Strategy",
      "Technical Product Builder",
      "Commudle",
      "BVCOE",
      "Computer Science",
      "User Research",
      "Agile",
      "React",
      "TypeScript",
      "Hackathon Organizer",
      "AlgoQuest",
      "Product Engineering",
    ],
    ogDescription:
      "Engineering ideas into scalable product experiences. Product intern at Commudle, Top 6 finalist at AlgoQuest 2025, and organizer of national hackathons impacting 10K+ participants.",
  },
  skillCategories: [
    {
      category: "Product Management",
      skills: [
        "User Research",
        "Requirement Gathering",
        "User Stories",
        "Sprint Planning",
        "Agile Methodologies",
        "Stakeholder Management",
        "Feature Prioritization",
        "Product Lifecycle Management",
      ],
    },
    {
      category: "Product Strategy",
      skills: [
        "Product Strategy",
        "Market Research",
        "Competitor Analysis",
        "Roadmapping",
        "Problem Solving",
      ],
    },
    {
      category: "Research & Analytics",
      skills: [
        "User Journey Mapping",
        "Data Analysis",
        "Workflow Analysis",
        "Feedback Synthesis",
      ],
    },
    {
      category: "Engineering & Development",
      skills: [
        "React",
        "Angular",
        "TypeScript",
        "JavaScript",
        "SQL",
        "API Integrations",
        "OOPs",
        "DBMS",
        "Responsive Design",
        "Testing & Debugging",
      ],
    },
    {
      category: "Tools",
      skills: ["Jira", "Git", "GitHub"],
    },
    {
      category: "Leadership",
      skills: ["Leadership", "Communication", "Event Management", "Team Coordination"],
    },
  ],
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "SQL", icon: Postgresql },
  ],
  productThinking: [
    {
      title: "User Research",
      description:
        "Start with real users — gather feedback from internal stakeholders at Commudle, map pain points across campaign workflows, and validate assumptions before building.",
    },
    {
      title: "Problem Discovery",
      description:
        "Analyze workflow bottlenecks and user journeys to uncover root causes, not just symptoms — from content creation friction to mobile navigation gaps.",
    },
    {
      title: "Requirement Gathering",
      description:
        "Collaborate with product, design, and engineering to translate user needs into clear feature requirements and user stories within agile sprint cycles.",
    },
    {
      title: "Feature Prioritization",
      description:
        "Balance impact vs. effort — prioritize newsletter preview, usability enhancements, and mobile-first improvements based on measured user pain.",
    },
    {
      title: "Stakeholder Management",
      description:
        "Coordinate across product, design, engineering, and QA teams to align on goals, resolve blockers, and ensure reliable feature delivery.",
    },
    {
      title: "Roadmapping",
      description:
        "Break product vision into phased deliverables — from MVP authentication flows to scalable dashboard modules and redistribution workflows.",
    },
    {
      title: "Product Strategy",
      description:
        "Define the why behind every feature — content discoverability for blogging platforms, decision support for finance dashboards, social impact for food redistribution.",
    },
    {
      title: "Execution",
      description:
        "Ship fast with cross-functional agile teams — define requirements, validate implementations, perform testing, and support product releases.",
    },
    {
      title: "Iteration",
      description:
        "Continuously improve through feedback loops — notifications, tooltips, contextual guidance, and mobile-first refinements based on user behavior.",
    },
    {
      title: "Measurement",
      description:
        "Track what matters — 40% content efficiency, 30% usability gains, 35% navigation improvement, 45% dashboard responsiveness, and coordination metrics.",
    },
  ],
  achievements: [
    {
      title: "AlgoQuest 2025 — Top 6 Finalist",
      metric: "Top 6 / 300+",
      description:
        "Led product strategy and solution design for Sentinel, an AI-powered Employee Insights Agent, securing a Top 6 Finalist position among 300+ teams.",
    },
    {
      title: "National Hackathon Organizer",
      metric: "10K+",
      description:
        "Organized large-scale national hackathons with 10K+ participants at Google & Microsoft venues through HackwithIndia.",
    },
    {
      title: "Pre-Placement Bootcamp Lead",
      metric: "300+",
      description:
        "Managed Pre-Placement Bootcamp for 300+ students at EduMinerva, BVCOE — coordinating curriculum, mentors, and student outcomes.",
    },
    {
      title: "GDSC Technical Events",
      metric: "10+",
      description:
        "Organized and executed 10+ GDSC BVCOE technical workshops and coding events, building Delhi's student developer community.",
    },
    {
      title: "Microsoft Build It Tour",
      metric: "Microsoft",
      description:
        "Organized Build It Tour events at Microsoft offices in Noida and Gurugram, connecting students with industry technology leaders.",
    },
    {
      title: "TEDxBVCOE Conference",
      metric: "200+",
      description:
        "Coordinated TEDxBVCOE technical conference with 200+ attendees as part of the organizing team.",
    },
  ],
  whyHireMe: [
    {
      question: "Why Product Management?",
      answer:
        "I've lived the full product lifecycle — from user research and requirement gathering at Commudle to leading product strategy for Sentinel at AlgoQuest. I don't just write code; I ask why we're building, who it serves, and how we'll measure success.",
    },
    {
      question: "Why does an Engineering Background Help?",
      answer:
        "My CS foundation in React, TypeScript, Angular, SQL, and API integrations means I can evaluate technical feasibility, collaborate deeply with engineers, and prototype solutions myself — bridging the gap between vision and execution.",
    },
    {
      question: "Why can I work across teams?",
      answer:
        "At Commudle, I worked daily with product, design, engineering, and QA in agile sprints. I've also led cross-functional initiatives — hackathons at Google & Microsoft, bootcamps for 300+ students, and TEDxBVCOE for 200+ attendees.",
    },
    {
      question: "Why can I execute fast?",
      answer:
        "I ship iteratively with measurable outcomes — 40% workflow efficiency gains, 30% usability improvements, and 20% faster feature responsiveness. I prioritize ruthlessly and validate implementations through testing and release support.",
    },
    {
      question: "Why do I understand users?",
      answer:
        "I gather feedback from real users, map journeys across complex workflows, and recommend targeted enhancements — from tooltips and contextual guidance to mobile-first navigation that improved self-navigation by 35%.",
    },
  ],
  navbar: [],
  contact: {
    email: "anshulgupta282004@gmail.com",
    tel: "+91-9667283405",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Anshulgupta280104",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "Twitter",
        url: "https://x.com/ANSHUL28427230",
        icon: Icons.x,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anshul-gupta-64a033283",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Reach Mail",
        url: "mailto:anshulgupta282004@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Google: {
        name: "Google Developer",
        url: "https://me.developers.google.com/u/115141869998156574897",
        icon: Icons.google,
        navbar: true,
      },
      Portfolio: {
        name: "Portfolio",
        url: "https://anshul-portfolio-alpha.vercel.app",
        icon: Icons.globe,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Commudle",
      href: "https://www.commudle.com",
      badges: ["Product", "Agile", "Cross-functional"],
      location: "New Delhi, India",
      title: "Product & Software Development Intern",
      logoUrl: "/commudle.png",
      start: "June 2025",
      end: "August 2025",
      description: `**Problem:** Content creators on Commudle faced inefficient content creation workflows, usability gaps across campaign management modules, and friction in mobile navigation — limiting platform adoption and creator productivity.

**Responsibility:** Bridge product, design, and engineering to improve content creation workflows, module usability, and platform performance across campaign management features.

**Actions Taken:**
- Collaborated with product, design, and engineering stakeholders to understand user requirements and improve content creation workflows
- Gathered feedback from internal users and analyzed workflow bottlenecks to recommend enhancements
- Evaluated user journeys across campaign management workflows for mobile-first improvements
- Worked closely with cross-functional agile teams during sprint cycles to define feature requirements, validate implementations, perform testing, and support product releases
- Participated in bug identification, issue prioritization, API integration testing, and quality assurance activities
- Coordinated with engineering and product teams to streamline backend-frontend integrations

**Cross-Functional Collaboration:** Partnered daily with product managers, designers, engineers, and QA across agile sprint cycles — from requirement definition through release support.

**Outcomes & Business Impact:**
- Launched **newsletter preview feature** increasing content creation efficiency by **40%**
- Recommended notifications, tooltips, and contextual guidance improving module usability and accessibility by **30%**
- Mobile-first feature improvements enhanced user self-navigation by **35%** and interaction stability by **25%**
- Backend-frontend integration streamlining contributed to **20% improvement** in feature responsiveness`,
    },
  ],
  education: [
    {
      school: "Bharati Vidyapeeth's College of Engineering",
      href: "https://www.bvcoend.ac.in",
      degree:
        "Bachelor of Technology in Computer Science and Engineering — CGPA: 8.94 (Till 5th Sem)",
      logoUrl: "",
      start: "Sep 2023",
      end: "June 2027",
    },
    {
      school: "CBSE — Class XII",
      href: "#",
      degree: "Class XII (CBSE): 82.2%",
      logoUrl: "",
      start: "",
      end: "",
    },
    {
      school: "CBSE — Class X",
      href: "#",
      degree: "Class X (CBSE): 90.2%",
      logoUrl: "",
      start: "",
      end: "",
    },
  ],
  projects: [
    {
      title: "Enterprise Blogging Platform",
      href: "https://blog-platform-wheat-eta.vercel.app/",
      dates: "Product Case Study",
      active: true,
      description: `**Overview:** Scalable blogging platform focused on content discovery, user engagement, and seamless publishing workflows.

**Problem:** Content creators and readers need a platform that balances discoverability, engagement, and frictionless publishing.

**Target Users:** Bloggers, content creators, and readers seeking personalized content experiences.

**Pain Points:** Poor content discoverability, lack of engagement features, and complex publishing workflows.

**Solution:** Designed and developed a scalable blogging platform with authentication flows, search functionality, commenting systems, and personalized content experiences.

**Key Features:** User authentication, content search, commenting system, personalized content feeds.

**Product Decisions:** Prioritized content discoverability and accessibility to improve platform scalability and user retention.

**Business Impact:** Improved content discoverability, accessibility, and platform scalability for growing user bases.

**Tech Stack:** React, TypeScript, Node.js, SQL

**Lessons Learned:** Authentication and search are foundational — investing in content discovery early drives long-term engagement.`,
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "SQL",
        "Authentication",
        "Search",
      ],
      links: [
        {
          type: "Live",
          href: "https://blog-platform-wheat-eta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/Anshulgupta280104/blog-platform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project-blogging.png",
      video: "",
    },
    {
      title: "The Atelier — Finance Analytics Dashboard",
      href: "https://finance-dashboard-eight-self.vercel.app/dashboard",
      dates: "Product Case Study",
      active: true,
      description: `**Overview:** Data visualization and decision-support dashboard for centralized financial monitoring.

**Problem:** Users lacked a centralized view for financial monitoring, role-based access, and actionable reporting — slowing decision-making.

**Target Users:** Finance teams and decision-makers needing real-time financial insights.

**Pain Points:** Scattered financial data, slow dashboards, and poor data interpretation workflows.

**Solution:** Designed intuitive dashboard workflows with optimized visualizations, filtering experiences, and role-based access control.

**Key Features:** Centralized financial monitoring, role-based access, actionable reporting, advanced filtering.

**Product Decisions:** Optimized visualizations and filtering for faster data interpretation over feature breadth.

**Business Impact:** Improved dashboard responsiveness by **45%** and enhanced data interpretation efficiency by **40%**.

**Metrics:** 45% responsiveness improvement, 40% data interpretation efficiency gain.

**Tech Stack:** React, TypeScript, Data Visualization, SQL

**Lessons Learned:** Dashboard UX is about reducing time-to-insight — every filter and visualization should answer a specific decision.`,
      technologies: [
        "React",
        "TypeScript",
        "Data Visualization",
        "SQL",
        "Role-Based Access",
      ],
      links: [
        {
          type: "Live",
          href: "https://finance-dashboard-eight-self.vercel.app/dashboard",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/Anshulgupta280104/finance-dashboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project-atelier.png",
      video: "",
    },
    {
      title: "Plate2People",
      href: "https://plate2people-chatbot-mine.vercel.app/",
      dates: "Product Case Study",
      active: true,
      description: `**Overview:** AI-powered food redistribution platform connecting donors, NGOs, volunteers, and recipients.

**Problem:** Food wastage and coordination inefficiencies between donors, NGOs, and recipients create social impact gaps.

**Target Users:** Food donors, NGOs, volunteers, and recipients in need of streamlined redistribution.

**Pain Points:** Fragmented coordination, food wastage, and complex pickup logistics.

**Solution:** Researched stakeholder pain points and designed workflows for food requests, pickup coordination, chatbot assistance, and platform navigation.

**Key Features:** Food request workflows, pickup coordination, AI chatbot assistance, stakeholder dashboards.

**Product Decisions:** Prioritized coordination efficiency and chatbot-guided navigation to reduce friction for all stakeholder types.

**Business Impact:** Enabled a potential **45% reduction in food wastage** and **50% improvement in coordination efficiency**.

**Metrics:** 45% food wastage reduction potential, 50% coordination efficiency improvement.

**Tech Stack:** React, TypeScript, AI Chatbot, API Integrations

**Lessons Learned:** Social impact products require deep stakeholder research — each user type (donor, NGO, volunteer, recipient) has distinct workflows.`,
      technologies: [
        "React",
        "TypeScript",
        "AI Chatbot",
        "API Integrations",
        "Social Impact",
      ],
      links: [
        {
          type: "Live",
          href: "https://plate2people-chatbot-mine.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/Anshulgupta280104/plate2people-chatbot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project-plate2people.png",
      video: "",
    },
  ],
  careerTimeline: [
    {
      title: "B.Tech Computer Science — BVCOE",
      dates: "Sep 2023 – June 2027",
      location: "Delhi, India",
      description:
        "Pursuing Bachelor of Technology in Computer Science and Engineering with CGPA 8.94 (Till 5th Sem). Building engineering foundation alongside product thinking.",
      win: "CGPA: 8.94",
      image: "",
      links: [],
    },
    {
      title: "GDSC BVCOE — Technical Events",
      dates: "2024 – Present",
      location: "BVCOE, Delhi",
      description:
        "Organized and executed 10+ GDSC BVCOE technical workshops and coding events, fostering developer community growth.",
      win: "10+ Events",
      image: "",
      galleryImage: "/timeline/gdsc-events-2.png",
      links: [],
    },
    {
      title: "HackwithIndia — National Hackathons",
      dates: "2024 – 2025",
      location: "Google & Microsoft Venues",
      description:
        "Organized large-scale national hackathons with 10K+ participants at Google & Microsoft venues.",
      win: "10K+ Participants",
      image: "",
      galleryImage: "/timeline/gdsc-events-1.png",
      links: [],
    },
    {
      title: "Microsoft Build It Tour",
      dates: "2024 – 2025",
      location: "Noida & Gurugram",
      description:
        "Organized Build It Tour events at Microsoft offices in Noida and Gurugram.",
      image: "",
      galleryImage: "/timeline/build-it-tour.png",
      links: [],
    },
    {
      title: "EduMinerva — Pre-Placement Bootcamp",
      dates: "2024 – 2025",
      location: "BVCOE, Delhi",
      description:
        "Managed Pre-Placement Bootcamp for 300+ students at EduMinerva, BVCOE.",
      win: "300+ Students",
      image: "",
      mediaHeading: "EduMinerva — Pre-Placement Bootcamp",
      dialogImage: "/timeline/eduminerva.png",
      links: [],
    },
    {
      title: "Commudle — Product & Software Development Intern",
      dates: "June 2025 – August 2025",
      location: "New Delhi, India",
      description:
        "Collaborated with cross-functional agile teams to ship features including newsletter preview (40% efficiency gain), usability improvements (30%), and mobile-first navigation (35% self-navigation gain).",
      win: "40% Efficiency Gain",
      image: "/commudle.png",
      links: [],
    },
    {
      title: "TEDxBVCOE",
      dates: "2025",
      location: "BVCOE, Delhi",
      description:
        "Coordinated TEDxBVCOE technical conference with 200+ attendees as part of the organizing team.",
      win: "200+ Attendees",
      image: "",
      galleryImage: "/timeline/tedx-bvcoe.png",
      links: [],
    },
    {
      title: "HACK@BVP — Bharati Vidyapeeth Flagship Hackathon",
      dates: "2023 – 2025",
      location: "BVCOE, New Delhi",
      description:
        "Contributed to Bharati Vidyapeeth's College of Engineering flagship hackathon — HACK@BVP — organizing and speaking at large-scale student hackathon events on campus.",
      win: "Flagship Hackathon",
      image: "",
      galleryImage: "/timeline/hackbvp.png",
      links: [],
    },
    {
      title: "AlgoQuest 2025 — Sentinel",
      dates: "2025",
      location: "National Competition",
      description:
        "Led product strategy and solution design for Sentinel, an AI-powered Employee Insights Agent, securing a Top 6 Finalist position among 300+ teams.",
      win: "Top 6 / 300+ Teams",
      image: "",
      galleryImage: "/timeline/algoquest-sentinel.png",
      mediaHeading: "AlgoQuest 2025 — Sentinel",
      dialogImage: "/timeline/algoquest-sentinel.png",
      links: [],
    },
  ],
  hackathons: [],
} as const;
