$(function () {
//   滚动通知
  $(document).ready(function () {
    setInterval(function () {
      $('#notice-text ul').animate({
        marginTop: '-34px'
      }, 2000, function () {
        $(this).css({
          marginTop: '0'
        }).find('li:first').appendTo(this);
      });
    }, 5000);
  });
  
// 左下角菜单

  if (localStorage.style === 'icon') {
    $(document.body).addClass('icon-style');
    $(".default").addClass('min');
  } else if ((localStorage.style === 'list')) {
    $(".default").addClass('max');
  } else {
    $(".default").addClass('max')
  };
  
  // 按钮关闭
  $(".action-qq").click(function (e) {
    if ($(".item-qq").css("display") == "none") {
      // 显示
      $(".item-qq").show();
      $(".icon-qq").removeClass("icon-qq").addClass("icon-close")

    } else {
      // 关闭
      $(".item-qq").hide();
      $(".icon-close").removeClass("icon-close").addClass("icon-qq")

    }
  });
  // 关闭一天
  var adtype = localStorage.getItem('adtype');
  if (new Date().getTime() - adtype > 3 * 1 * 60 * 60 * 1000) {
    $('.item-qq').show();
  } else {
    $('.item-qq').hide();
    $(".icon-close").removeClass("icon-close").addClass("icon-qq");
  }

  $('.three-days').click(function () {
    $('.item-qq').hide();
    $(".icon-close").removeClass("icon-close").addClass("icon-qq");
    localStorage.setItem('adtype', new Date().getTime());
  });

  // 暂时关闭
  $(".temporarily").click(function (e) {
    $(".item-qq").hide()
    $(".icon-close").removeClass("icon-close").addClass("icon-qq");
  });
});