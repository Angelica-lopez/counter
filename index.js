let count = 0;
const counter = document.querySelector(".js-counter");
const decrease = document.querySelectorAll(".content__buttons-item");

decrease.forEach(function(button) {
    button.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('js-decrease')) {
            count--;
        }else if(styles.contains('js-increase')) {
            count++;
        }else {
            count = 0;
        }
        if(count < 0) {
            counter.style.color= "red";
        }
        if(count > 0) {
            counter.style.color= "green";
        }
        if(count === 0) {
            counter.style.color= "rgb(58, 58, 58)";
        }
        counter.textContent = count;
    })
})