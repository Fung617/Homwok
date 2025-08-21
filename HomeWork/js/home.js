document.addEventListener('DOMContentLoaded', function() {
    // 漢堡包菜單功能
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (!menuBtn || !navLinks) {
        console.error('Menu button or nav links not found!');
        return;
    }

    menuBtn.addEventListener('click', function() {
        const wasActive = navLinks.classList.contains('active');
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('active');
        console.log('Toggled menu, active:', !wasActive); // Debug
    });
    
    // 滾動時導航欄效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
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
                
                if (window.innerWidth <= 850) {
                    navLinks.classList.remove('active');
                    menuBtn.classList.remove('active');
                }
            }
        });
    });
});