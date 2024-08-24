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


//function to add div dynamically
function adddiv(){
  let divone = document.createElement("div") //creating new div

  divone.id = "newdiv" //giving new div id 
  divone.innerHTML = `<div class="image-select">
                <h2>Amazon Gadget Store</h2>
                <div class="image-nested-image">
                    <div class="image-nested4">
                        <img src="images/image0.jpg">
                         <p>Smartphones</p>
                    </div>
                    <div class="imagenested5p">
                            <div class="image-nested5">
                                <img src="images/image0.1.jpg" id="move1">
                                <p>Tablets</p> 
                            </div>
                            <div class="image-nested5">
                                <img src="images/image0.2.jpg">
                                <p>Laptops</p>
                            </div>
                            <div class="image-nested5">
                                 <img src="images/image0.3.jpg" id="move2">
                                <p>TVs</p>
                            </div>
                    </div>
                    <p  id="see-more2">See more from Amazon Gadgets</p>
                </div>
            </div>
            <div class="image-select space" >
                <h2>Shop deals in fashion</h2>
                <div class="image-nested-imagea">
                    <div class="image-nesteda imagea">
                        <img src="images/image4.jpg">
                         <p class="margin2">Jeans under $50</p>
                    </div>
                    <div class="image-nestedb imageb">
                        <img src="images/image4.1.jpg">
                         <p class="margin2">Tops under 25</p> 
                    </div>
                    <div class="image-nesteda imagea">
                        <img src="images/image4.2.jpg">
                         <p class="margin2">Dresses under $39</p>
                     </div>
                    <div class="image-nestedb imageb">
                         <img src="images/image4.3.jpg">
                        <p class="margin2">Shoes under $50</p>
                    </div>
                      <p id="see-more">See all deals</p>
                </div>
            </div>
            <div class="nextdivone" >
                    <h2>Gaming merchandise</h2>
                    <div class="image-nested-image nextdiv1">
                        <div class="image-nested-image">
                            <div class="image-nested1">
                                <img src="images/nextimage3.1.jpg">
                                <p>Apparels</p>
                            </div>
                            <div class="image-nested2">
                                <img  src="images/nextimage3.2.jpg"  >
                                <p>Hats</p> 
                            </div>
                            <div class="image-nested1">
                                <img src="images/nextimage3.3.jpg" >
                                <p>Action figures</p>
                                <p id="see-more">See more</p>
                            </div>
                            <div class="image-nested2">
                                <img src="images/nextimage3.4.jpg" >
                                <p>Mug</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            
            `
   let container = document.querySelector(".image-select-container")

   container.after(divone)

  
}

//function to check width and call adding div function

function checkWidthadd(){
  let width = 1230 // specify needed width

  if(window.innerWidth<=width){
    // check wether the div is added or not
    console.log("in");
    
      if(!document.querySelector("#newdiv")){
        adddiv()
      }
  }else{
    console.log("out");
    
    let removediv = document.querySelector("#newdiv")

    if(removediv)
      removediv.remove()
  }

 
}

window.addEventListener("resize",checkWidthadd)

checkWidthadd()