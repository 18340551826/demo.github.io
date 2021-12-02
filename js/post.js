//携带上一个页面地址以便登录完成回到上一个地址；
(function () {
    var haved = document.querySelector(".forgetNumber");
    var search = location.search.split("?")[1];
    haved.innerHTML = `已有账号？<a href="./login.html?${search}">请登录</a>`
})();
var inps = document.querySelectorAll("input");
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
var search = location.search;
loginBtn.onclick = function () {
    var name1 = document.querySelectorAll("input")[0].value;
    var pass1 = document.querySelectorAll("input")[1].value;

    Ajax({
        url: './php/post.php',
        data: `name1=${name1}&pass1=${pass1}`,
        success: function (dt) {
            // 判断当前返回值是否等于1
            if (dt == 1) {
                location.href = `./login.html${search}`
            }
        }
    })
}