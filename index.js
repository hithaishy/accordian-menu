(() => {
    document.addEventListener("DOMContentLoaded", () => {
        let body = document.getElementById('body');
        body.addEventListener('click', (event) => {             //adding event listener once the DOM is loaded
            if (event.target && event.target.nodeName === 'BUTTON') {       //Listening to all click events on td
                let content = event.target.nextElementSibling;
                event.target.classList.toggle('is-open');
                if (content.style.maxHeight) {
                    //that means the accordion is open so close
                    content.style.maxHeight = null;
                } else {
                    //open the accordion
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            }
        });
    });
})();