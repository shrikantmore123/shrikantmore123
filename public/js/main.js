// ============================================
// Navbar Scroll Effect
// ============================================
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// ============================================
// Smooth Scrolling
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Typing Animation
// ============================================
const typingElement = document.querySelector('.typing-animation');
if (typingElement) {
    const text = typingElement.textContent;
    typingElement.textContent = '';
    typingElement.style.borderRight = '2px solid var(--accent-primary)';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Keep cursor blinking
            setInterval(() => {
                typingElement.style.borderRight = 
                    typingElement.style.borderRight === '2px solid var(--accent-primary)' 
                        ? '2px solid transparent' 
                        : '2px solid var(--accent-primary)';
            }, 500);
        }
    };
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);
}

// ============================================
// Scroll Reveal Animation
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ============================================
// Skill Progress Bars Animation
// ============================================
const skillBars = document.querySelectorAll('.skill-progress');

// Initialize all progress bars to 0
skillBars.forEach(bar => {
    // Get target width from inline style (set by EJS template with percentage)
    const initialWidth = bar.style.width;
    if (initialWidth) {
        // Store target width
        bar.setAttribute('data-width', initialWidth);
        // Reset to 0 initially
        bar.style.width = '0%';
    }
});

// Observer for animating progress bars when they come into view
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const targetWidth = progressBar.getAttribute('data-width');
            
            if (targetWidth) {
                // Ensure it starts at 0
                progressBar.style.width = '0%';
                // Force reflow to ensure the reset is applied
                void progressBar.offsetWidth;
                // Animate to target width with smooth transition
                requestAnimationFrame(() => {
                    progressBar.style.width = targetWidth;
                });
            }
            
            skillObserver.unobserve(progressBar);
        }
    });
}, { threshold: 0.2, rootMargin: '0px 0px -100px 0px' });

// Observe all skill bars
skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ============================================
// Skill Card Hover Animation
// ============================================
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    const progressBar = card.querySelector('.skill-progress');
    if (progressBar) {
        // Get the target width from inline style (set by EJS template)
        const targetWidth = progressBar.style.width;
        
        // Store it for hover animation
        if (targetWidth && !progressBar.hasAttribute('data-width')) {
            progressBar.setAttribute('data-width', targetWidth);
        }
        
        // Animate on hover
        card.addEventListener('mouseenter', () => {
            const storedWidth = progressBar.getAttribute('data-width');
            if (storedWidth) {
                // Reset to 0 and animate to target
                progressBar.style.width = '0%';
                // Force reflow to ensure reset is applied
                void progressBar.offsetWidth;
                // Animate to target width
                requestAnimationFrame(() => {
                    progressBar.style.width = storedWidth;
                });
            }
        });
    }
});

// ============================================
// Project Filtering
// ============================================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.classList.remove('hidden');
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                } else {
                    const cardCategory = card.getAttribute('data-category');
                    if (cardCategory === filterValue) {
                        card.classList.remove('hidden');
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    } else {
                        card.classList.add('hidden');
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                    }
                }
            });
        });
    });
}

// ============================================
// Contact Form Handling
// ============================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        try {
            const response = await fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            
            if (data.success) {
                formMessage.textContent = data.message;
                formMessage.className = 'form-message success';
                contactForm.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            } else {
                formMessage.textContent = 'Something went wrong. Please try again.';
                formMessage.className = 'form-message error';
            }
        } catch (error) {
            console.error('Error:', error);
            formMessage.textContent = 'Failed to send message. Please try again later.';
            formMessage.className = 'form-message error';
        }
    });
}

// ============================================
// Active Nav Link Highlighting
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
    let current = '';
    const scrollPosition = window.scrollY + 100; // Offset for navbar height
    
    // Only update for home page sections
    if (window.location.pathname === '/' || window.location.pathname === '') {
        // Check which section is currently in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            // Check if section is in viewport
            if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
                current = sectionId;
            }
        });
        
        // Handle home/hero section (when at top)
        if (window.scrollY < 100) {
            current = 'home';
        }
        
        // Update active state for nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            // Check for home page link
            if (current === 'home' && href === '/') {
                link.classList.add('active');
            }
            // Check for section links (/#about, /#skills, etc.)
            else if (current && current !== 'home') {
                if (href === `/#${current}` || href === `#${current}`) {
                    link.classList.add('active');
                }
            }
        });
    } else {
        // For other pages, highlight based on current path
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === window.location.pathname) {
                link.classList.add('active');
            }
        });
    }
}

// Throttle scroll events for better performance
let ticking = false;
function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateActiveNavLink();
            ticking = false;
        });
        ticking = true;
    }
}

// Update on scroll
window.addEventListener('scroll', onScroll);
// Update on page load
window.addEventListener('load', updateActiveNavLink);
// Update when hash changes (for direct navigation)
window.addEventListener('hashchange', updateActiveNavLink);

// ============================================
// Parallax Effect for Hero Background
// ============================================
const heroBackground = document.querySelector('.hero-background');
if (heroBackground) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
}

// ============================================
// Image Lazy Loading
// ============================================
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
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
