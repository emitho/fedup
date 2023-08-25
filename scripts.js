document.addEventListener("DOMContentLoaded", function() {
    fetch('http://emilandret.sg-host.com/fedup/wp-json/wp/v2/posts?per_page=100')
        .then(response => response.json())
        .then(posts => {
            const blogPostsDiv = document.getElementById('blogPosts');
            posts.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.innerHTML = `
                    <h2>${post.title.rendered}</h2>
                    <div>${post.content.rendered}</div>
                `;
                blogPostsDiv.appendChild(postDiv);
            });
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
});