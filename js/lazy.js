/////////////////////Lazy-loading////////////////////////////////////////////////////////

(function () {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const windowHeight = document.documentElement.clientHeight;
    let lazyImagesPosition = [];

    if(lazyImages.length > 0) {
        lazyImages.forEach( img => {
            if(img.dataset.src) {
                lazyImagesPosition.push(img.getBoundingClientRect().top + scrollY);
                lazyScrollCheck();
            }
        });
    }

    window.addEventListener('scroll', lazyScroll);

    function lazyScroll() {
        if(document.querySelectorAll('img[data-src]').length > 0) {
            lazyScrollCheck(); 
        }

        if(!loadMoreBlock.classList.contains('loading')) {
            loadMore(); 
        }
    }

    function lazyScrollCheck() {
        let imgIndex = lazyImagesPosition.findIndex(
            item => scrollY > item - windowHeight
        );
        if(imgIndex >= 0) {
            if(lazyImages[imgIndex].dataset.src) {
                lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
                lazyImages[imgIndex].removeAttribute('data-src');
            }
            delete lazyImagesPosition[imgIndex];
        }
    }
        
})();