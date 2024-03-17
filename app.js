let con=document.querySelectorAll(".con");
let computer=document.querySelectorAll(".computer");
let triangle=document.querySelector(".triangle")
let user = document.querySelector(".user")
let machine=document.querySelector(".machine")
let winModal=document.querySelector(".win-modal")
let winner=document.querySelector(".winner");
let play=document.querySelector(".play")
const alert_box = document.querySelector('.alertbox')
const cross_ = document.querySelector('.cross')
const ruleshow_btn = document.querySelector('#rule')
let random=Math.floor(Math.random()*3);

let score=JSON.parse(localStorage.getItem("sc"))
let scoreEle=document.getElementById("score")

let machines=JSON.parse(localStorage.getItem("scr"))
let machinescor=document.getElementById("machinescore")

let count=0
let county=0

// if(score==score){
//     scoreEle.innerText=score;
// }else if(machines==machines){
//     machinescor.innerText=machines;
// }else{
//     console.log("non - score")
// }

if(score==score){
    scoreEle.innerText=score;
}else if(machines==machines){
    machinescor.innerText=machines;
}else{
    console.log("non - score")
}

// if(machines){
//     machinescor.innerText=machines;
// }

cross_.onclick=()=>
{
    alert_box.style.display='none'
}

ruleshow_btn.onclick=()=>
{
    alert_box.style.display='block'
}

con.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        user.style.opacity="1";
        triangle.style.display="none"
        con.forEach(item => {
            item.style.display="none"
        });
        element.style.display="block";
        element.classList.add("show")
        setTimeout(()=>{
            machine.style.opacity="1";
            setTimeout(()=>{
             computer[random].style.display="block";
             computer[random].classList.add("rightsid");
             console.log(computer[random])
            },1000);
            setTimeout(()=>{
                if(random==index){
                    winModal.style.display="grid"
                    winner.innerHTML="Match Draw";
                }else if(index==0 && random==2 || index==1 && random==0 || index==2 && random==1){
                    winModal.style.display="grid"
                    winner.innerText="You Win"
                    count=score;
                    count++;
                    scoreEle.innerText=count;
                    localStorage.setItem("sc",JSON.stringify(count))
                    // next page when win to be create
                }else{
                    winModal.style.display="grid"
                    winner.innerText="You Lose"
                    county=machines;
                    county++;
                    machinescor.innerText=county;
                    localStorage.setItem("scr",JSON.stringify(county))
                }
             },1500)
        },500)
    })
});

play.addEventListener("click",()=>{
    window.location.reload();
})

