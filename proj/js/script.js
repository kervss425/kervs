document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container-2");
    const galleries = document.querySelectorAll(".gallery");
    let isMouseDown = false;
    let startX, scrollLeft;

    container.addEventListener("mousedown", (e) => {
        isMouseDown = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        e.preventDefault(); 
    });

    container.addEventListener("mouseleave", () => {
        isMouseDown = false;
    });

    container.addEventListener("mouseup", () => {
        isMouseDown = false;
    });

    container.addEventListener("mousemove", (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 0.5; 
        container.scrollLeft = scrollLeft - walk;

     
    });

    galleries.forEach(gallery => {
        gallery.addEventListener("mouseenter", () => {
            gallery.style.transform = "scale(1.2)";
        });

        gallery.addEventListener("mouseleave", () => {
            gallery.style.transform = "scale(1)";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
              
                }, 600); // Adjust the delay time in milliseconds (e.g., 300ms)
            }
        });
    });

    // Specify the elements you want to observe
    const elementsToObserve = document.querySelectorAll('.hidden');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible-left");
              
                }, 600); // Adjust the delay time in milliseconds (e.g., 300ms)
            }
        });
    });

    // Specify the elements you want to observe
    const elementsToObserve = document.querySelectorAll('.hidden-left');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible-right");
              
                }, 600); // Adjust the delay time in milliseconds (e.g., 300ms)
            }
        });
    });

    // Specify the elements you want to observe
    const elementsToObserve = document.querySelectorAll('.hidden-right');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible-top");
              
                }, 600); // Adjust the delay time in milliseconds (e.g., 300ms)
            }
        });
    });

    // Specify the elements you want to observe
    const elementsToObserve = document.querySelectorAll('.hidden-top');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible-bottom");
              
                }, 600); // Adjust the delay time in milliseconds (e.g., 300ms)
            }
        });
    });

    // Specify the elements you want to observe
    const elementsToObserve = document.querySelectorAll('.hidden-bottom');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible-active");
              
                }, 600); // Adjust the delay time in milliseconds (e.g., 300ms)
            }
        });
    });

    // Specify the elements you want to observe
    const elementsToObserve = document.querySelectorAll('.hidden-active');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});




