// #### 1、用户登录
// 请求地址：http://localhost:8080/api/v1/admin/user/login
// 请求方式：post
// 请求参数：username,password
$(function(){
    $(".input_sub").on('click',(e)=>{
        const username=$('.input_txt').val();
        const password=$('.input_pass').val();
        $.ajax({
            url:'http://localhost:8080/api/v1/admin/user/login',
            type:"post",
            data:{username,password},
            datatype:'json',
            success:(res)=>{
                console.log(res);
                if(res.code==200){                  
                    $('#myModal').modal('show');
                    $('.modal-body').text(res.msg);
                    $('#myModal').on('hidden.bs.modal', function (e) {
                        localStorage.setItem('token',res.token);
                        // location.href='./index.html'
                        window.location.href='./index.html';
                      })

                }else{
                    $('#myModal').modal('show');
                    $('.modal-body').text(res.msg);
                }
            }
        })
       $('.btn-primary').on('click',()=>{
        $('#myModal').modal('hide');
       })

    })
})