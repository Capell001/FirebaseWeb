//menu
$(function () {
    $.ajax({
        dataType: "json",
        url: "menu.json",
        success: function(data){
            var menuHtml = "";
            jQuery.each(data,function(key,value){
                menuHtml += "<li><a href=\""+ value + "\">" + key + "</a></li>\n";
            });

            $("nav ul").append(menuHtml);
        }
    });
});

//sign in
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

//menu
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

//firebase
$(function(){
     // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBpPT3Zfu28n1bEdi_bjYj_qA5fUqY2cEU",
    authDomain: "iotcapel.firebaseapp.com",
    databaseURL: "https://iotcapel.firebaseio.com",
    projectId: "iotcapel",
    storageBucket: "",
    messagingSenderId: "876886850098",
    appId: "1:876886850098:web:313a2009d73c5c8e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
});