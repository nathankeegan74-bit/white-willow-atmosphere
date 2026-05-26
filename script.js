const buttons = document.querySelectorAll('.mode-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {

    buttons.forEach(btn => {
      btn.style.opacity = "0.7";
    });

    button.style.opacity = "1";

    alert(button.innerText + " Mode Activated");

  });
});
