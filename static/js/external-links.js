document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="http"]');
    links.forEach(function(link) {
        var href = link.getAttribute('href');
        if (href && !href.includes('xuxuejie.cn')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});
