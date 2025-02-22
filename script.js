// function openBottomSheet(sheetNumber) {
//     // document.getElementById("bottomSheet").style.bottom = "0";
//     document.getElementById("sheetNumber" + sheetNumber).style.bottom = "0"; 
//     // document.getElementById("sheetNumber" + sheetNumber).classList.add("active");
// }

// function closeBottomSheet(sheetNumber) {
//     document.getElementById("sheetNumber" + sheetNumber).style.bottom = "-100%";
//     // document.getElementById("sheet" + sheetNumber).classList.remove("active");
// }



// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("item3");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   slides[slideIndex-1].style.display = "block";  
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("item3");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.visibility = "hidden";
    slides[i].style.opacity = "0";
    slides[i].style.position = "absolute"; /* Prevents shifting */
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }  

  slides[slideIndex - 1].style.visibility = "visible";
  slides[slideIndex - 1].style.opacity = "1";
  slides[slideIndex - 1].style.position = "relative"; 

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
