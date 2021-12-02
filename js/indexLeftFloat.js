var leftFloat=document.querySelector(".leftFloat");
var divs=leftFloat.children;
//浏览器滚动函数 设置每个小div显示条件与大div何时随浏览器滚动
var pageScroll=function(){  
    var top=document.body.scrollTop||document.documentElement.scrollTop;
    if(top>=865){
        leftFloat.style.position="fixed";
        leftFloat.style.top="230px"
    }
    if(top<865){
        leftFloat.style.position="absolute";
        leftFloat.style.top="1095px"
    }
    if(top>3675){
        leftFloat.style.position="absolute";
        leftFloat.style.top="3885px"
    }
    if(top>=845&&top<1298){
        divs[0].firstElementChild.firstElementChild.style.backgroundColor="#F0423F";
        divs[0].firstElementChild.firstElementChild.style.color="white";
    }else{
        divs[0].firstElementChild.firstElementChild.style.backgroundColor="#FFF6F6";
        divs[0].firstElementChild.firstElementChild.style.color="#F0423F";
    }
    if(top>=1298&&top<1834){
        divs[1].firstElementChild.firstElementChild.style.backgroundColor="#F0423F";
        divs[1].firstElementChild.firstElementChild.style.color="white";
    }else{
        divs[1].firstElementChild.firstElementChild.style.backgroundColor="#FFF6F6";
        divs[1].firstElementChild.firstElementChild.style.color="#F0423F";
    }
    if(top>=1834&&top<2544){
        divs[2].firstElementChild.firstElementChild.style.backgroundColor="#F0423F";
        divs[2].firstElementChild.firstElementChild.style.color="white";
    }else{
        divs[2].firstElementChild.firstElementChild.style.backgroundColor="#FFF6F6";
        divs[2].firstElementChild.firstElementChild.style.color="#F0423F";
    }
    if(top>=2544&&top<3393){
        divs[3].firstElementChild.firstElementChild.style.backgroundColor="#F0423F";
        divs[3].firstElementChild.firstElementChild.style.color="white";
    }else{
        divs[3].firstElementChild.firstElementChild.style.backgroundColor="#FFF6F6";
        divs[3].firstElementChild.firstElementChild.style.color="#F0423F";
    }
    if(top>=3393&&top<4160){
        divs[4].firstElementChild.firstElementChild.style.backgroundColor="#F0423F";
        divs[4].firstElementChild.firstElementChild.style.color="white";
    }else{
        divs[4].firstElementChild.firstElementChild.style.backgroundColor="#FFF6F6";
        divs[4].firstElementChild.firstElementChild.style.color="#F0423F";
    }
}
document.addEventListener("scroll",pageScroll)   
//每个小盒子设置鼠标滑过事件
for(let i=0;i<divs.length;i++){
    // divs[i].firstElementChild.firstElementChild.style.backgroundColor="#FFF6F6";
    // divs[i].firstElementChild.firstElementChild.style.color="#F0423F";
    divs[i].firstElementChild.firstElementChild.onmouseover=function(){
        this.style.backgroundColor="#F0423F";
        this.style.color="white";
    }
    divs[i].firstElementChild.firstElementChild.onmouseout=function(){
        this.style.backgroundColor="#FFF6F6";
        this.style.color="#F0423F";
        pageScroll();
    }
}
