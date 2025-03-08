function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
// Content data for Web and Blockchain modes
const contentData = {
  web: {
    projects: [
      {
        title: "Portfolio Website",
        description: "A fully responsive single-page portfolio built with React, TypeScript, and Redux for state management.",
        image: "./assets/project-1.png",
        github: "https://github.com/",
        demo: "https://github.com/"
      },
      {
        title: "Task Management App",
        description: "A full-stack task management system with Node.js, Express, and PostgreSQL, featuring user authentication and task tracking.",
        image: "./assets/project-2.png",
        github: "https://github.com/",
        demo: "https://github.com/"
      },
      {
        title: "E-Commerce Platform",
        description: "An online store built with React, Firebase, and Stripe integration for payments.",
        image: "./assets/project-3.png",
        github: "https://github.com/",
        demo: "https://github.com/"
      }
    ],
    about: "I'm a passionate full-stack developer specializing in React, TypeScript, Node.js, and PostgreSQL. I enjoy creating scalable and efficient web applications that enhance user experience. My projects include e-commerce platforms, task management systems, and interactive web applications.",
    contact: {
      ctaText: "Need a skilled web developer? Whether you're looking for a custom website, full-stack application, or API development, I'm here to help. Let's build something amazing together!"
    },
    experience: "web", // Indicates which experience section to show
    services: "web", // Indicates which services section to show
    skills: "web", // Indicates which skills section to show
    testimonials: "web" // Indicates which testimonials section to show
  },
  blockchain: {
    projects: [
      {
        title: "Ethereum Smart Contract DApp",
        description: "A decentralized voting system built on Ethereum using Solidity, Hardhat, and Ethers.js.",
        image: "./assets/project-1.png",
        github: "https://github.com/",
        demo: "https://github.com/"
      },
      {
        title: "NFT Marketplace",
        description: "A fully functional NFT marketplace that enables minting, buying, and selling NFTs using Solidity and IPFS.",
        image: "./assets/project-2.png",
        github: "https://github.com/",
        demo: "https://github.com/"
      },
      {
        title: "DeFi Staking Platform",
        description: "A DeFi application that allows users to stake tokens and earn rewards, built with Solidity and Web3.js.",
        image: "./assets/project-3.png",
        github: "https://github.com/",
        demo: "https://github.com/"
      }
    ],
    about: "I'm a blockchain developer with expertise in Solidity, Hardhat, and smart contract development. I build decentralized applications (DApps) and DeFi solutions that run on Ethereum and other EVM-compatible blockchains. My work includes NFT marketplaces, DeFi staking platforms, and blockchain-powered voting systems.",
    contact: {
      ctaText: "Want to develop a secure and scalable blockchain application? Whether it's smart contracts, DeFi, or NFT projects, I can bring your vision to life. Let's innovate together in Web3!"
    },
    experience: "blockchain", // Indicates which experience section to show
    services: "blockchain", // Indicates which services section to show
    skills: "blockchain", // Indicates which skills section to show
    testimonials: "blockchain" // Indicates which testimonials section to show
  }
};

// Enhanced page transition for mode switching
function pageTransition(isBlockchainMode, callback) {
  // Add transition class to body
  document.body.classList.add('page-transitioning');
  
  // Fade out all sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('section-fade-out');
  });
  
  // Wait for fade out to complete
  setTimeout(() => {
    // Apply callback (mode change and content update)
    callback();
    
    // Fade in all sections
    sections.forEach(section => {
      section.classList.remove('section-fade-out');
      section.classList.add('section-fade-in');
    });
    
    // Remove transition classes after animation completes
    setTimeout(() => {
      document.body.classList.remove('page-transitioning');
      sections.forEach(section => {
        section.classList.remove('section-fade-in');
      });
    }, 800);
  }, 500);
}

// Update content based on the current mode
function updateContent(isBlockchainMode) {
  const mode = isBlockchainMode ? 'blockchain' : 'web';
  const content = contentData[mode];
  
  // Update projects with fade animation
  updateProjects(content.projects);
  
  // Update about section with slide animation
  updateAboutSection(content.about);
  
  // Update contact section
  updateContactSection(content.contact);
  
  // Update experience section
  updateExperienceSection(content.experience);
  
  // Update services section
  updateServicesSection(content.services);
  
  // Update skills section
  updateSkillsSection(content.skills);
  
  // Update testimonials section
  updateTestimonialsSection(content.testimonials);
}

// Update projects section with animation
function updateProjects(projects) {
  const projectsContainer = document.querySelector('#projects .about-containers');
  
  // Fade out
  projectsContainer.classList.add('content-fade-out');
  
  // Wait for fade out to complete before updating content
  setTimeout(() => {
    // Get all project containers
    const projectElements = document.querySelectorAll('#projects .color-container');
    
    // Update each project
    projectElements.forEach((element, index) => {
      if (index < projects.length) {
        const project = projects[index];
        
        // Update project title
        element.querySelector('.project-title').textContent = project.title;
        
        // Update project image if exists
        const imgElement = element.querySelector('.project-img');
        if (imgElement && project.image) {
          imgElement.src = project.image;
          imgElement.alt = project.title;
        }
        
        // Add description if it doesn't exist, or update existing
        let descElement = element.querySelector('.project-description');
        if (!descElement) {
          descElement = document.createElement('p');
          descElement.className = 'project-description';
          // Insert after project title
          const projectTitle = element.querySelector('.project-title');
          projectTitle.insertAdjacentElement('afterend', descElement);
        }
        descElement.textContent = project.description;
        
        // Update links
        const [githubBtn, demoBtn] = element.querySelectorAll('.project-btn');
        if (githubBtn && project.github) {
          githubBtn.onclick = () => window.open(project.github);
        }
        if (demoBtn && project.demo) {
          demoBtn.onclick = () => window.open(project.demo);
        }
      }
    });
    
    // Fade back in
    projectsContainer.classList.remove('content-fade-out');
    projectsContainer.classList.add('content-fade-in');
    
    // Remove animation class after animation completes
    setTimeout(() => {
      projectsContainer.classList.remove('content-fade-in');
    }, 800);
  }, 500);
}

// Update about section with slide animation
function updateAboutSection(aboutText) {
  const aboutTextContainer = document.querySelector('#about .text-container p');
  
  // Slide out
  aboutTextContainer.classList.add('slide-out');
  
  // Update content after slide out animation
  setTimeout(() => {
    aboutTextContainer.textContent = aboutText;
    
    // Slide in
    aboutTextContainer.classList.remove('slide-out');
    aboutTextContainer.classList.add('slide-in');
    
    // Remove animation class after animation completes
    setTimeout(() => {
      aboutTextContainer.classList.remove('slide-in');
    }, 800);
  }, 500);
}

// Update contact section
function updateContactSection(contactData) {
  // Update CTA text
  const contactCta = document.querySelector('#contact .contact-cta');
  
  if (!contactCta) {
    // Create the CTA paragraph if it doesn't exist
    const contactTitle = document.querySelector('#contact .title');
    const ctaElement = document.createElement('p');
    ctaElement.className = 'contact-cta';
    ctaElement.textContent = contactData.ctaText;
    contactTitle.insertAdjacentElement('afterend', ctaElement);
  } else {
    // Fade out, update, fade in
    contactCta.classList.add('fade-out');
    
    setTimeout(() => {
      contactCta.textContent = contactData.ctaText;
      contactCta.classList.remove('fade-out');
      contactCta.classList.add('fade-in');
      
      setTimeout(() => {
        contactCta.classList.remove('fade-in');
      }, 800);
    }, 500);
  }
}

// Update experience section based on mode
function updateExperienceSection(experienceType) {
  const experienceContainer = document.querySelector('#experience .experience-details-container');
  const webExperience = document.querySelector('#experience .web-experience');
  const blockchainExperience = document.querySelector('#experience .blockchain-experience');
  
  if (!webExperience || !blockchainExperience) {
    // If the containers don't exist with these classes, we need to add them
    setupExperienceSections();
    return updateExperienceSection(experienceType); // Call again after setup
  }
  
  // Add fade-out animation
  experienceContainer.classList.add('content-fade-out');
  
  // Wait for fade-out to complete
  setTimeout(() => {
    // Remove active class from both
    webExperience.classList.remove('active');
    blockchainExperience.classList.remove('active');
    
    // Hide both sections first
    webExperience.style.display = 'none';
    blockchainExperience.style.display = 'none';
    
    // Show the appropriate section
    if (experienceType === 'web') {
      webExperience.style.display = 'block';
      webExperience.classList.add('active');
    } else if (experienceType === 'blockchain') {
      blockchainExperience.style.display = 'block';
      blockchainExperience.classList.add('active');
    }
    
    // Fade back in
    experienceContainer.classList.remove('content-fade-out');
    experienceContainer.classList.add('content-fade-in');
    
    // Remove animation class after animation completes
    setTimeout(() => {
      experienceContainer.classList.remove('content-fade-in');
    }, 800);
  }, 500);
}

// Setup experience sections with proper classes if they don't exist
function setupExperienceSections() {
  const experienceContainer = document.querySelector('#experience .experience-details-container');
  const aboutContainers = document.querySelector('#experience .about-containers');
  
  if (!aboutContainers) return; // Safety check
  
  // Get all details containers in the experience section
  const detailsContainers = aboutContainers.querySelectorAll('.details-container');
  
  if (detailsContainers.length >= 2) {
    // Create web experience container
    const webExperience = document.createElement('div');
    webExperience.className = 'web-experience';
    webExperience.appendChild(detailsContainers[0].cloneNode(true));
    
    // Create blockchain experience container
    const blockchainExperience = document.createElement('div');
    blockchainExperience.className = 'blockchain-experience';
    blockchainExperience.appendChild(detailsContainers[1].cloneNode(true));
    
    // Clear the about-containers
    aboutContainers.innerHTML = '';
    
    // Add the new containers
    aboutContainers.appendChild(webExperience);
    aboutContainers.appendChild(blockchainExperience);
    
    // Initially hide blockchain experience
    blockchainExperience.style.display = 'none';
  }
}

// Update services section
function updateServicesSection(servicesType) {
  const webServices = document.querySelector('.web-services');
  const blockchainServices = document.querySelector('.blockchain-services');
  
  if (!webServices || !blockchainServices) {
    setupServicesSections();
    return;
  }
  
  // Add fade-out animation
  webServices.classList.add('fade-out');
  blockchainServices.classList.add('fade-out');
  
  setTimeout(() => {
    // Hide both services
    webServices.style.display = 'none';
    blockchainServices.style.display = 'none';
    
    // Show the appropriate services based on the type
    if (servicesType === 'web') {
      webServices.style.display = 'flex';
      webServices.classList.add('active');
    } else if (servicesType === 'blockchain') {
      blockchainServices.style.display = 'flex';
      blockchainServices.classList.add('active');
    }
    
    // Add fade-in animation
    webServices.classList.remove('fade-out');
    blockchainServices.classList.remove('fade-out');
    webServices.classList.add('fade-in');
    blockchainServices.classList.add('fade-in');
    
    // Remove animation classes after animation completes
    setTimeout(() => {
      webServices.classList.remove('fade-in');
      blockchainServices.classList.remove('fade-in');
    }, 800);
  }, 500);
}

// Setup services sections if needed
function setupServicesSections() {
  const servicesContainer = document.querySelector('.services-container');
  if (!servicesContainer) return;
  
  const webServices = servicesContainer.querySelector('.web-services');
  const blockchainServices = servicesContainer.querySelector('.blockchain-services');
  
  if (!webServices) {
    const newWebServices = document.createElement('div');
    newWebServices.className = 'web-services';
    servicesContainer.appendChild(newWebServices);
  }
  
  if (!blockchainServices) {
    const newBlockchainServices = document.createElement('div');
    newBlockchainServices.className = 'blockchain-services';
    newBlockchainServices.style.display = 'none';
    servicesContainer.appendChild(newBlockchainServices);
  }
}

// Update skills section
function updateSkillsSection(skillsType) {
  const webSkills = document.querySelector('.web-skills');
  const blockchainSkills = document.querySelector('.blockchain-skills');
  
  if (!webSkills || !blockchainSkills) {
    setupSkillsSections();
    return;
  }
  
  // Add fade-out animation
  webSkills.classList.add('fade-out');
  blockchainSkills.classList.add('fade-out');
  
  setTimeout(() => {
    // Hide both skills
    webSkills.style.display = 'none';
    blockchainSkills.style.display = 'none';
    
    // Show the appropriate skills based on the type
    if (skillsType === 'web') {
      webSkills.style.display = 'flex';
      webSkills.classList.add('active');
    } else if (skillsType === 'blockchain') {
      blockchainSkills.style.display = 'flex';
      blockchainSkills.classList.add('active');
    }
    
    // Add fade-in animation
    webSkills.classList.remove('fade-out');
    blockchainSkills.classList.remove('fade-out');
    webSkills.classList.add('fade-in');
    blockchainSkills.classList.add('fade-in');
    
    // Remove animation classes after animation completes
    setTimeout(() => {
      webSkills.classList.remove('fade-in');
      blockchainSkills.classList.remove('fade-in');
    }, 800);
  }, 500);
}

// Setup skills sections if needed
function setupSkillsSections() {
  const skillsContainer = document.querySelector('.skills-container');
  if (!skillsContainer) return;
  
  const webSkills = skillsContainer.querySelector('.web-skills');
  const blockchainSkills = skillsContainer.querySelector('.blockchain-skills');
  
  if (!webSkills) {
    const newWebSkills = document.createElement('div');
    newWebSkills.className = 'web-skills';
    skillsContainer.appendChild(newWebSkills);
  }
  
  if (!blockchainSkills) {
    const newBlockchainSkills = document.createElement('div');
    newBlockchainSkills.className = 'blockchain-skills';
    newBlockchainSkills.style.display = 'none';
    skillsContainer.appendChild(newBlockchainSkills);
  }
}

// Update testimonials section
function updateTestimonialsSection(testimonialsType) {
  const webTestimonials = document.querySelector('.web-testimonials');
  const blockchainTestimonials = document.querySelector('.blockchain-testimonials');
  
  if (!webTestimonials || !blockchainTestimonials) {
    setupTestimonialsSections();
    return;
  }
  
  // Add fade-out animation
  webTestimonials.classList.add('fade-out');
  blockchainTestimonials.classList.add('fade-out');
  
  setTimeout(() => {
    // Hide both testimonials
    webTestimonials.style.display = 'none';
    blockchainTestimonials.style.display = 'none';
    
    // Show the appropriate testimonials based on the type
    if (testimonialsType === 'web') {
      webTestimonials.style.display = 'flex';
      webTestimonials.classList.add('active');
    } else if (testimonialsType === 'blockchain') {
      blockchainTestimonials.style.display = 'flex';
      blockchainTestimonials.classList.add('active');
    }
    
    // Add fade-in animation
    webTestimonials.classList.remove('fade-out');
    blockchainTestimonials.classList.remove('fade-out');
    webTestimonials.classList.add('fade-in');
    blockchainTestimonials.classList.add('fade-in');
    
    // Remove animation classes after animation completes
    setTimeout(() => {
      webTestimonials.classList.remove('fade-in');
      blockchainTestimonials.classList.remove('fade-in');
    }, 800);
  }, 500);
}

// Setup testimonials sections if needed
function setupTestimonialsSections() {
  const testimonialsContainer = document.querySelector('.testimonials-container');
  if (!testimonialsContainer) return;
  
  const webTestimonials = testimonialsContainer.querySelector('.web-testimonials');
  const blockchainTestimonials = testimonialsContainer.querySelector('.blockchain-testimonials');
  
  if (!webTestimonials) {
    const newWebTestimonials = document.createElement('div');
    newWebTestimonials.className = 'web-testimonials';
    testimonialsContainer.appendChild(newWebTestimonials);
  }
  
  if (!blockchainTestimonials) {
    const newBlockchainTestimonials = document.createElement('div');
    newBlockchainTestimonials.className = 'blockchain-testimonials';
    newBlockchainTestimonials.style.display = 'none';
    testimonialsContainer.appendChild(newBlockchainTestimonials);
  }
}

// Call setup functions on page load
function init() {
  setupExperienceSections();
  setupServicesSections();
  setupSkillsSections();
  setupTestimonialsSections();
}

// Toggle theme between Web Mode and Blockchain Mode
function toggleTheme() {
  // Use enhanced page transition for smoother switching
  pageTransition(
    !document.body.classList.contains("blockchain-mode"), 
    () => {
      // Toggle the blockchain-mode class on body
      document.body.classList.toggle("blockchain-mode");
      
      // Get the toggle buttons
      const desktopToggle = document.getElementById("desktop-theme-toggle");
      const mobileToggle = document.getElementById("mobile-theme-toggle");
      
      // Check if we're in blockchain mode now
      const isBlockchainMode = document.body.classList.contains("blockchain-mode");
      
      // Update button text and icon based on the current mode
      const toggleText = isBlockchainMode ? "Web Mode" : "Blockchain Mode";
      const toggleIcon = isBlockchainMode ? "💻" : "🔄";
      
      // Update desktop toggle
      if (desktopToggle) {
        desktopToggle.querySelector(".toggle-text").textContent = toggleText;
        desktopToggle.querySelector(".toggle-icon").textContent = toggleIcon;
      }
      
      // Update mobile toggle
      if (mobileToggle) {
        mobileToggle.querySelector(".toggle-text").textContent = toggleText;
        mobileToggle.querySelector(".toggle-icon").textContent = toggleIcon;
      }
      
      // Update content based on the mode
      updateContent(isBlockchainMode);
      
      // Save the current theme preference to localStorage
      localStorage.setItem("themeMode", isBlockchainMode ? "blockchain" : "web");
    }
  );
}

// Apply saved theme on page load
document.addEventListener("DOMContentLoaded", function() {
  const savedTheme = localStorage.getItem("themeMode");
  
  if (savedTheme === "blockchain") {
    // If saved theme is blockchain, toggle to blockchain mode
    document.body.classList.add("blockchain-mode");
    
    // Update button text and icon
    const toggleText = "Web Mode";
    const toggleIcon = "💻";
    
    const desktopToggle = document.getElementById("desktop-theme-toggle");
    const mobileToggle = document.getElementById("mobile-theme-toggle");
    
    if (desktopToggle) {
      desktopToggle.querySelector(".toggle-text").textContent = toggleText;
      desktopToggle.querySelector(".toggle-icon").textContent = toggleIcon;
    }
    
    if (mobileToggle) {
      mobileToggle.querySelector(".toggle-text").textContent = toggleText;
      mobileToggle.querySelector(".toggle-icon").textContent = toggleIcon;
    }
  }
  
  // Update initial content based on current mode
  const isBlockchainMode = document.body.classList.contains("blockchain-mode");
  updateContent(isBlockchainMode);
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
  