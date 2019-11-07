document.addEventListener("DOMContentLoaded", function(){
    let message = document.getElementById('messages');
    let newMesg = document.getElementById('msg');
    let userName = document.getElementById('user-name');
    var socket = io();

    socket.on('enter-message', function(data){
        enterMessage(data);
    });

    document.getElementById('button').addEventListener('click', function(){
        socket.emit('enter-message', {
          name: userName.value,
          msg: newMesg.value
        });
        newMesg.value = '';
    });
    function enterMessage(data) {
        message.innerHTML += ['<li><strong>', data.name, ':</strong> ', data.msg + '</li>'].join('');
    }

    // document.on('keypress click', function(e){
    //     if (e.which === 13 || e.type === 'click') {
    //     socket.emit('enter-message', {
    //             name: userName.value,
    //             msg: newMesg.value
    //           });
    //           newMesg.value = '';
    //     }
    // })
    // function enterMessage(data) {
    //     message.innerHTML += ['<li><strong>', data.name, ':</strong> ', data.msg + '</li>'].join('');
    // }

})


