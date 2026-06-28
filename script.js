console.log("JavaScript Loaded");

const accordion = document.querySelectorAll(".accordion-item");

accordion.forEach(item => {

    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {

        item.classList.toggle("active");

        const content = item.querySelector(".accordion-content");

        const icon = header.querySelector("span");

        if(item.classList.contains("active")){

            content.style.maxHeight = content.scrollHeight + "px";

            icon.textContent = "−";

        }

        else{

            content.style.maxHeight = null;

            icon.textContent = "+";

        }

    });

});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        item.classList.toggle("active");

        const answer = item.querySelector(".faq-answer");
        const icon = button.querySelector("span");

        if(item.classList.contains("active")){

            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = "−";

        }else{

            answer.style.maxHeight = null;
            icon.textContent = "+";

        }

    });

});

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}