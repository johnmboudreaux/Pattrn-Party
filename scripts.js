$('.tabs-conatiner .tabs a').on('click', tabSwitch);

function tabSwitch(e) {
  let attrValue = $(this).attr('data');
  $(`.tabs-conatiner ${attrValue}`).show().siblings().hide();
  $(this).parent('li').addClass('active').siblings().removeClass('active');
  // e.preventDefault();
}
