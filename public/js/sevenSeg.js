//menu
$(function(){
    var menuState = false;
    var $list = $(".list");
    if(window.innerWidth<767){
        $(".list").hide();
    }
    $("#menu").on('click',function(event){
        menuState = !menuState;
        if(menuState){
            console.log("menu open");
            $(this).attr("src","../images/cross.png");
            $list.slideDown(300);
        }
        else{
            console.log("menu close");
            $(this).attr("src","../images/menu.png");
            $list.slideUp(300);
        }

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

    
});

// Initialize Firebase
var database = firebase.database();
var btnState;

//firebase
$(document).ready(function(){
    database.ref("iot0624/LED").on('value',function(snapshot){
        //console.log(snapshot.val())
        btnState = snapshot.val();
        if(btnState){
            $("a.btn").addClass("btn-open");
            $(".status").html("OPEN");
        }
        else{
            $("a.btn").removeClass("btn-open");
            $(".status").html("CLOSE");
        }

    });

    $("a.btn").on("click",function(event){
        event.preventDefault();
        database.ref("iot0624/LED").set(!btnState);
    })
});