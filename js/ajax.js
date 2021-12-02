function Ajax(obj){
    //创建默认参数
    var defInfo={
        url:'',//请求地址
        type:'get',//请求方式
        async:true,//是否异步
        data:'',//请求数据
        datatype:"string",//返回的数据格式
        success:function(){},//请求成功的回调函数
        error:function(){}//请求失败的回调函数
    }
    //判断实参中是否有请求地址
    if(!obj.url){
        throw new Error('没有请求地址')
    }
    //使用实参替换默认参数
    for(var key in obj){
        defInfo[key]=obj[key]
    }

    //创建ajax对象
    var xhr=new XMLHttpRequest()
    //判断是否有参数
    if(defInfo.data){
        //判断请求方式
        if(defInfo.type.toLowerCase()=="get"){
            //配置连接信息
            xhr.open(defInfo.type,defInfo.url+'?'+defInfo.data,defInfo.async)
            //发送请求
            xhr.send()
        }else{
             //配置连接信息
            xhr.open(defInfo.type,defInfo.url,defInfo.async)
            //设置请求头信息
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
            //发送请求
            xhr.send(defInfo.data)
        }
    }else{
        //配置连接信息
        xhr.open(defInfo.type,defInfo.url,defInfo.async)
        //发送请求
        xhr.send()
    }
    //监听ajax状态
    xhr.onreadystatechange=function(){
        //判断ajax状态是否结束
        if(xhr.readyState==4){
            //判断http状态是否成功
            if(xhr.status==200){
                //判断需要的返回数据格式
                if(defInfo.datatype=="json"){
                    //获取解析完毕的响应结果
                    var txt=xhr.responseText
                    defInfo.success(eval('('+txt+')'))
                }else{
                    //获取解析完毕的响应结果
                    var txt=xhr.responseText
                    defInfo.success(txt)
                }
            }else{
                //调用失败的回调函数
                defInfo.error(xhr.status)
            }
        }
    }
}

//在promise对象中封装ajax请求
function PromiseAjax(obj){
    return new Promise((res,rej)=>{
        //创建默认参数
        var defInfo={
            url:'',//请求地址
            type:'get',//请求方式
            async:true,//是否异步
            data:'',//请求数据
            datatype:"string",//返回的数据格式
            success:function(){},//请求成功的回调函数
            error:function(){}//请求失败的回调函数
        }
        //判断实参中是否有请求地址
        if(!obj.url){
            throw new Error('没有请求地址')
        }
        //使用实参替换默认参数
        for(var key in obj){
            defInfo[key]=obj[key]
        }

        //创建ajax对象
        var xhr=new XMLHttpRequest()
        //判断是否有参数
        if(defInfo.data){
            //判断请求方式
            if(defInfo.type.toLowerCase()=="get"){
                //配置连接信息
                xhr.open(defInfo.type,defInfo.url+'?'+defInfo.data,defInfo.async)
                //发送请求
                xhr.send()
            }else{
                //配置连接信息
                xhr.open(defInfo.type,defInfo.url,defInfo.async)
                //设置请求头信息
                xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
                //发送请求
                xhr.send(defInfo.data)
            }
        }else{
            //配置连接信息
            xhr.open(defInfo.type,defInfo.url,defInfo.async)
            //发送请求
            xhr.send()
        }
        //监听ajax状态
        xhr.onreadystatechange=function(){
            //判断ajax状态是否结束
            if(xhr.readyState==4){
                //判断http状态是否成功
                if(xhr.status==200){
                    //判断需要的返回数据格式
                    if(defInfo.datatype=="json"){
                        //获取解析完毕的响应结果
                        var txt=xhr.responseText
                        res(eval('('+txt+')'))
                    }else{
                        //获取解析完毕的响应结果
                        var txt=xhr.responseText
                        res(txt)
                    }
                }else{
                    //调用失败的回调函数
                    rej(xhr.status)
                }
            }
        }
    })
}