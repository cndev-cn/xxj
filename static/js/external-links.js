document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="http"]');
    links.forEach(function(link) {
        var href = link.getAttribute('href');
        if (href && !href.includes('blog.phpha.com')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});
