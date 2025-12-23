/**
 * Personal Career Website Configuration
 * 
 * Update this file with your personal information.
 * All content on the website will be automatically populated from this configuration.
 * 
 * Instructions:
 * 1. Update the personalInfo section with your details
 * 2. Add your work experience in the experience array
 * 3. Update skills with your proficiency levels (0-100)
 * 4. Add your education and certifications
 * 5. Showcase your projects
 * 
 * Note: After updating this file, refresh your browser to see changes
 */

const CONFIG = {
  // ===========================
  // Personal Information
  // ===========================
  personalInfo: {
    name: "CHOLA",
    title: "SAP Commerce Cloud Certified Architect | SAP BTP & Business AI Strategist | Enterprise Commerce & Cloud Solutions | SAP Labs | 10+ Years Experience | Alpinist | Runner",
    titles: [
      "SAP Commerce Cloud Certified Architect",
      "Enterprise Commerce & Cloud Solutions",
      "SAP BTP & Business AI Strategist",
      "SAP Labs | 10+ Years Experience",
      "Alpinist | Runner"
    ],
    description: "A competent professional offering 10 years of real-time experience in SAP Commerce Cloud (Hybris) Development and Business consulting for leading global service delivery operations across e-Commerce, Retail, Fashion and Pharma industries.",
    email: "rcholaraja@gmail.com",
    phone: "+91 77955-61343",
    location: "Bengaluru, India",
    
    // Profile image - relative path from index.html
    profileImage: "images/profile.jpg",
    
    // Social media links
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/chola/",
      github: "https://github.com/rcholaraja",
      twitter: "", // Leave empty if not applicable
      website: "https://rcholaraja.github.io/chola-profile.github.io/",
    },
    
    // Call-to-action buttons in hero section
    ctaButtons: {
      primary: {
        text: "Get In Touch",
        link: "#contact"
      },
      secondary: {
        text: "View My Work",
        link: "#projects"
      }
    }
  },

  // ===========================
  // About Section
  // ===========================
  about: {
    paragraphs: [
      "I'm a SAP Commerce Cloud (Hybris) Certified Technical Architect with extensive experience in design and development of enterprise e-commerce applications using Java/J2EE, Restful web services and Spring framework. I specialize in delivering omni-channel responsive web applications for digital transformation across B2B, B2C, retail, fashion, pharma and marine industries.",
      "With strong expertise in providing business consultation for real-time B2B and B2C e-Commerce applications, I have successfully led end-to-end development of large-scale projects. I'm proficient in implementing scrum methodology and coordinating all scrum ceremonies including sprint planning, daily standups, sprint retrospectives, sprint demos, story grooming and release planning. My approach combines technical excellence with business acumen to deliver scalable, high-performance e-commerce solutions."
    ],
    
    // Statistics to display
    stats: [
      { number: 10, label: "Years Experience" },
      { number: 15, label: "Projects Delivered" },
      { number: 5, label: "Professional Certifications" }
      //{ number: 5, label: "Companies Worked" }
    ],
    
    // Languages
    languages: ["Tamil (Mother tongue)", "English", "Hindi", "Kannada", "Malayalam"],
    
    // Hobbies
    hobbies: ["Running", "Trekking", "Cooking", "Gardening", "Listening Music"]
  },

  // ===========================
  // Work Experience
  // ===========================
  experience: [
    {
      title: "Technical Architect",
      company: "SAP",
      duration: "Oct 2021 - Present",
      location: "Bengaluru, India",
      responsibilities: [
        "Closely work with product owners to gather requirements and work with dev team to implement highly scalable e-Commerce solutions",
        "Led migration of on-premises commerce projects into CCv2 commerce cloud",
        "Involved in various client meetings and cut-over activities",
        "Responsible for overall delivery of the project",
        "Supporting the team in all aspects to achieve the project goal"
      ],
      technologies: ["SAP Commerce Cloud", "Java", "Spring", "JSP", "JSTL", "JavaScript", "CSS"]
    },
    {
      title: "Technical Lead",
      company: "Accenture",
      duration: "Mar 2020 - Oct 2021",
      location: "India",
      responsibilities: [
        "Work closely with onsite counterparts to gather requirements",
        "Developed E2E e-commerce application for fashion industry",
        "Implemented order module related functionalities using Restful web services",
        "Customized the OOTB checkout journey features",
        "Participated in project estimation meetings and risk management plan and mitigation activities"
      ],
      technologies: ["SAP Commerce Cloud", "Java", "Spring", "JSP", "JSTL", "JavaScript", "CSS", "RESTful APIs"]
    },
    {
      title: "Senior Developer",
      company: "Cognizant",
      duration: "Aug 2018 - Mar 2020",
      location: "India",
      responsibilities: [
        "Developed B2B e-commerce application for Pharma industry",
        "Responsible for implementing server-side programming, action classes, data models",
        "Implemented group occasion orders functionality",
        "Implemented upcoming orders display in order history page"
      ],
      technologies: ["SAP Commerce (Hybris)", "Java", "Spring", "JSP", "JSTL"]
    },
    {
      title: "Senior Developer",
      company: "Publicis Sapient",
      duration: "Jan 2018 - Aug 2018",
      location: "India",
      responsibilities: [
        "Implemented spring MVC architecture",
        "Modified data models as per SAP commerce standards",
        "Involved in various CMS content customization activities",
        "Involved in various maintenance activities and defect fixing"
      ],
      technologies: ["SAP Commerce Cloud", "Java", "JSP", "Spring MVC"]
    },
    {
      title: "Developer",
      company: "Tata Consultancy Services",
      duration: "Feb 2013 - Dec 2017",
      location: "India",
      responsibilities: [
        "Working on SAP enterprise portal as SAP consultant",
        "Developing custom portal applications and portal pages on demand",
        "Developed SAP enterprise portal pages and designed service marketplace pages",
        "PCD content maintenance and Transport through solution manager",
        "Moving PCD package objects across the landscape using change request management"
      ],
      technologies: ["Java", "SAP Enterprise Portal", "SAP NetWeaver"]
    }
  ],

  // ===========================
  // Skills (0-100 proficiency)
  // ===========================
  skills: {
    "Core Technologies": [
      { name: "SAP Commerce Cloud (Hybris)", level: 95 },
      { name: "Java/J2EE", level: 92 },
      { name: "Spring Framework", level: 90 },
      { name: "Cloud Integration (CPI)", level: 90 },
      { name: "RESTful Web Services", level: 88 }
    ],
    "Frontend Development": [
      { name: "JSP/JSTL", level: 85 },
      { name: "JavaScript", level: 82 },
      { name: "CSS", level: 80 },
      { name: "Spartacus", level: 80 },
      { name: "SAP UI5", level: 75 }
    ],
    "Database & Servers": [
      { name: "Azure SQL", level: 85 },
      { name: "SAP HANA DB", level: 82 },
      { name: "HSQL", level: 80 },
      { name: "Tomcat", level: 88 },
      { name: "Solr Search Server", level: 78 }
    ],
    "Tools & Collaboration": [
      { name: "JIRA", level: 90 },
      { name: "Confluence", level: 85 },
      { name: "GitHub", level: 88 },
      { name: "BitBucket", level: 85 },
      { name: "SharePoint", level: 80 }
    ],
    "Development Tools": [
      { name: "Visual Studio Code", level: 90 },
      { name: "IntelliJ IDEA", level: 88 },
      { name: "Eclipse IDE", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Agile/Scrum", level: 92 }
    ]
  },

  // ===========================
  // Certifications
  // ===========================
  certifications: [
    {
      name: "SAP Commerce Cloud Certified Development Professional",
      issuer: "SAP",
      image: "images/certificate.jpg",
      color: "#0FAAFF"
    },
    {
      name: "SAP Commerce Cloud Certified Business User",
      issuer: "SAP",
      image: "images/certificate.jpg",
      color: "#0FAAFF"
    },
    {
      name: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      image: "images/certificate.jpg",
      color: "#FF9900"
    },
     {
      name: "SAP Certified Backend Developer - SAP Cloud Application Programming Model",
      issuer: "SAP",
      image: "images/certificate.jpg",
      color: "#2740bbff"
    }
  ],

  // ===========================
  // Education
  // ===========================
  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Anna University, Chennai",
      year: "Completed",
      description: "Graduated with 79% from Anna University, Chennai. Strong foundation in Computer Science fundamentals.",
      image: "images/btech.jpg"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Board of Secondary Education, Tamil Nadu",
      year: "Completed",
      description: "Completed with 81%. Built strong analytical and problem-solving skills.",
      image: "images/school.jpg"
    },
    {
      degree: "SSLC (Secondary School)",
      institution: "Board of Secondary Education, Tamil Nadu",
      year: "Completed",
      description: "Completed with 76%. Established foundation for technical education.",
      image: "images/school.jpg"
    }
  ],

  // ===========================
  // Projects
  // ===========================
  projects: [
      {
      title: "Everllence B2B E-Commerce E2E Solution (SAP)",
      description: "Led migration of on-premises commerce projects to CCv2 commerce cloud platform. Worked closely with product owners to implement highly scalable e-Commerce solutions with client meetings and cut-over activities.",
      image: "images/project3.jpg",
      technologies: ["SAP Commerce Cloud", "CCv2", "Java", "Spring", "Cloud Migration"],
      links: {
        demo: "",
        github: ""
      }
    },
    {
      title: "AI Powered ITC Inventory Management Solution (SAP)",
      description: "Developed a comprehensive AI assisted inventory management solution on SAP Business Technology Platform, integrating real-time inventory tracking and automated replenishment workflows.",
      image: "images/project4.jpg",
      technologies: ["SAP BTP", "Python", "SAP AI Core", "SAP HANA", "SAP Joule", "SAP GenAI SDK"],
      links: {
        demo: "",
        github: ""
      }
    },
      {
      title: "Tacobell E-Commerce Platform (Publicis Sapient)",
      description: "Developed end-to-end e-commerce application for Tacobell food industry with customized checkout journey, pick up in store, Drive thru, Corporate orders, loyalty program and order management module using RESTful web services, and omni-channel responsive design.",
      image: "images/project5.jpg",
      technologies: ["SAP Commerce Cloud", "Java", "Spring", "RESTful APIs", "JSP", "JavaScript"],
      links: {
        demo: "",
        github: ""
      }
    },
    {
      title: "Fashion E-Commerce Platform (Accenture)",
      description: "Developed end-to-end e-commerce application for fashion industry with customized checkout journey, order management module using RESTful web services, and omni-channel responsive design.",
      image: "images/project1.jpg",
      technologies: ["SAP Commerce Cloud", "Java", "Spring", "RESTful APIs", "JSP", "JavaScript"],
      links: {
        demo: "",
        github: ""
      }
    },
    {
      title: "B2B Pharma E-Commerce (Cognizant)",
      description: "Built B2B e-commerce platform for pharmaceutical industry with group occasion orders, upcoming orders display, server-side programming with custom action classes and data models.",
      image: "images/project2.jpg",
      technologies: ["SAP Commerce (Hybris)", "Java", "Spring", "JSP", "JSTL"],
      links: {
        demo: "",
        github: ""
      }
    },
    {
      title: "SAP Enterprise Portal Applications (TCS)",
      description: "Developed custom portal applications and service marketplace pages on SAP Enterprise Portal. Managed PCD content maintenance, transport through solution manager, and cross-landscape object movement.",
      image: "images/project6.jpg",
      technologies: ["SAP Enterprise Portal", "SAP NetWeaver", "SAP UI5"],
      links: {
        demo: "",
        github: ""
      }
    }
  ],

  // ===========================
  // Contact Information
  // ===========================
  contact: {
    title: "Get In Touch",
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    
    // Form configuration
    form: {
      // FormSpree endpoint (sign up at https://formspree.io/)
      endpoint: "", // e.g., "https://formspree.io/f/your-form-id"
      
      // Alternative: Your own backend API endpoint
      // endpoint: "/api/contact"
    }
  },

  // ===========================
  // Footer
  // ===========================
  footer: {
    copyrightYear: new Date().getFullYear(),
    copyrightName: "Chola"
  },

  // ===========================
  // SEO & Meta Information
  // ===========================
  seo: {
    title: "Chola - SAP Commerce Cloud Technical Architect | 10+ Years Experience",
    description: "Chola - SAP Commerce Cloud Technical Architect with 10+ years experience in SAP Commerce Cloud development, e-commerce solutions for retail, fashion, Marine and pharma industries. Expert in Java, Spring, SAP BTP, SAP AI Core and SAP Cloud Application Programming Model (CAP).",
    keywords: "SAP Commerce Cloud, Hybris Developer, Technical Architect, Java, Spring Framework, e-commerce, B2B, B2C, CCv2, SAP Consultant, AWS Certified, BTP, SAP AI Core, CAP",
    author: "Chola"
  }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
