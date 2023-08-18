let templateTriangleFills = document.querySelector('#templateTriangleFills').content;
let templateTriangleInitial = document.querySelector('#templateTriangleInitial').content;
   
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
                let fragmentFills = document.createDocumentFragment(); 
                let clone=templateTriangleFills.cloneNode(true);
                fragmentFills.appendChild(clone);
                triangle.appendChild(fragmentFills);
            });
        };
    }
};

function setDivisions() { 
    let fragmentInitial = document.createDocumentFragment();  
    let clone=templateTriangleInitial.cloneNode(true);
    fragmentInitial.appendChild(clone);
    let parent= document.getElementById("container");
    removeAllChildNodes(parent);
    parent.appendChild(fragmentInitial);
    let numberDivisions= document.getElementById("divisions").value;
    divisions(numberDivisions);
 }

 divisions(0);