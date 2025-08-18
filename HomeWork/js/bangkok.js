function showHistory(title, content) {
    const historyTitle = document.getElementById('history-title');
    const historyContent = document.getElementById('history-content');
    
    if (historyTitle && historyContent) {
        historyTitle.style.opacity = '0';
        historyContent.style.opacity = '0';
        historyTitle.textContent = title;
        historyContent.textContent = content;
        
        setTimeout(() => {
            historyTitle.style.transition = 'opacity 0.3s ease';
            historyContent.style.transition = 'opacity 0.3s ease';
            historyTitle.style.opacity = '1';
            historyContent.style.opacity = '1';
        }, 50);
    } else {
        console.error('無法搵到 history-title 或 history-content 元素');
    }
}

// 導航欄摺疊功能
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});