$(document).ready(function() {
    $('.tabs-conatiner .tabs a').on('click', function(e)  {
        var attrValue = $(this).attr('href');
        $(`.tabs-conatiner ${attrValue}`).show().siblings().hide();
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
});
