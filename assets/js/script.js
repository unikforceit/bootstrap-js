// $('.btn-primary')
function myfunction(){
    alert('Hello');
}

$(document).ready(function(){
// myfunction();
    var card = '.card';
    var speed = 1000;
    $('.btn-primary').click(function(){
        console.log('clicked in console');
        // alert('CLicked');
        // $('.card').hide();
        // $('.card').show();
        // $('.card').toggle();
         $(card).slideToggle(speed);
    });

    $('.btn-primary').mouseover(function(){
        console.log('clicked in console');
        // alert('CLicked');
        // $('.card').hide();
        // $('.card').show();
        // $('.card').toggle();
    });

});

