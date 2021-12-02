search = location.search.split("=")[3];
PromiseAjax({
    url: "./php/details.php",
    datatype: "json",
    data: `id1=${search}`
}).then(function (dt) {
    //把商品信息填充到页面的元素中
    $(".leftImgBox img").prop("src", dt.imglink.indexOf("hznzcn.com") == -1 ? dt.imglink : "./images/test.jpg");
    $(".BigImgBox img").prop("src", dt.imglink.indexOf("hznzcn.com") == -1 ? dt.imglink : "./images/test.jpg");
    $(".rightBox>div").first().html(dt.synopsis);
    $($(".rightBox").children()[1]).html(dt.shopname);
    $(".rightBox span").html(dt.money ? dt.money : 888);
    $(".aboutWares img").prop("src", dt.imglink.indexOf("hznzcn.com") == -1 ? dt.imglink : "./images/test.jpg")

    //放大镜
    $(".leftImgBox").hover(function () {
        $(".mark").show();
        $(".BigImgBox").show();

    }, function () {
        $(".mark").hide();
        $(".BigImgBox").hide();
    })
    $(".leftImgBox").on("mousemove", function (e) {
        var left1 = e.pageX - parseInt($(".mark").width() / 2) - $(".leftImgBox").offset().left;
        var top1 = e.pageY - parseInt($(".mark").height() / 2) - $(".leftImgBox").offset().top;
        top1 >= 0 ? top1 : top1 = 0;

        left1 >= 0 ? left1 : left1 = 0;

        left1 >= $(".leftImgBox").width() - $(".mark").width() ? left1 = $(".leftImgBox").width() - $(".mark").width() : left1;

        top1 >= $(".leftImgBox").height() - $(".mark").height() ? top1 = $(".leftImgBox").height() - $(".mark").height() : top1;

        $(".mark").css({ "left": left1 + "px", "top": top1 + "px" });
        // 大图移动距离=小图移动距离*大图最大移动距离/小图最大移动距离
        var bigLeft = left1 * ($(".BigImgBox img").width() - $(".BigImgBox").width()) / ($(".leftImgBox").width() - $(".mark").width());


        var bigTop = top1 * ($(".BigImgBox img").width() - $(".BigImgBox").width()) / ($(".leftImgBox").width() - $(".mark").width());

        $(".BigImgBox img").css({ "left": -bigLeft + "px", "top": -bigTop + "px" });

    })
    var detailsJoinCar = document.querySelector(".detailsJoinCar");
    var search2 = location.search.split("=")[1];



    
    detailsJoinCar.onclick = function () {

        if (search2&&search2!="undefined") {
            alert("加入购物车成功");

            var cartlist1 = localStorage.getItem(search2) || "[]";
            //把获取的字符串转为数组对象
            cartlist1 = eval('(' + cartlist1 + ')')
            console.log(cartlist1);
            //当前数组对象中是否有值
            if (cartlist1.length > 0) {
                //定义布尔值用来判断商品是否已经添加过一次
                bool = true;
                //循环判断是否添加过
                for (let i = 0; i < cartlist1.length; i++) {
                    // 判断每一个商品id
                    if (cartlist1[i].id == dt.id) {
                        // 如果相等的话已选商品数量加1
                        cartlist1[i].number += 1;
                        bool = false;
                        localStorage.setItem(search2, JSON.stringify(cartlist1))
                    }
                }
                if (bool) {
                    dt.number = 1
                    cartlist1.push(dt);
                    localStorage.setItem(search2, JSON.stringify(cartlist1))
                }
            } else {
                dt.number = 1
                cartlist1.push(dt)
                localStorage.setItem(search2, JSON.stringify(cartlist1))
            }

        }else{
            alert("您还未登录");
        }
    }
});
$(".goodsCar").on("click",function(){
    var search = location.search.split("=")[1];
    if(search&&search!="undefined"){
        location.href=`http://localhost/stage_2/hznzcn/car.html?name1=${search}`;
    }else{
        alert("请登录之后再进入购物车");
    }
    
})


$(".aboutTitle>div").on("click", function () {
    $(".aboutTitle>div").removeAttr("class");
    $(this).prop("class", "show");
    $(".aboutWares").hide();
})
$(".aboutTitle>div").eq(0).on("click", function () {
    $(".aboutWares").show();
})



