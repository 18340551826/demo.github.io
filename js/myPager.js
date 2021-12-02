function Pager(ele, obj, cb) {
    this.ele = ele,
    this.obj = obj || {}
    this.cb=cb;
    this.default = {
        pageInto: {
            pageNum: 1,
            pageSize: 10,
            totalSize: 888,
            totalPage: 89
        },
        textInto: {
            first: "首页",
            prev: "上一页",
            list: "",
            next: "下一页",
            last: "尾页",
            sousuo: "",
            GO: "GO"
        }
    }
    var listBox;
    this.into();
}

Pager.prototype.into = function () {
    this.replace();
    this.show();
    this.clicking()
}
//用输入的值替换默认值
Pager.prototype.replace = function () {
    if (this.obj.pageInto) {
        for (var key in this.obj.pageInto) {
            this.default.pageInto[key] = this.obj.pageInto[key]
        }
    }
    if (this.obj.textInto) {
        for (var key in this.obj.textInto) {
            this.default.textInto[key] = this.obj.textInto[key]
        }
    }
}
//让分页器显示
Pager.prototype.show = function () {
    this.ele.innerHTML="";
    this.showText();
    this.showPage();
    this.noClick();
    this.cb(this.default.pageInto.pageNum);
}
//显示除页码外其他按钮
Pager.prototype.showText = function () {
    var text = this.default.textInto;
    for (var key in text) {
        if (key == "GO") {
            var btn = document.createElement("button");
            btn.innerHTML = key;
            btn.className = key;
            eleStyle(btn, {
                padding: '2px 5px',
                cursor: "pointer",
                margin: "5px"
            });
            this.ele.appendChild(btn);
        } else if (key == "sousuo") {
            var inp = document.createElement("input");
            inp.className = key
            eleStyle(inp, {
                width: "30px",
                margin: "5px"
            })
            this.ele.appendChild(inp);
        } else {
            if (key == "list") {
                var div = document.createElement("div");
                listBox = div;
                listBox.className = key;
                eleStyle(listBox, {
                    display: "flex"
                })
                this.ele.appendChild(listBox);
            } else {
                var div = document.createElement("div");
                div.className = key;
                div.innerHTML = this.default.textInto[key];
                eleStyle(div, {
                    padding: '2px 5px',
                    cursor: "pointer",
                    margin: "5px",
                    border: "1px solid hotPink",
                    backgroundColor: "white"
                });
                this.ele.appendChild(div);
            }
        }
    }
}
//显示页码
Pager.prototype.showPage = function () {
    
    var totalPage = this.default.pageInto.totalPage;
    var pageNum =parseInt(this.default.pageInto.pageNum);
    if (totalPage < 10) {
        for (let i = 1; i <= totalPage; i++) {
            createPage(i, pageNum);
        }
    } else {
        if (pageNum < 5) {
            for (let i = 1; i <= 5; i++) {
                createPage(i, pageNum);
            }
            var ellipsis = document.createElement("span");
            ellipsis.innerHTML = "..."
            listBox.appendChild(ellipsis);
            for (let i = totalPage - 1; i <= totalPage; i++) {
                createPage(i, pageNum);
            }
        } else if (pageNum == 5) {
            for (let i = 1; i <= 7; i++) {
                createPage(i, pageNum);
            }
            var ellipsis = document.createElement("span");
            ellipsis.innerHTML = "..."
            listBox.appendChild(ellipsis);
            for (let i = totalPage - 1; i <= totalPage; i++) {
                createPage(i, pageNum);
            }
        } else if (pageNum == totalPage - 4) {
            for (let i = 1; i <= 2; i++) {
                createPage(i, pageNum);
            }
            var ellipsis = document.createElement("span");
            ellipsis.innerHTML = "..."
            listBox.appendChild(ellipsis);
            for (let i = totalPage - 6; i <= totalPage; i++) {
                createPage(i, pageNum);
            }
        } else if (pageNum > totalPage - 4) {
            for (let i = 1; i <= 2; i++) {
                createPage(i, pageNum);
            }
            var ellipsis = document.createElement("span");
            ellipsis.innerHTML = "..."
            listBox.appendChild(ellipsis);
            for (let i = totalPage - 4; i <= totalPage; i++) {
                createPage(i, pageNum);
            }
        }else{
            for (let i = 1; i <= 2; i++) {
                createPage(i, pageNum);
            }
            var ellipsis = document.createElement("span");
            ellipsis.innerHTML = "..."
            listBox.appendChild(ellipsis);
            for (let i = pageNum-2; i <= pageNum+2; i++) {
                console.log(i);
                
                createPage(i, pageNum);
            }
            var ellipsis = document.createElement("span");
            ellipsis.innerHTML = "..."
            listBox.appendChild(ellipsis);
            for (let i = totalPage - 1; i <= totalPage; i++) {
                createPage(i, pageNum);
            }
        }
    }
}
//禁用效果
Pager.prototype.noClick = function () {
    var totalPage = this.default.pageInto.totalPage;
    var pageNum = this.default.pageInto.pageNum;
    var first = document.querySelector(".first");
    var prev = document.querySelector(".prev");
    var next = document.querySelector(".next");
    var last = document.querySelector(".last");
    if (pageNum == 1) {
        first.style.backgroundColor = "grey";
        prev.style.backgroundColor = "grey";
    }
    if (pageNum == totalPage) {
        next.style.backgroundColor = "grey";
        last.style.backgroundColor = "grey";
    }
}
//委托添加点击事件
Pager.prototype.clicking = function () {
    this.ele.onclick = (e) => {
        var e = e || window.event;
        var target = e.target || src.Element;
        var text = this.default.textInto;
        var totalPage = this.default.pageInto.totalPage;
        var pageNum = parseInt( this.default.pageInto.pageNum);
        if (target.innerHTML == text.first&&pageNum!=1) {
            this.default.pageInto.pageNum= 1;
            this.show();
        }
        if (target.innerHTML == text.prev&&pageNum!=1) {
            this.default.pageInto.pageNum= pageNum-1;
            this.show();
        }
        if (target.innerHTML == text.last&&pageNum!=totalPage) {
            this.default.pageInto.pageNum= totalPage;
            this.show();
        }
        if (target.innerHTML == text.next&&pageNum!=totalPage) {
            this.default.pageInto.pageNum= pageNum+1;
            this.show();  
        }
        if(target.nodeName=="P"){
            this.default.pageInto.pageNum= target.innerHTML;
            this.show();  
        }
        if(target.innerHTML=="GO"&&target.previousElementSibling.value!=""){
            
            this.default.pageInto.pageNum= target.previousElementSibling.value;
            this.show();  
        }
    }
    }
//加样式
function eleStyle(ele, obj) {
    for (var key in obj) {
        ele.style[key] = obj[key];
    }
}
//创建页码标签
function createPage(n, m) {
    var div = document.createElement("p");

    div.innerHTML = n;
    eleStyle(div, {
        width: "20px",
        textAlign: "center",
        padding: '2px 5px',
        cursor: "pointer",
        margin: "5px",
        border: "1px solid hotPink",
        backgroundColor: "white"
    });
    if (n == m) {
        eleStyle(div, {
            backgroundColor: "red"
        })
    }
    listBox.appendChild(div);
}