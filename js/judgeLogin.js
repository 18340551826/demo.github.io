(function () {
    var loginLi = document.querySelectorAll("li")[1];
    var postli = document.querySelectorAll("li")[2];
    var search = location.search.split("=")[1];
    var outLogin = location.href;
    if (outLogin.indexOf("id") != -1) {
        var outLogin1 = outLogin.split("?")[0];
        var outLogin2 = outLogin.split("&")[1];
        var outLogin3 = outLogin1 + "?name1=undefined=&" + outLogin2;
        var loginA=document.querySelector(".loginA");
        loginA.href=`./login.html?${outLogin3}`

        var vip2=document.querySelector(".vip").querySelector("a");
        vip2.href=`http://localhost/stage_2/hznzcn/list.html?name1=${search}`
    } else {
        outLogin3 = outLogin.split("?")[0];
    }
    var homePage = document.querySelector(".homePage");
    var vip = document.querySelector(".vip");
    //如果以登录显示欢迎
    if (search) {
        if (search != "undefined") {
            var aLink = document.createElement("li");
            aLink.innerHTML = `<a href="./homePage.html?name1=${search}">货捕头首页</a>`
            homePage.insertBefore(aLink, vip);
            loginLi.innerHTML = search;
            postli.innerHTML = `<a href="${outLogin3}">退出登录</a>`;
        } else {
            postli.innerHTML = `<a href="./post.html?${outLogin}">免费注册</a>`
            var aLink = document.createElement("li");
            aLink.innerHTML = `<a href="./homePage.html">货捕头首页</a>`
            homePage.insertBefore(aLink, vip);
        }
    } else {
        
        postli.innerHTML = `<a href="./post.html?http://localhost/stage_2/hznzcn/list.html">免费注册</a>`
        var aLink = document.createElement("li");
        aLink.innerHTML = `<a href="./homePage.html">货捕头首页</a>`
        if (homePage) {
            homePage.insertBefore(aLink, vip)
        }

    }
})();