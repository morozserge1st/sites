window.onload = () => {
    const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
        animationTime = 300,
        framesCount = 20;

    anchors.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();

            let elem = item.getAttribute('href');
            let y = document.querySelector(elem).getBoundingClientRect().top + window.pageYOffset;

            let scrolled = setInterval(() => {
                let scrollBy = y / framesCount;
                if(scrollBy > window.pageYOffset - y && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                    window.scrollBy(0, scrollBy);
                } else {
                    window.scrollTo(0, y);
                    clearInterval(scrolled);
                }
            }, animationTime / framesCount);
        });
    });
}
