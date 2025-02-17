// function openBottomSheet(sheetNumber) {
//     // document.getElementById("bottomSheet").style.bottom = "0";
//     document.getElementById("sheetNumber" + sheetNumber).style.bottom = "0"; 
//     // document.getElementById("sheetNumber" + sheetNumber).classList.add("active");
// }

// function closeBottomSheet(sheetNumber) {
//     document.getElementById("sheetNumber" + sheetNumber).style.bottom = "-100%";
//     // document.getElementById("sheet" + sheetNumber).classList.remove("active");
// }



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("main-img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}