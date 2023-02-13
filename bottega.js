$(document).on("scroll",function(){
    if($(window).scrollTop()>30){
    $("#header1").addClass("change-color");
}else{
    $("#header1").removeClass("change-color");
}
})