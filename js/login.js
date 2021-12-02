var search=location.search.split("?")[1];
var inps = document.querySelectorAll("input");
var thisHref=location.href;
inps[0].onfocus = function () {
    this.previousElementSibling.children[0].src = "./images/loginUser2.jpg"
}
inps[1].onfocus = function () {
    this.previousElementSibling.children[0].src = "./images/password2.jpg"
}
inps[0].onblur = function () {
    this.previousElementSibling.children[0].src = "./images/loginUser1.jpg"
}
inps[1].onblur = function () {
    this.previousElementSibling.children[0].src = "./images/password1.jpg"
}
var loginBtn = document.querySelector("button");
inps[2].onclick = function () {
    if (this.checked) {
        loginBtn.disabled = false;
        loginBtn.style.backgroundColor = "#f03a3c"
    } else {
        loginBtn.disabled = true;
        loginBtn.style.backgroundColor = "gray";
    }
}

var freePost=document.querySelector(".freePost");
if(search){
    freePost.innerHTML=`<a href="./post.html?${search}"> 免费注册有惊喜</a>
    <img src="./images/free_right.png" alt="">`
}
//点击登录按钮  
loginBtn.onclick=function(){
    //获取账号密码
    var name1=inps[0].value;
    var pass1=inps[1].value;
    PromiseAjax({
        url:'./php/login.php',
        data:`name1=${name1}&pass1=${pass1}`,
    }).then(function(dt){
        //返回1则跳转并且？后边拼接登录账号
        if(dt==1){

            if ((location.href).indexOf("id") != -1) {
                var search2=(location.search).split("?")[1]+"?"+(location.search).split("?")[2]
                var search1=search2.replace("undefined",name1);
                location.href=search1;
            }else{
                location.href=`${search}?name1=${name1}`;
            }            
        }else{
            alert("密码输入错误");
            location.href=thisHref;
        }
    })

    
}