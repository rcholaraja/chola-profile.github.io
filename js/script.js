// ===========================
// Initialize Page Content from Config
// ===========================
function initializePageContent() {
  if (typeof CONFIG === 'undefined') {
    console.error('CONFIG not loaded! Make sure config.js is loaded before script.js');
    return;
  }

  // Update SEO meta tags
  document.getElementById('page-title').textContent = CONFIG.seo.title;
  document.getElementById('meta-description').content = CONFIG.seo.description;
  document.getElementById('meta-keywords').content = CONFIG.seo.keywords;
  document.getElementById('meta-author').content = CONFIG.seo.author;

  // Update navigation brand
  document.getElementById('nav-brand-name').textContent = CONFIG.personalInfo.name;

  // Update hero section
  document.getElementById('hero-name').textContent = CONFIG.personalInfo.name;
  document.getElementById('hero-title').textContent = CONFIG.personalInfo.title;
  document.getElementById('hero-description').textContent = CONFIG.personalInfo.description;
  document.getElementById('profile-image').src = CONFIG.personalInfo.profileImage;
  document.getElementById('profile-image').alt = `${CONFIG.personalInfo.name} - Professional Photo`;

  // Update hero buttons
  const heroButtons = document.getElementById('hero-buttons');
  heroButtons.innerHTML = `
    <a href="${CONFIG.personalInfo.ctaButtons.primary.link}" class="btn btn-primary">${CONFIG.personalInfo.ctaButtons.primary.text}</a>
    <a href="${CONFIG.personalInfo.ctaButtons.secondary.link}" class="btn btn-secondary">${CONFIG.personalInfo.ctaButtons.secondary.text}</a>
  `;

  // Update social links (hero and footer)
  updateSocialLinks('social-links', CONFIG.personalInfo.socialLinks);
  updateSocialLinks('footer-social', CONFIG.personalInfo.socialLinks);

  // Update About section
  populateAboutSection();

  // Update Experience section
  populateExperienceSection();

  // Update Skills section
  populateSkillsSection();

  // Update Certifications section
  populateCertificationsSection();

  // Update Education section
  populateEducationSection();

  // Update Projects section
  populateProjectsSection();

  // Update Contact section
  populateContactSection();

  // Update Footer
  document.getElementById('footer-copyright').textContent = 
    `© ${CONFIG.footer.copyrightYear} ${CONFIG.footer.copyrightName}. All rights reserved.`;
}

// ===========================
// Helper Functions to Populate Sections
// ===========================

function updateSocialLinks(elementId, socialLinks) {
  const container = document.getElementById(elementId);
  let html = '';

  if (socialLinks.linkedin) {
    html += `<a href="${socialLinks.linkedin}" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>`;
  }
  if (socialLinks.github) {
    html += `<a href="${socialLinks.github}" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>`;
  }
  if (socialLinks.twitter) {
    html += `<a href="${socialLinks.twitter}" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>`;
  }
  if (socialLinks.website) {
    html += `<a href="${socialLinks.website}" target="_blank" aria-label="Website"><i class="fas fa-globe"></i></a>`;
  }
  if (CONFIG.personalInfo.email) {
    html += `<a href="mailto:${CONFIG.personalInfo.email}" aria-label="Email"><i class="fas fa-envelope"></i></a>`;
  }

  container.innerHTML = html;
}

function populateAboutSection() {
  const aboutText = document.getElementById('about-text');
  let html = '';

  // Add paragraphs
  CONFIG.about.paragraphs.forEach(paragraph => {
    html += `<p>${paragraph}</p>`;
  });

  aboutText.innerHTML = html;

  // Add stats
  const aboutStats = document.getElementById('about-stats');
  let statsHtml = '';
  
  CONFIG.about.stats.forEach(stat => {
    statsHtml += `
      <div class="stat">
        <h3>${stat.number}+</h3>
        <p>${stat.label}</p>
      </div>
    `;
  });

  aboutStats.innerHTML = statsHtml;
}

function populateExperienceSection() {
  const timeline = document.getElementById('experience-timeline');
  let html = '';

  CONFIG.experience.forEach(job => {
    html += `
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <h3>${job.title}</h3>
            <span class="company">${job.company}</span>
            <span class="duration">${job.duration}</span>
            <span class="location">${job.location}</span>
          </div>
          <ul class="timeline-description">
            ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
          </ul>
          <div class="tech-tags">
            ${job.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  });

  timeline.innerHTML = html;
}

function populateSkillsSection() {
  const skillsGrid = document.getElementById('skills-grid');
  
  // Icon mapping for different skill categories
  const iconMap = {
    'Core Technologies': 'fa-code',
    'Frontend Development': 'fa-laptop-code',
    'Database & Servers': 'fa-database',
    'Tools & Collaboration': 'fa-users-cog',
    'Development Tools': 'fa-tools'
  };

  let html = '';

  // Iterate through all skill categories dynamically
  Object.keys(CONFIG.skills).forEach(categoryName => {
    const skills = CONFIG.skills[categoryName];
    const icon = iconMap[categoryName] || 'fa-code';
    
    html += `
      <div class="skill-category">
        <h3><i class="fas ${icon}"></i> ${categoryName}</h3>
        <div class="skill-list">
          ${skills.map(skill => `
            <div class="skill-item">
              <span class="skill-name">${skill.name}</span>
              <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.level}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  skillsGrid.innerHTML = html;
}

function populateEducationSection() {
  const educationGrid = document.getElementById('education-grid');
  let html = '';

  CONFIG.education.forEach(edu => {
    html += `
      <div class="education-card">
        <div class="education-icon">
          ${edu.image ? `<img src="${edu.image}" alt="${edu.degree}" class="education-image">` : `<i class="fas ${edu.icon || 'fa-graduation-cap'}"></i>`}
        </div>
        <h3>${edu.degree}</h3>
        <p class="institution">${edu.institution}</p>
        <p class="year">${edu.year}</p>
        <p class="description">${edu.description}</p>
      </div>
    `;
  });

  educationGrid.innerHTML = html;
}

function populateCertificationsSection() {
  const certificationsGrid = document.getElementById('certifications-grid');
  let html = '';

  CONFIG.certifications.forEach(cert => {
    html += `
      <div class="certification-card">
        <div class="certification-icon">
          ${cert.image ? `<img src="${cert.image}" alt="${cert.name}" class="certification-image">` : `<i class="fas fa-${cert.icon}"></i>`}
        </div>
        <div class="certification-content">
          <h3>${cert.name}</h3>
          <p class="certification-issuer">${cert.issuer}</p>
        </div>
      </div>
    `;
  });

  certificationsGrid.innerHTML = html;
}

function populateProjectsSection() {
  const projectsGrid = document.getElementById('projects-grid');
  let html = '';

  CONFIG.projects.forEach(project => {
    const demoLink = project.links.demo ? `<a href="${project.links.demo}" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i></a>` : '';
    const githubLink = project.links.github ? `<a href="${project.links.github}" class="project-link" target="_blank"><i class="fab fa-github"></i></a>` : '';
    
    html += `
      <div class="project-card">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}">
          <div class="project-overlay">
            ${demoLink}
            ${githubLink}
          </div>
        </div>
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tech">
            ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  });

  projectsGrid.innerHTML = html;
}

function populateContactSection() {
  document.getElementById('contact-title').textContent = CONFIG.contact.title;
  document.getElementById('contact-subtitle').textContent = 'Let\'s Connect';
  document.getElementById('contact-description').textContent = CONFIG.contact.description;

  const contactDetails = document.getElementById('contact-details');
  let html = '';

  if (CONFIG.personalInfo.email) {
    html += `
      <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <a href="mailto:${CONFIG.personalInfo.email}">${CONFIG.personalInfo.email}</a>
      </div>
    `;
  }

  if (CONFIG.personalInfo.phone) {
    html += `
      <div class="contact-item">
        <i class="fas fa-phone"></i>
        <a href="tel:${CONFIG.personalInfo.phone.replace(/\s/g, '')}">${CONFIG.personalInfo.phone}</a>
      </div>
    `;
  }

  if (CONFIG.personalInfo.location) {
    html += `
      <div class="contact-item">
        <i class="fas fa-map-marker-alt"></i>
        <span>${CONFIG.personalInfo.location}</span>
      </div>
    `;
  }

  if (CONFIG.personalInfo.socialLinks.linkedin) {
    html += `
      <div class="contact-item">
        <i class="fab fa-linkedin"></i>
        <a href="${CONFIG.personalInfo.socialLinks.linkedin}" target="_blank">LinkedIn Profile</a>
      </div>
    `;
  }

  contactDetails.innerHTML = html;
}

// ===========================
// Navigation & Mobile Menu
// ===========================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active') 
      ? 'rotate(45deg) translateY(8px)' 
      : 'none';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active') 
      ? 'rotate(-45deg) translateY(-8px)' 
      : 'none';
  });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    
    // Reset hamburger icon
    const spans = navToggle.querySelectorAll('span');
    spans.forEach(span => {
      span.style.transform = 'none';
      span.style.opacity = '1';
    });
  });
});

// Highlight active navigation link on scroll
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// ===========================
// Smooth Scrolling
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = target.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===========================
// Navbar Background on Scroll
// ===========================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    navbar.style.padding = '0.75rem 0';
  } else {
    navbar.style.boxShadow = 'none';
    navbar.style.padding = '1rem 0';
  }
});

// ===========================
// Back to Top Button
// ===========================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===========================
// Skill Bar Animation
// ===========================
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -100px 0px'
};

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll('.skill-progress');
      skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
      skillsObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
  skillsObserver.observe(skillsSection);
}

// ===========================
// Scroll Animation for Elements
// ===========================
const animateOnScrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

// Animate sections on scroll
const animatedElements = document.querySelectorAll('.timeline-item, .project-card, .education-card, .skill-category');
animatedElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  animateOnScrollObserver.observe(el);
});

// ===========================
// Contact Form Handling
// ===========================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      showNotification('Please fill in all required fields', 'error');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }
    
    try {
      // Show loading state
      const submitBtn = contactForm.querySelector('.btn');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the data to your backend
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      
      console.log('Form data:', formData);
      
      // Show success message
      showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
      
      // Reset form
      contactForm.reset();
      
      // Reset button
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    } catch (error) {
      console.error('Error sending message:', error);
      showNotification('Failed to send message. Please try again.', 'error');
      
      // Reset button
      const submitBtn = contactForm.querySelector('.btn');
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
    }
  });
}

// ===========================
// Notification System
// ===========================
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Add styles
  notification.style.position = 'fixed';
  notification.style.top = '100px';
  notification.style.right = '20px';
  notification.style.padding = '1rem 1.5rem';
  notification.style.borderRadius = '12px';
  notification.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
  notification.style.zIndex = '9999';
  notification.style.maxWidth = '400px';
  notification.style.animation = 'slideInRight 0.3s ease-out';
  notification.style.fontWeight = '500';
  
  // Set colors based on type
  if (type === 'success') {
    notification.style.background = '#10b981';
    notification.style.color = 'white';
  } else if (type === 'error') {
    notification.style.background = '#ef4444';
    notification.style.color = 'white';
  } else {
    notification.style.background = '#2563eb';
    notification.style.color = 'white';
  }
  
  // Add to document
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 5000);
}

// Add notification animations to CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ===========================
// Typing Effect for Hero Title (Optional)
// ===========================
function initTypingEffect() {
  const heroTitle = document.querySelector('.hero-title');
  if (!heroTitle) return;
  
  const text = heroTitle.textContent;
  const highlightStart = text.indexOf('Your Name');
  const highlightEnd = highlightStart + 'Your Name'.length;
  
  // Optional: Add typing effect on page load
  // Uncomment if you want this feature
  /*
  heroTitle.textContent = '';
  let i = 0;
  
  function type() {
    if (i < text.length) {
      if (i === highlightStart) {
        heroTitle.innerHTML += '<span class="highlight">';
      }
      heroTitle.innerHTML += text.charAt(i);
      if (i === highlightEnd - 1) {
        heroTitle.innerHTML += '</span>';
      }
      i++;
      setTimeout(type, 100);
    }
  }
  
  setTimeout(type, 500);
  */
}

// Initialize typing effect if needed
// initTypingEffect();

// ===========================
// Dark Mode Toggle (Optional Feature)
// ===========================
function initDarkMode() {
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  // Create dark mode toggle button (optional)
  // You can add this button to your HTML if you want dark mode
  const darkModeToggle = document.getElementById('darkModeToggle');
  
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const newTheme = theme === 'light' ? 'dark' : 'light';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
}

// Initialize dark mode if toggle exists
initDarkMode();

// ===========================
// Project Card Tilt Effect (Optional)
// ===========================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
});

// ===========================
// Lazy Loading Images
// ===========================
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });
  
  const images = document.querySelectorAll('img[data-src]');
  images.forEach(img => imageObserver.observe(img));
}

// ===========================
// Stats Counter Animation
// ===========================
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  const updateCounter = () => {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start) + '+';
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + '+';
    }
  };
  
  updateCounter();
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll('.stat h3');
      statNumbers.forEach(stat => {
        const text = stat.textContent;
        const number = parseInt(text.replace(/\D/g, ''));
        if (!isNaN(number)) {
          stat.textContent = '0+';
          animateCounter(stat, number);
        }
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about');
if (aboutSection) {
  statsObserver.observe(aboutSection);
}

// ===========================
// Console Message (Easter Egg)
// ===========================
console.log(
  '%cHey there! 👋',
  'color: #2563eb; font-size: 24px; font-weight: bold;'
);
console.log(
  '%cLooking at the code? I like your curiosity! Feel free to reach out if you want to collaborate.',
  'color: #64748b; font-size: 14px;'
);

// ===========================
// Performance Optimization
// ===========================
// Debounce function for scroll events
function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to scroll handlers
window.addEventListener('scroll', debounce(() => {
  // Your scroll handler code here
}, 10));

// ===========================
// Initialization
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize content from config first
  initializePageContent();
  
  console.log('Career website initialized successfully! 🚀');
  
  // Add fade-in animation to body
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease-in';
    document.body.style.opacity = '1';
  }, 100);
});

// ===========================
// Export functions for testing (if needed)
// ===========================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    showNotification,
    animateCounter,
    debounce
  };
}
