const bgc=document.getElementById("canvas");
const btn=document.getElementById("button");
function getColor(){
    let val="0123456789ABCDEF";
    let clr="#";
    for(let i=0;i<6;i++){
        clr=clr+val[Math.floor(Math.random()*16)];
    }
    return clr;
}
btn.addEventListener("click",()=>{
    let clrValue=getColor();
    bgc.style.backgroundColor=clrValue;
})