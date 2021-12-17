$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 0)
            $('.navbar').addClass('navbar-top')
        else
        $('.navbar').removeClass('navbar-top')
    });
    $('.list-group a').click(function(){
        var newText = $(this).attr('data-text');
        $(".tab-content > h2").text(newText);
    });
    $("form").submit(function(){
        alert("成功送出，請留意信箱查收");
        $('.form input,.form textarea').val();
        return false;
    })
});