//banner
(function () {
    var banner = document.querySelector(".banner");
    var ul = banner.querySelector("ul");
    var lis = ul.querySelectorAll("li");
    var dsq2
    var i = 0;
    var divs = banner.querySelector(".round").querySelectorAll("div");
    function bannerMove() {
        dsq2 = setInterval(move, 4000)
    }
    function move() {
        if (i == 5) {
            i = 0;
            ul.style.marginLeft = 0 + "px"
        }
        i++;
        borderShow(i)
        var dsq = setInterval(function () {
            var start = parseInt(window.getComputedStyle(ul).marginLeft);
            var end = -i * lis[0].offsetWidth;
            if (Math.abs(end) - Math.abs(start) <= 30) {
                ul.style.marginLeft = end + "px";
                clearInterval(dsq);
            } else {
                ul.style.marginLeft = (start - 40) + "px"
            }
        }, 10);
    }
    bannerMove();
    banner.onmouseover = function () {
        clearInterval(dsq2);
    }
    banner.onmouseout = function () {
        dsq2 = setInterval(move, 4000)
    }
    function borderShow(i) {
        for (let a = 0; a < divs.length; a++) {
            if (i == 5) {
                i = 0;
            }
            divs[a].style.border = "3px solid white"
        }
        divs[i].style.border = "3px solid red"
    }
    for (let j = 0; j < divs.length; j++) {
        divs[j].onclick = function () {
            i = j;
            ul.style.marginLeft = -j * (lis[j].offsetWidth) + "px"; borderShow(i);
        }
    }
})();
//打开主页查询是否登录
(function () {
    var loginLi = document.querySelectorAll("li")[1];
    var postli = document.querySelectorAll("li")[2];
    var search = location.search.split("=")[1];
    var floatBoxRight=document.querySelector(".floatBoxRight");
    var loginBox=floatBoxRight.querySelectorAll("div")[0];
    var nameBox=floatBoxRight.querySelectorAll("div")[2];
    var sweater=document.querySelector(".sweater");
    //如果登录根据地址栏id渲染页面中元素
        if(search){

            loginLi.innerHTML=search;

            postli.innerHTML=`<a href="http://localhost/stage_2/hznzcn/homePage.html">退出登录</a>`;

            loginBox.innerHTML=`<a href="http://localhost/stage_2/hznzcn/homePage.html"><button>退出登录</button></a>`;

            var aLink=document.createElement("a");
            aLink.innerHTML=`<a href="./list.html?name1=${search}">卫衣</a>`

            sweater.appendChild(aLink);
            
            nameBox.innerHTML=`欢迎  |  ${search}`
        }else{
            postli.innerHTML=`<a href="./post.html?http://localhost/stage_2/hznzcn/homePage.html">免费注册</a>`
            var aLink=document.createElement("a");
            aLink.innerHTML=`<a href="./list.html?">卫衣</a>`
            sweater.appendChild(aLink);
        } 
})();
//floatBox 悬浮显示列表
var floatBox = document.querySelector(".floatBox");
var floatBoxR = document.querySelector(".floatBoxR");
floatBox.onmouseover = function () {
    floatBoxR.style.display = "block";
}
floatBox.onmouseout = function () {
    floatBoxR.style.display = "none";
}





// main
// goodShop
var goodStopBottom = document.getElementsByClassName("goodStopBottom")[0];
var lis = goodStopBottom.getElementsByTagName("li");
var ul = goodStopBottom.querySelector("ul");
var rightBtn = document.querySelector(".rightBtn");
var leftBtn = document.querySelector(".leftBtn");
var liIndex = 0;
var dsq2;
var dsq1;
function autoMove() {
    liIndex++
    //判断当前imgIndex是否大于6
    if (liIndex > 3) {
        liIndex = 1
        //设置上一张图片的滚动距离
        ul.style.left = -(liIndex - 1) * lis[0].offsetWidth * 5;
    }
    move()
}
dsq1 = setInterval(autoMove, 3000)
//给box盒子绑定鼠标移入移出事件
goodStopBottom.onmouseover = function () {
    clearInterval(dsq1)
    rightBtn.style.display = "block"
    leftBtn.style.display = "block"
}
goodStopBottom.onmouseout = function () {
    dsq1 = setInterval(autoMove, 3000)
    rightBtn.style.display = "none"
    leftBtn.style.display = "none"
}
//给右边按钮绑定点击事件
rightBtn.onclick = function () {
    autoMove()
}
//给左边按钮绑定点击事件
leftBtn.onclick = function () {
    liIndex--
    if (liIndex < 0) {
        //下一次要显示的图片下标
        liIndex = 2
        //上一张图片的滚动距离
        ul.style.left = -(liIndex + 1) * lis[0].offsetWidth * 5 + "px";
    }
    move()
}
//运动函数
function move() {
    clearInterval(dsq2)
    dsq2 = setInterval(function () {
        //获取开始位置
        var start = parseInt(ul.style.left) || 0;
        var end = -liIndex * (lis[0].offsetWidth + 20) * 5;
        //判断移动方向
        if (start < end) {
            var speed = 10
        } else {
            var speed = -10
        }
        //判断剩余的运动量是否小于等于步长
        if (Math.abs(end - start) <= Math.abs(speed)) {
            clearInterval(dsq2);
            //直接走到终点
            ul.style.left = end + "px";
        } else {
            ul.style.left = start + speed + "px";
        }
    }, 5)
}

document.onvisibilitychange = function () {
    //判断当前浏览器是否最小化
    var bool = document.hidden
    if (bool) {
        clearInterval(dsq1)
    } else {
        dsq1 = setInterval(autoMove, 3000)
    }
}
// tagOption男装新品
var tagOption = document.querySelector(".tagOption");
var tagOptionLis = tagOption.querySelectorAll("li");
var shopOptionLis = document.querySelectorAll(".shopOption");
//选项卡
tagOption.addEventListener("click", function (e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.nodeName == "LI") {
        for (let i = 0; i < tagOptionLis.length; i++) {
            tagOptionLis[i].index = i
            tagOptionLis[i].className = "";
            shopOptionLis[i].style.display = "none";
        }
        target.className = "show";
        shopOptionLis[target.index].style.display = "flex";
    }
})
var hotTagOption = document.querySelector(".hotTagOption");
var hotTagOptionLis = hotTagOption.querySelectorAll("li");
var hotShops = document.querySelector(".hotShops");
var hotShopsLis = hotShops.querySelectorAll("ul");
hotTagOption.addEventListener("mouseover", function (e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.nodeName == "LI") {
        for (let i = 0; i < hotTagOptionLis.length; i++) {
            hotTagOptionLis[i].index = i
            hotTagOptionLis[i].className = "";
            hotShopsLis[i].style.display = "none";
        }
        target.className = "show";
        hotShopsLis[target.index].style.display = "flex";
    }
})

// rapid 闪电发货 中flexBox鼠标滑入滑出移动;
var IMGParents = document.querySelectorAll(".IMGParent");
for (let i = 0; i < IMGParents.length; i++) {
    IMGParents[i].dsq = "";
    IMGParents[i].onmouseover = function () {
        flexBoxMove(this, 0);
    }
    IMGParents[i].onmouseout = function () {
        flexBoxMove(this, -30);
    }
}
//移动函数
function flexBoxMove(ele, end) {
    clearInterval(ele.dsq);
    ele.dsq = setInterval(function () {
        var flexBox = ele.lastElementChild;
        var start = parseInt(window.getComputedStyle(flexBox).bottom);
        if (end > start) {
            var step = 1;
        } else {
            var step = -1;
        }
        if (start == end) {
            clearInterval(ele.dsq);
        } else {
            flexBox.style.bottom = (start + step) + "px";
        }
    }, 10)

}
//mill 厂家直销滑入显示底部边框
var mill = document.querySelector(".mill");
var millLis = mill.querySelectorAll("li");
for (let i = 0; i < millLis.length; i++) {
    millLis[i].onmouseover = function () {
        this.style.borderBottom = "2px solid #D10C0C"
        this.style.paddingBottom = "13px"
    }
    millLis[i].onmouseout = function () {
        this.style.borderBottom = "";
        this.style.paddingBottom = "15px"
    }
}
//footerTop 左右按钮显示与消失
// var recShops = document.querySelectorAll(".recShop");
// for (let i = 0; i < recShops.length; i++) {
//     recShops[i].onmouseover = function () {
//         console.log(1);

//         this.children[2].style.display = "inline";
//         this.children[3].style.display = "inline";
//     }
//     recShops[i].onmouseout = function () {
//         this.children[2].style.display = "none";
//         this.children[3].style.display = "none";
//     }
// }

//判断是否登录未登录不让进入购物车
$(".goodsCar").on("click",function(){
    var search = location.search.split("=")[1];
    if(search&&search!="undefined"){
        location.href=`http://localhost/stage_2/hznzcn/car.html?name1=${search}`;
    }else{
        alert("请登录之后再进入购物车");
    }
    
})