let num=document.getElementById("num");

let likeNum=Number(num.innerText);

function plus(){
    likeNum++;
    num.innerText=likeNum;
}

function minus(){
    if(likeNum>0){
        likeNum--;
        num.innerText=likeNum;
    }
}

function reset(){
    likeNum=0;
    num.innerText=likeNum;
}