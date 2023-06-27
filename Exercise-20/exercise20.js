// // **************************** //
// // Exercise 20
// // **************************** //

const triangleFills =
  `<div class="added triangle top fill"></div>
  <div class="added triangle left fill"></div>
  <div class="added triangle right fill"></div>
  <div class="added triangle middle"></div>`;

const triangleInitial=
  `<div class="triangle">
          <div class="triangle top fill"></div>
          <div class="triangle left fill"></div>
          <div class="triangle right fill"></div>
          <div id=initial class="triangle middle zero"></div>
    </div>`;

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}    

function divisions(x){
    let noChildrenDivs = [];  
    if (x==0){
        let element = document.getElementById("initial");
        element.classList.add("zero");
    }else{
        let element = document.getElementById("initial");
        element.classList.remove('zero');
    }
    if (x>0){
        x--;
        for (let i=0; i<x; i++){
            noChildrenDivs = [...document.querySelectorAll(".fill:empty")] 
            noChildrenDivs.map((triangle) => {
                triangle.innerHTML = triangleFills;
            });
        };
    }
};

function setDivisions() { 
    let parent= document.getElementById("container");
    removeAllChildNodes(parent);
    parent.innerHTML = triangleInitial;
    let numberDivisions= document.getElementById("divisions").value;
    divisions(numberDivisions);
 }

 divisions(0);