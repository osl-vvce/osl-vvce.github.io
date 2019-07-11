// function for typing effect
var i = 0;
var txt = 'Hello';
var speed = 70;
let delay = 15;
var backspace = false;
var mytext = setInterval(typeWriter , 100);
function typeWriter() {
  document.getElementById("demo").innerHTML = txt.substr(0, i);

  if (i > txt.length + delay) backspace = true;
  if (i == -1) backspace = false;
  backspace ? i-- : i++;
}
// function to open the content of the tabs 
function page(pageName){
    var i,tabContent;
        tabContent=document.getElementsByClassName("tabContent");
        for(i=0; i<tabContent.length ; i++){
            tabContent[i].style.display="none";
        }
        document.getElementById(pageName).style.display="block";
    }   
    document.getElementById("defaultOpen").click();

    // Function to navigate testimonials  
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("testimonials__slide");
    var dots = document.getElementsByClassName("dot");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    }
 
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } 
    
     //Enables Dark mode
    var time = new Date().getHours();
    if(time >= 18 && time <= 24 || time >= 0 && time <= 6){
         document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
    }
    else{
        document.write(" <link rel='stylesheet' href='night.css' type='text/css'>");
    }
