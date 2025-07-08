document.addEventListener('DOMContentLoaded', function() {
  // القائمة المتحركة للأجهزة المحمولة
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('show');
    });
  }

  // زر العودة لأعلى الصفحة
  const toTopButton = document.getElementById('toTop');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      toTopButton.classList.add('show');
    } else {
      toTopButton.classList.remove('show');
    }
  });
  
  toTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // الأسئلة الشائعة
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      this.classList.toggle('active');
      const answer = this.nextElementSibling;
      
      if (this.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = 0;
      }
    });
  });

  // تحميل الصور عند الظهور
  const lazyLoad = () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => {
      observer.observe(img);
    });
  };
  
  lazyLoad();
});