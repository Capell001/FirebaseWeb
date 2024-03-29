//menu
$(function () {
    $.ajax({
        dataType: "json",
        url: "../menu.json",
        success: function(data){
            var menuHtml = "";
            jQuery.each(data,function(key,value){
                menuHtml += "<li><a href=\"/"+ value + "\">" + key + "</a></li>\n";
            });

            $("nav ul").append(menuHtml);
        }
    });


});

//sign in
$(function(){
    let $alertMessage = $(".alertMessage");
    $alertMessage.hide();
    $('.signIn').on('click',function(event){
         $alertMessage.slideDown(400);
        event.preventDefault();
        $('.cancel').on("click",function(event){
            $alertMessage.slideUp(400);
        })
    });

});

//menu
$(function(){
    var menuState = false;
    var $list = $(".list");
    if(window.innerWidth<=767){
        $(".list").hide();
    }
    $("#menu").on("click touchstart",function(event){
        menuState = !menuState;
        let smallWindow = $(window).width() <= 767;
        if (menuState && smallWindow) {
            console.log("menu open");
            $(this).attr("src","../images/cross.png");
            $("nav>ul").css("display","block");
        }else{
            console.log("menu close");
            $(this).attr("src","../images/menu.png");
            $("nav>ul").css("display","none");
        }
        event.preventDefault();
    });
    $(window).resize(function(event){
        //console.log(window.innerWidth)
        if(window.innerWidth > 767){
            $("nav>ul").show();
        }
    });
});





//Authentication Of Firebase
firebase.auth().signInWithEmailAndPassword("bbb@gmail.com", "111111")
    .then(function(result){
        console.log("login 成功");
    })
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode,errorMessage)
  // ...
});

//提取realtime database
let database = firebase.database();
var btnState;
//firebase
$(document).ready(function(){
    database.ref("iot0624/lcdControl").on('value',function(snapshot){
       //console.log(snapshot.val())
        btnState = snapshot.val();
        if (btnState){
            $("a.btn").addClass("btn-open");
            $(".status").html("開啟")
        }else{
            $("a.btn").removeClass("btn-open");
            $(".status").html("關閉");
        }
    });

    $("a.btn").on("click",function(event){
        event.preventDefault();
        database.ref("iot0624/lcdControl").set(!btnState);
    })
});