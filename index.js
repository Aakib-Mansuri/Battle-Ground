//three ships
// let counter = 0; let flag = 1;
        
// function taget() {
//     let att;
//     let target1 = document.getElementById('Target-1').value;
//     let target2 = document.getElementById('Target-2').value;
//     let target3 = document.getElementById('Target-3').value;
//     if (isNaN(target1) || isNaN(target2) || isNaN(target3))
//         prompt("Enter the value");

//     else
//     {
//         for(let i = 1; i <= 16; i++)
//         {
//            att = document.getElementById(i);
//            att.setAttribute("src"," ");
//         }
//         fun(target1, target2, target3);
//     }
// }
// function fun(target1, target2, target3) {
//     let telem1; let telem2; let telem3;
//     let elem1; let elem2; let elem3;
//     let n1 = 1;
//     let n2 = 2;
//     let n3 = 4;

//     elem1 = document.getElementById(n1);
//     elem1.setAttribute("src", "images/footer.jpg")

//     elem2 = document.getElementById(n3);
//     elem2.setAttribute("src", "images/footer.jpg")

//     elem3 = document.getElementById(n2);
//     elem3.setAttribute("src", "images/footer.jpg")

//     if (target1 == n1 || target1 == n2 || target1 == n3) {
//         if (target1 == n1) {
//             elem1.setAttribute("src", " ")
//             n1 = -1;
//         }
//         else if (target1 == n2) {
//             elem2.setAttribute("src", " ")
//             n2 = -1;
//         }

//         else {
//             elem3.setAttribute("src", " ")
//             n3 = -1;
//         }
//     }

//     else {
//         telem1 = document.getElementById(target1);
//         telem1.setAttribute("src", "images/slider 1.jpg")
//     }

//     if (target2 == n1 || target2 == n2 || target3 == n3) {
//         if (target2 == n1) {
//             elem1.setAttribute("src", " ")
//             n1 = -1;
//         }

//         else if (target2 == n2) {
//             elem2.setAttribute("src", " ")
//             n2 = -1;
//         }

//         else {
//             elem3.setAttribute("src", " ")
//             n3 = -1;
//         }

//     }

//     else {
//         telem2 = document.getElementById(target2);
//         telem2.setAttribute("src", "images/slider 1.jpg")
//     }

//     if (target3 == n1 || target3 == n2 || target3 == n3) {
//         if (target3 == n1) {
//             elem1.setAttribute("src", " ")
//             n1 = -1;
//         }

//         else if (target3 == n2) {
//             elem2.setAttribute("src", " ")
//             n2 = -1;
//         }

//         else {
//             elem3.setAttribute("src", " ")
//             n3 = -1;
//         }

//     }

//     else {
//         telem3 = document.getElementById(target3);
//         telem3.setAttribute("src", "images/slider 1.jpg")
//     }

//     if (n1 == -1 && n2 == -1 && n3 == -1) {
//         let a = document.getElementById("Mbody");
//         a.innerHTML = "Congratulations";
//     }

//     else {
//         alert("Try Again");
//     }

//     counter++;
// }

//one ship
var counter = 0;var target1;var n1; 
var telem1; var elem1;

function score() 
{
    if(counter != 0)
    {
       telem1.setAttribute("src"," ");
       elem1.setAttribute("src"," ");
    }

    counter += 1;
    let celem = document.getElementById('score');
    celem.innerHTML = `Guesses : ${counter}`; 
    
    fun();
}

function fun()
{
   n1 = Math.floor(((Math.random())*16)+1);  
   target1 = document.getElementById('Target-1').value;
   
  if(target1 == n1)
   {
    let a = document.getElementById("Mbody");
    a.innerHTML = `<div class="cong"><h1>Congratulations....</h1></div>`;
   }

  else
   {
    telem1 = document.getElementById(target1);
    telem1.setAttribute("src","images/missed.jpg");
   
    elem1 = document.getElementById(n1);
    elem1.setAttribute("src","images/ship.png");
   }     
}