function footerTopCar(className) {
    var eles = document.getElementsByClassName(className);
    for (let i = 0; i < eles.length; i++) {
        eles[i].index = 0;
        move(eles[i], 1000 * (i + 1));
        //鼠标进入关闭轮播并显示左右按钮
        eles[i].onmouseover = function () {
            clearInterval(eles[i].dsq)
            eles[i].children[2].style.display = "inline";
            eles[i].children[3].style.display = "inline";
        }
        //鼠标移出开始轮播并隐藏左右按钮
        eles[i].onmouseout = function () {
            move(eles[i], 1000 * (i + 1));
            eles[i].children[2].style.display = "none";
            eles[i].children[3].style.display = "none";
        }
        //右按钮点击
        eles[i].children[3].onclick = function () {
            var ul = eles[i].querySelector("ul");
            var lis = ul.querySelectorAll("li");
            if (eles[i].index == 11) {
                eles[i].index = 0
                ul.style.marginLeft = 0 + "px"
            }
            eles[i].index++;
            eles[i].dsq2 = setInterval(function () {
                var ulMargin = parseInt(window.getComputedStyle(ul).marginLeft);
                if (ulMargin == eles[i].index * -(lis[0].offsetWidth + 20)) {
                    clearInterval(eles[i].dsq2);
                } else {
                    ul.style.marginLeft = (ulMargin - 2) + "px"
                }
            }, 10)
        }
        //左按钮点击
        eles[i].children[2].onclick = function () {
            var ul = eles[i].querySelector("ul");
            var lis = ul.querySelectorAll("li");
            if (eles[i].index == 0) {
                eles[i].index = 11
                ul.style.marginLeft = -(11 * (lis[0].offsetWidth + 20)) + "px"
            }
            eles[i].index--;
            eles[i].dsq2 = setInterval(function () {
                var ulMargin = parseInt(window.getComputedStyle(ul).marginLeft);
                if (ulMargin == eles[i].index * -(lis[0].offsetWidth + 20)) {
                    clearInterval(eles[i].dsq2);
                } else {
                    ul.style.marginLeft = (ulMargin + 2) + "px"
                }
            }, 10)
        }
    }
    //轮播函数
    function move(ele, time) {
        var ul = ele.querySelector("ul");
        var lis = ul.querySelectorAll("li");
        clearInterval(ele.dsq);
        ele.dsq = setInterval(function () {
            if (ele.index == 11) {
                ele.index = 0
                ul.style.marginLeft = 0 + "px"
            }
            ele.index++;
            ele.dsq2 = setInterval(function () {
                var ulMargin = parseInt(window.getComputedStyle(ul).marginLeft);
                if (ulMargin == ele.index * -(lis[0].offsetWidth + 20)) {
                    clearInterval(ele.dsq2);
                } else {
                    ul.style.marginLeft = (ulMargin - 2) + "px"
                }
            }, 10)
        }, time);
    }
//浏览器最小化  停止/开始轮播
    document.onvisibilitychange = function () {
        //判断当前浏览器是否最小化
        var bool = document.hidden
        if (bool) {
            for (let i = 0; i < eles.length; i++) {
                clearInterval(eles[i].dsq);
            }
        } else {
            for (let i = 0; i < eles.length; i++) {
                move(eles[i], 1000 * (i + 1));
            }
        }
    }
}
//footerTop 轮播
footerTopCar("recShop");
    