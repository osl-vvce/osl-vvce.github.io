// function to open the content of the tabs 
function page(pageName,event){
    var i,tabContent,tablink;
        tabContent=document.getElementsByClassName("tabContent");
        for(i=0; i<tabContent.length ; i++){
            tabContent[i].style.display="none";
        }
        tablink=document.getElementsByClassName("tablink");
        for(i=0;i<tablink.length;i++){
           tablink[i].className=tablink[i].className.replace("active"," ");
        }
        document.getElementById(pageName).style.display="block";
        event.currentTarget.className+="active";
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
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
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
        document.write(" <link rel='stylesheet' href='style.css' type='text/css'>");
    }
