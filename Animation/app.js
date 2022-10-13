const success = document.querySelector(".control-success");
const warning = document.querySelector(".control-warning");
const error = document.querySelector(".control-error");
const toastList = document.querySelector(".toasts");

function createToast() {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = ` <i class="bx bxs-error-circle"></i>
<div class="toast-mess">This is warning message!</div>
<div class="toast-countdown"></div>`;
  toastList.append(toast);

  setTimeout(() => {
    toast.style.animation = "slide_hide 2s ease forwards";
  }, 2000);
}

success.addEventListener("click", createToast);
