const radios = document.querySelectorAll('.box input[type="radio"]');
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    boxes.forEach((b) => {
      b.classList.remove("selected");
      const options = b.querySelector(".options");
      if (options) {
        options.style.display = "none";
      }
    });

    // Select the clicked box
    box.classList.add("selected");
    const radio = box.querySelector('input[type="radio"]');
    if (radio) {
      radio.checked = true;
    }

    const options = box.querySelector(".options");
    if (options) {
      options.style.display = "block";
    }
  });
});
