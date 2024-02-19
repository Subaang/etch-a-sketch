const container = document.getElementById("container");
let cells;

let req_area=16;
build(req_area);

function build(req_area){
    container.innerHTML = "";
    for(let i = 0; i < req_area; i++){
        container.innerHTML += '<div class="row">' + `<div class="cell"></div>`.repeat(req_area) + '</div>';
        container.innerHTML += `<div class="linebreak"></div>`;
    }

    cells = Array.from(document.querySelectorAll(".cell"));
    for(let i of cells){
        i.addEventListener("mouseover",function(event){
            if(event.buttons == 1){
                event.target.style.background = "red";
            }
            
        });
    }

}


setArea = document.querySelector("#area");
setArea.onclick = function(){
    while(true){
        req_area = prompt("Enter new area")    
        if(req_area > 32){
            alert("32 is the limit!");
        }
        else{
            break;
        }
    }
    build(req_area);
};


