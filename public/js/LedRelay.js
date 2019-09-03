function newDomListener(event){
    $(this).remove();
}

$(function(){
    var $alertMessage = $(".alertMessage");
    $alertMessage.hide();

    $('.SignIn').on('click',function(event){
        $alertMessage.slideDown(300);
        event.preventDefault();
        $('.cancel').on("click",function(event){
            $alertMessage.slideUp(300);
        });  
    });
});

$(function(){
    var menuState = false;
    var $list = $(".list");
    $list.hide();
    $("#menu").on('click',function(event){
        menuState = !menuState;
        if(menuState){
            console.log("menu open");
            $(this).attr("src","images/cross.png");
            $list.slideDown(300);
        }
        else{
            console.log("menu close");
            $(this).attr("src","images/menu.png");
            $list.slideUp(300);
        }
    });

    $(window).resize(function(event){
        //console.log(window.innerWidth);
        if(window.innerWidth>767){
            $(".list").show();
        }
        else{
            $(".list").hide();
        }
    });
});

// Initialize Firebase
var database = firebase.database();

//firebase
$(document).ready(function(){
    $("a.btn").on("click",function(event){
        event.preventDefault();
        $(this).toggleClass("btn-open");
        if($(this).hasClass("btn-open")){
            $(".status").text("OPEN");
        }

        else{
            $(".status").text("CLOSE");
        }
    })
});