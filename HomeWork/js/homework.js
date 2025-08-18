// 共用JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // 漢堡包菜單功能
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  menuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    menuBtn.innerHTML = navLinks.classList.contains('active') 
      ? '<i class="fas fa-times"></i>' 
      : '<i class="fas fa-bars"></i>';
  });
  
  // 滾動時導航欄效果
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // 平滑滾動
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // 如果是移動設備，關閉菜單
        if (window.innerWidth <= 850) {
          navLinks.classList.remove('active');
          menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
      }
    });
  });
});