document.addEventListener('DOMContentLoaded', function() {
    var progressBar = document.createElement('div');
    progressBar.className = 'reading-progress-bar';
    document.body.appendChild(progressBar);

    function updateProgress() {
        var windowHeight = window.innerHeight;
        var documentHeight = document.documentElement.scrollHeight - windowHeight;
        var scrollTop = window.scrollY || document.documentElement.scrollTop;
        var progress = (scrollTop / documentHeight) * 100;
        progressBar.style.width = progress + '%';
    }

    window.addEventListener('scroll', updateProgress);
    updateProgress();
});
