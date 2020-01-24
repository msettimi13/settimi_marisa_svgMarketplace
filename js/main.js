(() => {
// for ex. python = print('whatever');
  console.log('hello from JS!');

// find the elements in the document
  let toggleButton = document.querySelector(".switch-text"),
      myHeading = document.querySelector('h1'),
      svgImg = document.querySelector("#badge"),
      allSVGs = document.querySelectorAll(".svg");

  svgImg.addEventListener("click", logSVG);
  svgImg2.addEventListener("click", logSVG);

  allSVGs.forEach(item => item.addEventListener("click", logSVG));

 document.querySelector('h1').textContent = "What is up? I am script";
})();
