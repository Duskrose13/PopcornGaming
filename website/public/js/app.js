(() => {
  const buttons = document.querySelectorAll("[data-steam-login]");
  const toast = document.getElementById("toast");
  let timer;

  function showPlaceholder() {
    if (!toast) return;

    toast.classList.add("visible");

    clearTimeout(timer);
    timer = setTimeout(() => {
      toast.classList.remove("visible");
    }, 4200);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", showPlaceholder);
  });
})();