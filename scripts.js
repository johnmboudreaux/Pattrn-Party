$('.tabs-conatiner .tabs a').on('click', tabSwitch);
$('.header-button').on('click', toggleNav);

function tabSwitch(e) {
  let attrValue = $(this).attr('data');
  $(`.tabs-conatiner ${attrValue}`).show().siblings().hide();
  $(this).parent('li').addClass('active').siblings().removeClass('active selected-card');
}

function toggleNav() {
    $('.small-nav').hasClass('hidden') ?
      $('.small-nav').toggleClass("show-small-nav")
      :
      $('.small-nav').toggleClass("show-small-nav");
  };
