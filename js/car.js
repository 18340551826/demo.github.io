(function(){
    var loginLi = document.querySelectorAll("li")[1];
    var postli = document.querySelectorAll("li")[2];
    var search = location.search.split("=")[1];
    var outLogin = location.href;
    if (search) {
        if (search != "undefined") {
            var aLink = document.createElement("li");
            aLink.innerHTML = `<a href="./homePage.html?name1=${search}">货捕头首页</a>`
            loginLi.innerHTML = search;
            postli.innerHTML = `<a href="http://localhost/stage_2/hznzcn/list.html">退出登录</a>`;
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
})()
function show() {
    var search = location.search.split("=")[1];
    var goods = localStorage.getItem(search) || [];
    goods = eval('(' + goods + ')');
    var str = "";
    if (goods.length == 0) {
        str = `<p class="nullCar">您的购物车空空如也</p>`
    } else {
        goods.forEach(function (item) {
            str += `
          <li class="everyGoods">
          <div><input type="checkbox" name="oneCheck" id="${item.id}"><img src="${item.imglink}" alt=""></div>
          <div style="width: 300px">${item.shopname}</div>
          <div>$<span>${item.money ? item.money : 888}</span></div>
          <div><button id="${item.id}">-</button><button>${item.number}</button><button id="${item.id}">+</button></div>
          <div>$<span class="small">${item.number * (item.money ? item.money : 888)}</span></div>
          <div style="cursor: pointer;" class="delete" id="${item.id}">删除</div>
        </li>
          `
        })
    }

    $(".carGoods").html(str);
}
show();

$("main").click(function (e) {
    var search = location.search.split("=")[1];
    var goods = localStorage.getItem(search);
    goods = eval('(' + goods + ')');
    var target = e.target;
    if (target.innerHTML == "删除") {
        goods = goods.filter(function (item, i) {
            return item.id != target.id
        }
        )
        localStorage.setItem(search, JSON.stringify(goods))
        target.parentNode.remove();
        if(goods.length==0){
            show();
        }
        judge()
    }
    //增加一件
    if (target.innerHTML == "+") {
        goods.forEach(function (item, i) {
            if (target.id == item.id) {
                item.number += 1;
            }
        }
        )
        localStorage.setItem(search, JSON.stringify(goods))
        $(target).prev().html(parseInt($(target).prev().html()) + 1);
        smallMoney()
    }
    //减少一件
    if (target.innerHTML == "-") {
        goods.forEach(function (item, i) {
            if (target.id == item.id && item.number > 1) {
                item.number -= 1;
            }
        }
        )
        localStorage.setItem(search, JSON.stringify(goods))
        $(target).next().html(parseInt($(target).next().html()) - 1);
        smallMoney()
    }
    //全选按钮
    if (target.name == "allC") {
        $('[name="oneCheck"]').prop("checked", target.checked)
    }
    //单选按钮
    if (target.name == "oneCheck") {
        judge();
    }
    //删除选中商品按钮
    if (target.innerHTML == "删除所选商品") {
        for (let i = 0; i < $('[name="oneCheck"]').length; i++) {
            if ($('[name="oneCheck"]')[i].checked == true) {
                goods = goods.filter(function (item) {
                    return item.id != $('[name="oneCheck"]')[i].id;
                }
                )
            }
        }
        localStorage.setItem(search, JSON.stringify(goods))
        show();
        judge();
    }
    if (target.innerHTML == "付款") {
        for (let i = 0; i < $('[name="oneCheck"]').length; i++) {
            if ($('[name="oneCheck"]')[i].checked == true) {
                goods = goods.filter(function (item) {
                    return item.id != $('[name="oneCheck"]')[i].id;
                }
                )
            }
        }
        localStorage.setItem(search, JSON.stringify(goods))
        show();
        alert("付款成功");
        judge()
    }
    allMoney();
    checkMoney();
})
function allMoney() {
    var allMoney1 = 0;
    $("[class='small']").each(function (i, item) {
        allMoney1 += parseInt(item.innerHTML);
    })
    $(".allMoney span").html(allMoney1);
}
allMoney();

function checkMoney() {
    var checkMoney1 = 0;
    for (let i = 0; i < $('[name="oneCheck"]').length; i++) {
        if ($('[name="oneCheck"]')[i].checked == true) {
            checkMoney1 += parseInt($(".small")[i].innerHTML);
        }
    }
    $(".checkAll span").html(checkMoney1)
}
checkMoney();
function judge() {
    var num = 0;
    for (let i = 0; i < $('[name="oneCheck"]').length; i++) {
        if ($('[name="oneCheck"]')[i].checked) {
            num++;
        }
    }
    if (num == $('[name="oneCheck"]').length&&num!=0) {
        $('[name="allC"]').prop("checked", true);
    } else {
        $('[name="allC"]').prop("checked", false);
    }
}
function smallMoney() {
    var search = location.search.split("=")[1];
    var goods = localStorage.getItem(search);
    goods = eval('(' + goods + ')');
    goods.forEach(function (item, i) {
        smallMoney1 = item.number * item.money;
        $(".small")[i].innerHTML = smallMoney1;
    }
    )
}
$(".vip a").prop("href", `http://localhost/stage_2/hznzcn/list.html${location.search}`)