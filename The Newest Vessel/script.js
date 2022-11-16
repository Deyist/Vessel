/* Basic Variables*/

let cplast = document.getElementById("cplast")

let counter = document.getElementById("counter")

let counter2 = document.getElementById("counter2")

let settings = document.getElementById ("settings")

let help = document.getElementById ("help")

let quiznumber = 0

let quiznumber2 = 0

let q1 = document.getElementById('q1') 

let q2 = document.getElementById('q2') 

let q3 = document.getElementById('q3') 

//let q4 = document.getElementById('q4') 

let w1 = document.getElementById('w1') 

let w2 = document.getElementById('w2') 

let w3 = document.getElementById('w3')

//let w4 = document.getElementById('w4') 

let fourm = document.getElementById('fourm')


let myAudio = document.getElementById("myAudio")



/* ADD (Not neccesary?) */

let addFriend = document.getElementById("addWheat1")

let addGrandma = document.getElementById("addBarley1")




/* COUNTERS */

let WheatC = document.getElementById("WheatCounter")

let BarleyC = document.getElementById("BarleyCounter")

let IndigoC = document.getElementById("IndigoCounter")

let OatsC = document.getElementById("OatsCounter")

let CornC = document.getElementById("CornCounter")

let TobaccoC = document.getElementById("TobaccoCounter")

let RiceC = document.getElementById("RiceCounter")

let CottonC = document.getElementById("CottonCounter")



let WeakC = document.getElementById("Weakcounter")

let StrongC = document.getElementById("StrongCounter")

let TeenC = document.getElementById("TeenCounter")

let AdultC = document.getElementById("AdultCounter")

let BuffC = document.getElementById("BuffCounter")


let app = document.getElementById("forApp")

/* Number of */
let numWheats = 0

let numBarleys = 0

let numIndigos = 0

let numOats = 0

let numCorn = 0

let numTobaccos = 0

let numRices = 0

let numCotton = 0



let numWeak = 0

let numStrong = 0

let numTeen = 0

let numAdult = 0

let numBuff = 0






/* Interval (Time for idles) */
let intervalID = window.setInterval(WheatHelper, 4000) 

let intervalID2 = window.setInterval(BarleyHelper, 8000) 

let intervalID3 = window.setInterval(IndigoHelper, 6000) 

let intervalID4 = window.setInterval(OatsHelper, 10000) 

let intervalID5 = window.setInterval(CornHelper, 10000) 

let intervalID6 = window.setInterval(TobaccoHelper, 8000) 

let intervalID7 = window.setInterval(RiceHelper, 1500) 

let intervalID8 = window.setInterval(CottonHelper, 5000) 


//new
let quizbank =  new Map;
//photosynthesis
quizbank.set(0, 'There is nothing here sorry, this question broke, just hit the top one to avoid getting anything wrong.')
quizbank.set(1, 'When was the steamship invented?')
quizbank.set(2,"What was the name of the first steamship?");
quizbank.set(3,"Who invented the steamship?");
quizbank.set(4,"A steam ship is a...");
quizbank.set(5,"Steamboats propelled themselves using...");
quizbank.set(6,"The first steamboat was built in");
quizbank.set(7,"Robert Fulton's advancements in steamboat tech gave him the title...");
quizbank.set(8,"What caused a demise in steamboat popularity...");
quizbank.set(9,"The oldest paddle streamer has been in operation since?");
quizbank.set(10,"How many times has the previously mentioned paddle streamer sunk?");




let answerbank = new Map;
//A Q1
answerbank.set(1, "1807")
answerbank.set(2, "1834")
answerbank.set(3, "1810")

//C Q2
answerbank.set(4, "Whismur")
answerbank.set(5, "Titanic")
answerbank.set(6, "Clermont")

//B Q3
answerbank.set(7, "Eli Whitney")
answerbank.set(8, "Robert Fulton")
answerbank.set(9, "John H. Hall")

//A Q4
answerbank.set(10, "Marine Vehicle")
answerbank.set(11, "Land Vehicle")
answerbank.set(12, "Aerial Vehicle")

//C Q5
answerbank.set(13, "5 kg of Charcoal")
answerbank.set(14, "Vex motors")
answerbank.set(15, "Paddlewheels or propellers")

//C Q6 
answerbank.set(16, "Albany")
answerbank.set(17, "New York City")
answerbank.set(18, "On the Mississipi River")

//C Q7
answerbank.set(19, "Founder of the Steam Engine")
answerbank.set(20, "Father of Marine Technology")
answerbank.set(21, "Father of Steam Navigation")

//A Q8
answerbank.set(22, "The use of railroads")
answerbank.set(23, "The invention of aircrafts")
answerbank.set(24, "Caravanserai")

//C Q9
answerbank.set(25, "1932")
answerbank.set(26, "1850")
answerbank.set(27, "1856")

//C Q10
answerbank.set(28, "0 times")
answerbank.set(29, "12 times")
answerbank.set(30, "2 times")


let array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
let randum = array1[Math.floor(Math.random() * 29.9)]; 

/*Functions*/

//new

off2.addEventListener('click', offfunc)

function offfunc(){
   counter2.textContent = "off (Will say not a number unless turned back on)"
   
   while(counter2.textContent == off){
      document.getElementById("six").style.display = "none"
      console.log(quiznumber)
      console.log(quiznumber2)
      
   }
  
}
on2.addEventListener('click', onfunc)

function onfunc(){
   
   setTimeout(function(){ document.getElementById(counter2).textContent = "on" }, 25000);
   counter2.textContent = 0
   quiznumber = 0
   quiznumber2 = 0
   console.log(quiznumber)
   console.log(quiznumber2)
   
}


sub.addEventListener('click', subback)


function subback(j){
   let wrong = counter.textContent/3
   w1.style.display = 'none'
   w2.style.display = 'none'
   w3.style.display = 'none'
   //w4.style.display = 'none'
   q1.style.display = 'none'
   q2.style.display = 'none'
   q3.style.display = 'none'
   //q4.style.display = 'none'
   document.getElementById('p1').style.display = "none"
   document.getElementById('p2').style.display = "none"
   document.getElementById('p3').style.display = "none"
   //document.getElementById('p4').style.display = "none"
   document.getElementById('sub').style.display = 'none'
   if(q1.value == 'Correct' && q1.checked){ 
      document.getElementById('x3').style.display = "block"
      document.getElementById('correct').style.display = 'block'
      document.getElementById('cplast').style.display = 'block'
   }else if(q2.value == 'Correct' && q2.checked){ 
      document.getElementById('x3').style.display = "block"
      document.getElementById('correct').style.display = 'block'
      document.getElementById('cplast').style.display = 'block'
   }else if(q3.value == 'Correct' && q3.checked){ 
      document.getElementById('x3').style.display = "block"
      document.getElementById('correct').style.display = 'block'
      document.getElementById('cplast').style.display = 'block'
   }else{
      document.getElementById('x3').style.display = "block"

      document.getElementById('cplast').style.display = 'block'
      counter.textContent -= Math.floor(wrong)
      
      document.getElementById('incorrect').style.display = 'block'
      
     
      
   }
}
less.addEventListener('click', lessfunc)

function lessfunc(){
   quiznumber-= 3
   if (quiznumber<= 0){
      quiznumber= 0
   }
   quiznumber2-= 1
   if (quiznumber2<= 0){
      quiznumber2= 0
   }
}
function workpls(j){ 
//This is the part you mess with in order to make the questions appear more/less frequently
   if(j % 50 == 0 && j > 1 ){
      



      if (quiznumber2 >10 && quiznumber2 < 1000){
         quiznumber = 0
         quiznumber2 = 0
        
        // document.getElementById('p4').textContent = answerbank.get(1)
       }
     
   quiznumber++
   quiznumber2++
   document.getElementById('cplast').style.display = 'none'
      document.getElementById('x3').style.display = "none"
      
      document.getElementById('incorrect').style.display = "none"
      document.getElementById('correct').style.display = "none"
      document.getElementById('p1').style.display = "block"
      document.getElementById('p2').style.display = "block"
      document.getElementById('p3').style.display = "block"
      //document.getElementById('p4').style.display = "block"
      document.getElementById('q1').style.display = "block"
      document.getElementById('q2').style.display = "block"
      document.getElementById('q3').style.display = "block"
      //document.getElementById('q4').style.display = "block"
      document.getElementById('w1').style.display = "block"
      document.getElementById('w2').style.display = "block"
      document.getElementById('w3').style.display = "block"
      //document.getElementById('w4').style.display = "block"
      
      document.getElementById('headSet3').textContent = quizbank.get(quiznumber2)
      document.getElementById('p1').textContent = answerbank.get(quiznumber)
      quiznumber++
      document.getElementById('p2').textContent = answerbank.get(quiznumber)
      quiznumber++
      document.getElementById('p3').textContent = answerbank.get(quiznumber)
     
      //document.getElementById('p4').textContent = answerbank.get(quiznumber)
      
      
     
      
      document.getElementById('six').style.display = 'block'
      q1.style.display = 'block'
      q2.style.display = 'block'
      q3.style.display = 'block'
      //q4.style.display = 'block'




      document.getElementById('sub').style.display = 'block'
      
      
      
      if (quiznumber2 == 2){
         document.getElementById('q1').value = "Incorrect"
         document.getElementById('q3').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)
         
      }else if (quiznumber2 == 3){
         document.getElementById('q3').value = "Incorrect"
         document.getElementById('q2').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)

         

      }else if (quiznumber2 == 1 || quiznumber == 0){
        
         document.getElementById('q2').value = "Incorrect"
         document.getElementById('q3').value = "Incorrect"
        
         document.getElementById('q1').value = "Correct"

         

      }else  if (quiznumber2 == 4){
         document.getElementById('q2').value = "Incorrect"
         document.getElementById('q1').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 5){
         document.getElementById('q1').value = "Incorrect"
         document.getElementById('q3').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 6){
         document.getElementById('q3').value = "Incorrect"
         document.getElementById('q2').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 7){
         document.getElementById('q2').value = "Incorrect"
         document.getElementById('q3').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 8){
         document.getElementById('q3').value = "Incorrect"
         document.getElementById('q1').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 9){
         document.getElementById('q1').value = "Incorrect"
         document.getElementById('q3').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 10){
         document.getElementById('q3').value = "Incorrect"
         document.getElementById('q3').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)
         
      }

      
      
   
   

  
  
   //no more new

   //var ss1 = quizbank.get(randum)
  // console.log(ss1)}
   
   
 } 
}


cplast.addEventListener('click', add)
cplast.addEventListener('click', workpls)

function add(){
   i = parseInt(counter.textContent)
   j = parseInt(counter2.textContent)
   n = parseInt(WeakC.textContent) 
   o = parseInt(StrongC.textContent)
   m = parseInt(TeenC.textContent)
   f = parseInt(AdultC.textContent)
   h = parseInt(BuffC.textContent)
   counter.textContent = i+ 1 + n + o * 8 + m * 32 + f * 150 + h * 1750
   counter2.textContent = j+ 1
   workpls(j + 1)
   
} 

function show_image(src, width, height, alt) {
   var img = document.createElement("img");
   img.src = src;
   img.width = width;
   img.height = height;
   img.alt = alt;
  
   // set the position
   img.style.position = 'absolute';
   
   
   img.style.top =  document.getElementById("forApp").clientHeight * Math.random() +"px";
   
   img.style.left = document.getElementById("forApp").clientWidth * Math.random() + 'px';
 
   document.body.appendChild(img);
   
   setTimeout(function(){ document.body.removeChild(img); }, 1000); 
 }
 document.getElementById('cplast').addEventListener('click', () =>
   show_image("images/box.png", 50, 50, 'cplast')

  
      
   

 );











function Wheat() {
   price = numWheats * 20 + 10 
   if (counter.textContent >= price){
      numWheats++
      counter.textContent -= price
      WheatC.textContent = numWheats 
      
   }
}



function WheatHelper() {
   n = numWheats
   c = counter.textContent
   c = parseInt(c)
   c += n
   counter.textContent = c
   
}
function Barley() {
   price = numBarleys * 50 + 400
   if (counter.textContent >= price){
      numBarleys++
      counter.textContent -= price
      BarleyC.textContent = numBarleys
   }
}



function BarleyHelper() {
   n = numBarleys
   c = counter.textContent
   c = parseInt(c)
   c += n * 20
   counter.textContent = c
}



function Indigo() {
   price = numIndigos * 200 + 2000
   if (counter.textContent >= price){
      numIndigos++
      counter.textContent -= price
      IndigoC.textContent = numIndigos
   }
}



function IndigoHelper() {
   n = numIndigos
   c = counter.textContent
   c = parseInt(c)
   c += n * 100
   counter.textContent = c

}



function Oats() {
   price = numOats * 2500 + 15000
   if (counter.textContent >= price){
      numOats++
      counter.textContent -= price
      OatsC.textContent = numOats
   }
}



function OatsHelper() {
   n = numOats
   c = counter.textContent
   c = parseInt(c)
   c += n * 550
   counter.textContent = c
}




function Corn() {
   price = numCorn * 30000 + 120000
   if (counter.textContent >= price){
      numCorn++
      counter.textContent -= price
      CornC.textContent = numCorn
   }
}



function CornHelper() {
   n = numCorn
   c = counter.textContent
   c = parseInt(c)
   c += n * 3500
   counter.textContent = c

}



function Tobacco() {
   price = numTobaccos * 1200000 + 1200000
   if (counter.textContent >= price){
      numTobaccos++
      counter.textContent -= price
      TobaccoC.textContent = numTobaccos
      
   }
}



function TobaccoHelper() {
   n = numTobaccos
   c = counter.textContent
   c = parseInt(c)
   c += n * 25000
   counter.textContent = c

}



function Rice() {
   price = numRices * 10000000 + 15000000
   if (counter.textContent >= price){
      numRices++
      counter.textContent -= price
      RiceC.textContent = numRices
   }
}



function RiceHelper() {
   n = numRices
   c = counter.textContent
   c = parseInt(c)
   c += n * 120000
   counter.textContent = c

}



function Cotton() {
   price = numCotton * 150000000 + 300000000
   if (counter.textContent >= price){
      numCotton++
      counter.textContent -= price
      CottonC.textContent = numCotton
   }
}



function CottonHelper() {
   n = numCotton
   c = counter.textContent
   c = parseInt(c)
   c += n * 10000000
   counter.textContent = c
   
}






   






/* PER CLICK */

function Weakf() {
price = numWeak * 200 + 200
   if (counter.textContent >= price){
      numWeak++
      counter.textContent -= price
      WeakC.textContent = numWeak 
     
     
   }
}



function Strong(){
   price = numStrong * 400 + 800
   if (counter.textContent >= price){
      numStrong++
      counter.textContent -= price
      StrongC.textContent = numStrong
   }
     
}




function Teenfunc(){
   price = numTeen * 3500 + 8000
   if (counter.textContent >= price){
      numTeen++
      counter.textContent -= price
      TeenC.textContent = numTeen
   }
     
}




function Adultfunc(){
   price = numAdult * 25000 + 50000
   if (counter.textContent >= price){
      numAdult++
      counter.textContent -= price
      AdultC.textContent = numAdult
   }
     
}





function Bufffunc(){
   price = numBuff* 1000000 + 1000000
   if (counter.textContent >= price){
      numBuff++
      counter.textContent -= price
      BuffC.textContent = numBuff
   }
     
}


function SetOpacity( imageid, opacity ) {
   var s= document.getElementById(imageid).style;
   s.opacity = ( opacity / 100 );
   s.MozOpacity = ( opacity / 100 );
   s.KhtmlOpacity = ( opacity / 100 );
   s.filter = 'alpha(opacity=' + opacity + ')';
}
SetOpacity('mainplast', 95);











