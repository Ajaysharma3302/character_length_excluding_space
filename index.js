let input = document.getElementsByTagName("input")[0];

let button = document.getElementsByTagName("button")[0];

let result = document.getElementsByTagName("p")[0];

button.addEventListener("click", function () {
  let inputValue = input.value;
  let charCount = 0;

  for (let i = 0; i < inputValue.length; i++) {
    if (inputValue[i] !== " ") {
      charCount++;
    }
  }
  result.textContent = `charcter length (excluding space): ${charCount}`;
});

