
const h1=document.querySelector("h1");

h1.addEventListener("mouseover", ()=>{
    h1.style.color="blue";
    h1.innerText="The mouse is here!"
})

h1.addEventListener("mouseout",()=>{
    h1.style.color="coral";
    h1.innerText="The mouse is gone!"
})

h1.addEventListener("resize",()=>{
    h1.style.color="blueviolet";
    h1.innerText="You just resized!"
})


// function click(){
//     const originalColor=title.style.color;
//     let newColor;
//     if(originalColor==="blue"){
//         newColor="tomato"
//     }else{
//         newColor="blue"
//     }
//     title.style.color=newColor;
// }

// function here(){
//     title.style.color="blue";
//     title.innerText="The mouse is here!"
// }

// function gone(){
//     title.style.color="coral";
//     title.innerText="The mouse is gone!"
// }

// function resized(){
//     title.style.color="blueviolet"
//     title.innerText="You just resized!"
// }

// function copy(){
//     alert("copier!");
// }

// function offline(){
//     alert("SOS no WIFI");
// }

// function online(){
//     alert("All good");
// }

// title.addEventListener("click", click);

// title.addEventListener("mouseover", here);
// title.addEventListener("mouseout", gone);
// // resize: 브라우저 창 사이즈에 변화가 있을 때!
// window.addEventListener("resize",resized);
// // copy: 복사하기 할 때!
// window.addEventListener("copy", copy);

// //와이파이 해제, 연결
// window.addEventListener("offline",offline);
// window.addEventListener("online", online);