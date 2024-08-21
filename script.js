function searchArticles() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const articles = document.querySelectorAll('article');
    
    articles.forEach(article => {
        const title = article.querySelector('h2').textContent.toLowerCase();
        const content = article.querySelector('p').textContent.toLowerCase();

        if (title.includes(input) || content.includes(input)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}
