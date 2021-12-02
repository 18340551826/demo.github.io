var pager = document.querySelector(".pager");


PromiseAjax({
    url: "./php/list.php",
    datatype: "json"
}
).then(function (dt) {
    var $arr1 = $(dt)
    var obj1 = {
        pageInto: {
            pageNum: 1,
            pageSize: 20,
            totalSize: $arr1.length,
            totalPage: Math.ceil($arr1.length / 20)
        }
    }
    var page1 = new Pager(pager, obj1, function (m) {
        var $arr = $(dt.slice((m - 1) * 20, m * 20))
        var str = "";
        $arr.each(function (key, item) {
            var search = location.search.split("=")[1];
            //拼接三元表达式是因为有的图片链接有问题不显示，用备用本地图片
            str += `
     <div>
     <div class="unitTop">
         <a href="./details.html?name1=${search}=&id=${item.id}" ><img src=${item.imglink.indexOf("hznzcn.com") == -1 ? item.imglink : "./images/test.jpg"} alt=""></a>
         <div class="joinCar" id=${item.id}>加入购物车</div>
     </div>
     <div class="unitBottom">
         <div>
             <span>杭州</span>
             <div class="shopName">${item.shopname}</div>
         </div>
         <div>
             <a href="javascript:;">${item.synopsis}</a>
         </div>
         <div>$<p class="moneyP">${item.money ? item.money : "888"}</p></div>
         <div>2021-10-18</div>
     </div>
    </div>
    `
        })
        $(".mainMiddle").html(str);
        $(".unitTop").hover(function () {
            $(this).find(".joinCar").height(40);
        }, function () {
            $(this).find(".joinCar").height(0);
        })

          //加入购物车
        $(".joinCar").on("click", function () {
            PromiseAjax({
                url: "./php/details.php",
                datatype: "json",
                data: `id1=${this.id}`
            }).then(function (dt) {
                var search2 = location.search.split("=")[1];
                if (search2 && search2 != "undefined") {
                    alert("加入购物车成功");
    
                    var cartlist1 = localStorage.getItem(search2) || "[]";
                    //把获取的字符串转为数组对象
                    cartlist1 = eval('(' + cartlist1 + ')')
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
    
                } else {
                    alert("您还未登录");
                }
            });
    
        })

        
    });
    // $(".unitTop").on("mouseover",function(){
    //     $(this).find(".joinCar").height(40);
    // })
    // $(".unitTop").on("mouseout",function(){
    //     $(this).find(".joinCar").height(0);
    // })
    
})

$(".goodsCar").on("click",function(){
    var search = location.search.split("=")[1];
    if(search&&search!="undefined"){
        location.href=`http://localhost/stage_2/hznzcn/car.html?name1=${search}`;
    }else{
        alert("请登录之后再进入购物车");
    }
    
})