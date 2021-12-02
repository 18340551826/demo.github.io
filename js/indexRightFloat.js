(function(){
    var back=document.querySelector(".back");
    document.addEventListener("scroll",function(){
        var top=document.body.scrollTop||document.documentElement.scrollTop;
        if(top>200){
        back.style.display="block";
        }else{
        back.style.display="none";
        }
    }) 
    back.onclick=function(){
        var docScrollTimer=setInterval(function(){
            var top=document.body.scrollTop||document.documentElement.scrollTop;
            if(document.body.scrollTop){
                document.body.scrollTop-=50;
            }else{
                document.documentElement.scrollTop-=50;
            }
            if(top==0){
                clearInterval(docScrollTimer);
            }
        },10)  
    }
    var lis=document.querySelector(".rightFloat")
    .querySelectorAll("li");
    var noneDivs=document.querySelector(".rightFloat").querySelectorAll("div");
    for(var i=1;i<lis.length;i++){
        lis[i].onmouseover=function(){
            this.style.backgroundColor="#FA5757";
            this.style.color="white";
            
        }
        lis[i].onmouseout=function(){
            this.style.backgroundColor="white";
            this.style.color="#FA5757";
        }
    }
    lis[0].onmouseover=function(){
        noneDivs[1].style.display="block";
    }
    lis[0].onmouseout=function(){
        noneDivs[1].style.display="none";
    }
})()