// 请求地址：http://localhost:8080/api/v1/admin/user/info
// 请求方式：get
// 请求参数：无
$(function(){
    $.ajax({
        type:'get',
        datatype:'json',
        url:"http://localhost:8080/api/v1/admin/user/info",
        headers:{
            Authorization:localStorage.getItem('token')
        },
        success:function(res){
            if(res.code==200){
                console.log(res);
                $('.user_info>img').attr('src',res.data.userPic)
                $('.user_info>span').html(`欢迎&nbsp;&nbsp;${res.data.nickname}`)
            }
        },
        error:(err)=>{
            console.log(err);
            if(err.statusText=="Forbidden"){
                alert('未登录，请先登录');
                localStorage.href='./login.html';
            }
        }

    });
//左侧导航栏 
    $('.level01').on('click',function(){
        // 1、绑定点击事件，用排他法，点击哪个就给哪个添加样式
        $(this).addClass('active').siblings().removeClass('active');
        // 2、通过判断找到
        if($(this).next().hasClass('level02')){
            $('.level02').slideToggle();
            $(this).find('b').addClass('rotate0');
            $('.level02>li').on('click',function(){
                $(this).addClass('active').siblings().removeClass('active');
            })
        }else{
            $('.level02').slideUp();
            $('.level01').eq(1).find('b').removeClass('rotate0');
            $('.level02>li').removeClass('active');

        }

    });
    $('.logout').on('click',function(){
        localStorage.removeItem('token');
        location.href='./login.html';
    })
    
})