// Load header and footer components
let componentsLoaded = false;

async function loadComponents() {
  if (componentsLoaded) return;
  
  try {
    // Load header
    const headerResponse = await fetch('header.html');
    if (headerResponse.ok) {
      const headerHTML = await headerResponse.text();
      // Insert header after opening body tag
      document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }

    // Load footer
    const footerResponse = await fetch('footer.html');
    if (footerResponse.ok) {
      const footerHTML = await footerResponse.text();
      // Insert footer before closing body tag
      document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
    
    componentsLoaded = true;
  } catch (error) {
    console.error('Error loading components:', error);
  }
}

// Initialize all features
async function initialize() {
  await loadComponents();
  
  // Initialize dropdowns
  initDropdowns();
  
  // Initialize smooth scroll
  initSmoothScroll();
  
  // Initialize home scroll
  initHomeScroll();
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}

// Smooth scroll for navigation links with enhanced effects
function initSmoothScroll() {
  // Use event delegation to handle dynamically loaded navigation
  document.addEventListener('click', function(e) {
    // Find the closest anchor tag
    const link = e.target.closest('a[href*="#"]');
    
    if (!link) return;
    
    const href = link.getAttribute('href');
    
    // Only handle internal links (same page anchors)
    if (!href.includes('#') || href.startsWith('http') || href.startsWith('//')) {
      return;
    }
    
    const linkUrl = new URL(link.href, window.location.href);
    const targetId = linkUrl.hash.slice(1);
    
    // Skip if it's just "#" or empty
    if (!targetId) return;
    
    // Let the browser navigate when the requested section is on another page.
    // Product/detail pages do not contain the homepage section IDs.
    if (linkUrl.pathname !== window.location.pathname) return;

    e.preventDefault();
    
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Add highlight effect to target section using CSS class
      targetElement.classList.add('scroll-highlight');
      
      // Remove highlight effect after animation completes
      setTimeout(() => {
        targetElement.classList.remove('scroll-highlight');
      }, 2000);
    }
  });
}

// Handle home link scroll to top
function initHomeScroll() {
  const homeLink = document.querySelector('a[href="#home"], a[href="index.html#home"]');
  if (homeLink) {
    homeLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Custom smooth scroll function with easing
function smoothScrollTo(startPosition, endPosition, duration) {
  const startTime = performance.now();
  const distance = endPosition - startPosition;
  
  // Easing function (ease-in-out)
  function easeInOutCubic(t) {
    return t < 0.5 
      ? 4 * t * t * t 
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
  
  function animation(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);
    
    const currentPosition = startPosition + (distance * easedProgress);
    window.scrollTo(0, currentPosition);
    
    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }
  
  requestAnimationFrame(animation);
}
