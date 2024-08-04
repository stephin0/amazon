let btnleft = document.getElementById("btn-left")
let btnright = document.getElementById("btn-right")
let images = document.querySelectorAll(".hero-images")

let startslide = 0;
let endslide = 700;
let end = 0;

btnleft.addEventListener("click",nextbtn)
btnright.addEventListener("click",prevbtn)

function nextbtn(){
    if(startslide<end){
      startslide = startslide +100;
    }
    
      images.forEach(element => {
        element.style.transform = `translate(${startslide}%)`;
      });
}

function prevbtn(){
    if(startslide>-endslide)
      startslide = startslide - 100;
  
    images.forEach(element => {
      element.style.transform = `translate(${startslide}%)`;
    });

}

// automatic slide

function automaticslide(){
if(startslide>-endslide){
  prevbtn()
}else{
  startslide= 100;
}
  
}
setInterval(automaticslide,7000);

// language shower

let button = document.querySelector(".language");
let dig = document.querySelector(".dig");

button.addEventListener("mouseover",()=>{
  dig.classList.add("active");
})
button.addEventListener("mouseout",()=>{
  dig.classList.remove("active");
})
dig.addEventListener("mouseover",()=>{
  dig.classList.add("active");
})
dig.addEventListener("mouseout",()=>{
  dig.classList.remove("active");
})

// side bar

let menubtn = document.querySelector(".menubar");
let slidebar = document.querySelector(".slide-bar-container");
let closebtn = document.querySelector("#side-bar-close");


menubtn.addEventListener("click",()=>{
  slidebar.classList.add("active-sidebar");
})
closebtn.addEventListener("click",()=>{
  slidebar.classList.remove("active-sidebar");
})

///////// imagesliders////////

let buttonright = document.querySelector("#buttonright");
let buttonleft = document.querySelector("#buttonleft");

let buttonright1 = document.querySelector("#buttonright1");
let buttonleft1 = document.querySelector("#buttonleft1");

let buttonright2 = document.querySelector("#buttonright2");
let buttonleft2 = document.querySelector("#buttonleft2");

let buttonright3 = document.querySelector("#buttonright3");
let buttonleft3 = document.querySelector("#buttonleft3");

// imagelist acces
let imagelistd = document.querySelector(".books-heading");
let imageliste = document.querySelector(".movies-pictures-container");
let imagelistf = document.querySelector(".games-pictures-container");
let imagelistg = document.querySelector(".baby-gifts");


// books
buttonright.addEventListener("click",()=>{  
     imagelistd.scrollBy(400,0);
})
buttonleft.addEventListener("click",()=>{  
  imagelistd.scrollBy(-400,0);
})
// movies
buttonright1.addEventListener("click",()=>{  
     imageliste.scrollBy(400,0);
})
buttonleft1.addEventListener("click",()=>{  
  imageliste.scrollBy(-400,0);
})
// games
buttonright2.addEventListener("click",()=>{  
  imagelistf.scrollBy(400,0);
})
buttonleft2.addEventListener("click",()=>{  
imagelistf.scrollBy(-400,0);
})
//
buttonright3.addEventListener("click",()=>{  
  imagelistg.scrollBy(400,0);
})
buttonleft3.addEventListener("click",()=>{  
imagelistg.scrollBy(-400,0);
})


let accountslist = document.querySelector(".accounts-list");
let underacc = document.querySelector(".under-accounts");

accountslist.addEventListener("mouseover",()=>{
  underacc.classList.add("active-underacc");
})
accountslist.addEventListener("mouseout",()=>{
  underacc.classList.remove("active-underacc");
})

