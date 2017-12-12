$(document).ready(function() {
    $('.tabs-conatiner .tabs a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
        $('.tabs-conatiner ' + currentAttrValue).show().siblings().hide();
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
});
