(function($){
$(()=>{
    let socket = io()
    let login=$('#login')
    let signup=$('#signup')
    let username=$('#username')
    let password=$('#password')
    let Name
    signup.click(()=>{
        $.post('/routes/users',{username:username.val(),password:password.val()},()=>{
            window.alert('Account created successfully')
        })
    })
    login.click(()=>{
        Name=username.val()  
        socket.emit('login',{username:username.val(),password:password.val()})
            
    })  
    socket.on('logged_in',()=>{
        location.href='/public'
    })
    socket.on('something wrong',()=>{
        window.alert('wrong username or password')
    })
   
}

)})(jQuery);
