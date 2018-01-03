$('.tabs-conatiner .tabs a').on('click', tabSwitch);
$('.header-button').on('click', toggleNav);

function tabSwitch(e) {
  let attrValue = $(this).attr('data');
  $(`.tabs-conatiner ${attrValue}`).show().siblings().hide();
  $(this).parent('li').addClass('active').siblings().removeClass('active');
}

function toggleNav(event) {
  
}
