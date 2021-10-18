const btnPrevious = document.querySelector(".btn--left");
const btnNext = document.querySelector(".btn--right");

const photoJohn = document.querySelector(".photo-2");
const photoTanya = document.querySelector(".photo-1");

const commentJohn = document.querySelector(".comment-2");
const commentTanya = document.querySelector(".comment-1");

//////////////////////////////////////////////////////////////////////////////////////////
let counterPhoto = 0;
let counterComment = 0;

function changeSlide() {
  counterPhoto++;
  if (counterPhoto % 2) {
    if (document.querySelector("main").getBoundingClientRect().width === 375) {
      photoJohn.style.transform = "translateX(-30rem)";
    } else photoJohn.style.transform = "translateX(-54rem)";
  } else if (counterPhoto % 2 === 0) {
    photoJohn.style.transform = "translateX(0rem)";
  }
}

function changeComment() {
  counterComment++;
  if (counterComment % 2) {
    commentJohn.style.transform = "translateY(0rem)";
    commentTanya.style.transform = "translateY(30rem)";
  } else if (counterComment % 2 === 0) {
    commentJohn.style.transform = "translateY(-30rem)";
    commentTanya.style.transform = "translateY(0rem)";
  }
}

function magic() {
  changeSlide();
  changeComment();
}
//////////////////////////////////////////////////////////////////////////////////////////

btnPrevious.addEventListener("click", () => {
  magic();
});

btnNext.addEventListener("click", () => {
  magic();
});
