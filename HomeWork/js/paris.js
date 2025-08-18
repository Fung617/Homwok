document.addEventListener('DOMContentLoaded', function() {
    // 顯示歷史介紹
    function showHistory(title, content) {
        const titleElement = document.getElementById('history-title');
        const contentElement = document.getElementById('history-content');
        const historyBox = document.getElementById('history-info');
        
        if (titleElement && contentElement && historyBox) {
            titleElement.textContent = title;
            contentElement.textContent = content;
            historyBox.style.animation = 'fadeIn 0.5s ease-in-out';
            setTimeout(() => {
                historyBox.style.animation = '';
            }, 500);
        }
    }

    // 移動端菜單切換
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.classList.toggle('active');
        }
    }

    // 更新年份
    function updateYear() {
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

    // 動態設置活躍導航鏈接
    function setActiveLink() {
        const navLinks = document.querySelectorAll('.nav-links a');
        const currentPath = window.location.pathname.toLowerCase();
        navLinks.forEach(link => {
            const href = link.getAttribute('href').toLowerCase();
            link.parentElement.classList.remove('active');
            if (currentPath.includes(href) && href !== 'index.html') {
                link.parentElement.classList.add('active');
            } else if (currentPath === '/' || currentPath.includes('index.html')) {
                if (href === 'index.html') {
                    link.parentElement.classList.add('active');
                }
            }
        });
    }

    // 初始化
    function init() {
        updateYear();
        setActiveLink();
        const menuBtn = document.querySelector('.menu-btn');
        if (menuBtn) {
            menuBtn.addEventListener('click', toggleMenu);
        }
    }

    init();

    // 暴露 showHistory 給全局（供 HTML onclick 使用）
    window.showHistory = showHistory;
});