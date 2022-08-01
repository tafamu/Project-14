const cells=document.querySelectorAll(".cell");
const game9=document.querySelector(".game9");

var oyun_clk=0;

function prepare(){
    for(var a=0;a<cells.length;a++){
        cells[a].innerText=" ";
        cells[a].addEventListener("click",function(){
            if(oyun_clk%2===0){
                this.innerText="O";
                oyun_clk++;
            }
            else{
                this.innerText="X";
                oyun_clk++;
            }
        });

        cells[a].addEventListener("click",function(){
            this.disabled= true;
        })
    }
}


// 0   1   2
// 3   4   5
// 6   7   8
function kontrol(){
    console.log("boş string bile kazandı kabul ediyor o yüzden şimdilik bırakıyorum düşünmem lazım yarın sabah uyandığımda hesap makinesi yapmaya çalışacağım")
}


window.addEventListener("load",prepare);
game9.addEventListener("click",kontrol);
