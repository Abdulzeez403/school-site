
//Menu functionality
const menubar = document.querySelector(".MenuIcon");
const menuList = document.querySelector(".MenuItem");
menubar.addEventListener("click",()=>{

 if(menuList.style.display === "none"){
  menuList.style.display="block";
 }else{
  menuList.style.display="none";
 }
})





//Mapping Images into the Schools sect
const data=[
 {
  id: 1,
  date :"OCT 13 2020",
  title: "The Importance of Sport",
   img: "./Images/student_laughing.jpg"
  },
  {
   id: 2,
   date :"JAN 13 2020",
   title: "Adimssion list is out",
    img: "./Images/students.jpg"
   },
   {
    id: 3,
    date :"Dec 13 2020",
    title: "Adimssion list is out",
     img: "./Images/students.jpg"
   },


]

 const mappingImages = () =>{

//let schoolContainer=documemt.querySelector()
const schoolNews= data.map(({img, title,date})=>{
 return`
 <div class="school_new">
 <div>
 <img src=${img} alt="">
<h4>${title}</h4>
</div>

<div class="school_new_date">
<h5>${date}</h5>
</div>
</div>

 `;
}).join("");
let schoolNew = document.querySelector(".school_news_content");
schoolNew.innerHTML= schoolNews;

}
mappingImages();







//Mapping Images into the Schools sect
const StaffImages=[
 {
  id: 1,
  name :"Abdul",
  age: 24,
  qualification: "BSC(English language)",
   img: "./Images/tech-guy.png",
   contact: "08288838499",
   badge: "Teacher"


  },

  {
   id: 2,
   name :"Abdul",
   age: 24,
   qualification: "BSC(English language)",
    img: "./Images/tech-guy.png",
    contact: "08288838499",
    badge: "Teacher"


   },
   {
    id: 3,
    name :"Abdul",
    age: 24,
    qualification: "BSC(English language)",
     img: "./Images/tech-guy.png",
     contact: "08288838499",
     badge: "Teacher"
    }



]

const staffMap = () =>{

 //let schoolContainer=documemt.querySelector()
 const staff= StaffImages.map(({img, age,name, qualification, contact, badge})=>{
  return`
  <div class="staff1">
  <img src=${img} alt="teacherImages">
  <div class="staff_detail">
   <h5>Name:${name}</h5>
   <h5>Age: ${age}</h5>
   <h5>Qualification${qualification}</h5>
   <h5>Contact:${contact}</h5>
  </div>
  <div class="staff_position">
   <h4>${badge}</h4>
  </div>
 </div>
  `;
 }).join("");
 let staffContainer = document.querySelector(".other_staff");
 staffContainer.innerHTML= staff;
 
 }
 staffMap();
 
 







// Home slideshow
let slideIndex = 0;
showSlides();
function showSlides() {

  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
 
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}






let SecondSlideIndex = 1;
slideshowfunc(SecondSlideIndex);

function plusSlider(n) {
 slideshowfunc(SecondSlideIndex += n)

}

function currentSlide(n) {
 slideshowfunc(SecondSlideIndex = n);
}



function slideshowfunc(n) {
  let i;
  let slidess = document.getElementsByClassName("mySlider");
  let dots = document.getElementsByClassName("dots");
  if (n > slidess.length) {SecondSlideIndex = 1}    
  if (n < 1) {SecondSlideIndex = slidess.length}
  for (i = 0; i < slidess.length; i++) {
    slidess[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slidess[SecondSlideIndex-1].style.display = "block";  
  dots[SecondSlideIndex-1].className += " active";
}


/*third SlideShow*/



let thirdSlideIndex = 1;
slideshowmyfunc(thirdSlideIndex);

function plusSlided(n) {
 slideshowmyfunc(thirdSlideIndex += n)

}

function currentSlided(n) {
 slideshowmyfunc(thirdSlideIndex = n);
}



function slideshowmyfunc(n) {
  let i;
  let slider = document.getElementsByClassName("mySliderer");
  let dot = document.getElementsByClassName("dot");
  if (n > slider.length) {thirdSlideIndex = 1}    
  if (n < 1) {thirdSlideIndex = slider.length}
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";  
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  slider[thirdSlideIndex-1].style.display = "block";  
  dot[thirdSlideIndex-1].className += " active";
}

//navigating to the page

function Tabshow(){
const menuList = document.querySelector(".MenuItem");
 const viewBtn = document.querySelectorAll(".viewBtn");
 const container = document.querySelectorAll(".content_container");

 menuList.addEventListener("click",(e)=>{
  const mytarget = e.target.dataset.id;
  console.log(mytarget);
  if(mytarget){
   viewBtn.forEach(btn=>{
    btn.classList.remove("active");
    e.target.classList.add("active");
   });
   container.forEach(content=>{
    content.classList.remove("active");
   });
   const ele = document.getElementById(mytarget);
ele.classList.add("active");
  }
 })
}
Tabshow();







