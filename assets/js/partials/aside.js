$(document).ready(() => {
  // click to sidebar collaspe
  $('#sidebarCollaspe').click(function(){
    let wrapper = $('.wrapper');
    let width = $(window).width();
    if(width > 767){
      wrapper.toggleClass('collaspe');
    }else{
      wrapper.removeClass('collaspe');
    }
  });

  // sidebar menu dropdown
  $(".menu-item.dropdown .has-arrow").click(function() {
    $(this)
      .siblings(".sidebar-menu-dropdown")
      .slideToggle(500);
  });

});
