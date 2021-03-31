var $button         = $('.button'),
    $modalContainer = $('#modal-container'),
    $body           = $('body'),
    $content        = $('.content'),
    $exit           = $('#exit_btn'),
    btnId;

$('.button:eq(0)').on('click', function () {

  btnId = $(this).attr('id');

  $('.baseball_popup_1')
      .removeAttr('class')
      //구분자 클래스
      .addClass('baseball_popup_1')
      .addClass(btnId);
  $content
      //클래스 삭제
      .removeAttr('class')
      .addClass('content');

  $body.addClass('modal-active');

});

$('.button:eq(2)').on('click', function () {

  btnId = $(this).attr('id');

  $('.baseball_popup_2')
      .removeAttr('class')
      .addClass('baseball_popup_2')
      .addClass(btnId);
  $content
      //클래스 삭제
      .removeAttr('class')
      .addClass('content');

  $body.addClass('modal-active');

});

$('.button:eq(1)').on('click', function () {

  btnId = $(this).attr('id');

  $('.baseball_popup_3')
      .removeAttr('class')
      .addClass('baseball_popup_3')
      .addClass(btnId);
  $content
      //클래스 삭제
      .removeAttr('class')
      .addClass('content');

  $body.addClass('modal-active');

});

$('.button:eq(3)').on('click', function () {

  btnId = $(this).attr('id');

  $('.baseball_popup_4')
      .removeAttr('class')
      .addClass('baseball_popup_4')
      .addClass(btnId);
  $content
      //클래스 삭제
      .removeAttr('class')
      .addClass('content');

  $body.addClass('modal-active');

});

$('.button:eq(4)').on('click', function () {

  btnId = $(this).attr('id');

  $('.hupoint_popup_1')
      .removeAttr('class')
      //구분자 클래스
      .addClass('hupoint_popup_1')
      .addClass(btnId);
  $content
      //클래스 삭제
      .removeAttr('class')
      .addClass('content');

  $body.addClass('modal-active');

});

$('.button:eq(6)').on('click', function () {

  btnId = $(this).attr('id');

  $('.hupoint_popup_2')
      .removeAttr('class')
      //구분자 클래스
      .addClass('hupoint_popup_2')
      .addClass(btnId);
  $content
      //클래스 삭제
      .removeAttr('class')
      .addClass('content');

  $body.addClass('modal-active');

});

$('.button:eq(5)').on('click', function () {

  btnId = $(this).attr('id');

  $('.hupoint_popup_3')
      .removeAttr('class')
      //구분자 클래스
      .addClass('hupoint_popup_3')
      .addClass(btnId);
  $content
      //클래스 삭제
      .removeAttr('class')
      .addClass('content');

  $body.addClass('modal-active');

});

$('.button:eq(7)').on('click', function () {

  btnId = $(this).attr('id');

  $('.hupoint_popup_4')
      .removeAttr('class')
      //구분자 클래스
      .addClass('hupoint_popup_4')
      .addClass(btnId);
  $content
      //클래스 삭제
      .removeAttr('class')
      .addClass('content');

  $body.addClass('modal-active');

});

$('.button:eq(8)').on('click', function () {

  btnId = $(this).attr('id');

  $('.eye_popup_1')
      .removeAttr('class')
      //구분자 클래스
      .addClass('eye_popup_1')
      .addClass(btnId);
  $content
      //클래스 삭제
      .removeAttr('class')
      .addClass('content');

  $body.addClass('modal-active');

});

$('.button:eq(10)').on('click', function () {

  btnId = $(this).attr('id');

  $('.eye_popup_2')
      .removeAttr('class')
      //구분자 클래스
      .addClass('eye_popup_2')
      .addClass(btnId);
  $content
      //클래스 삭제
      .removeAttr('class')
      .addClass('content');

  $body.addClass('modal-active');

});

$('.button:eq(9)').on('click', function () {

  btnId = $(this).attr('id');

  $('.eye_popup_3')
      .removeAttr('class')
      //구분자 클래스
      .addClass('eye_popup_3')
      .addClass(btnId);
  $content
      //클래스 삭제
      .removeAttr('class')
      .addClass('content');

  $body.addClass('modal-active');

});

$('.button:eq(11)').on('click', function () {

  btnId = $(this).attr('id');

  $('.eye_popup_4')
      .removeAttr('class')
      //구분자 클래스
      .addClass('eye_popup_4')
      .addClass(btnId);
  $content
      //클래스 삭제
      .removeAttr('class')
      .addClass('content');

  $body.addClass('modal-active');

});

$('.exit_btn:eq(0)').on('click', function () {
	$('.baseball_popup_1.one').addClass('out');
	$body.removeClass('modal-active');
  if ($(this).hasClass(btnId)) {

    $content.addClass('out');

  }
});

$('.exit_btn:eq(1)').on('click', function () {
	$('.baseball_popup_2.one').addClass('out');
	$body.removeClass('modal-active');
  if ($(this).hasClass(btnId)) {

    $content.addClass('out');

  }
});

$('.exit_btn:eq(2)').on('click', function () {
	$('.baseball_popup_3.one').addClass('out');
	$body.removeClass('modal-active');
  if ($(this).hasClass(btnId)) {

    $content.addClass('out');

  }
});

$('.exit_btn:eq(3)').on('click', function () {
	$('.baseball_popup_4.one').addClass('out');
	$body.removeClass('modal-active');
  if ($(this).hasClass(btnId)) {

    $content.addClass('out');

  }
});

$('.exit_btn:eq(4)').on('click', function () {
	$('.hupoint_popup_1.one').addClass('out');
	$body.removeClass('modal-active');
  if ($(this).hasClass(btnId)) {

    $content.addClass('out');

  }
});

$('.exit_btn:eq(5)').on('click', function () {
	$('.hupoint_popup_2.one').addClass('out');
	$body.removeClass('modal-active');
  if ($(this).hasClass(btnId)) {

    $content.addClass('out');

  }
});

$('.exit_btn:eq(6)').on('click', function () {
	$('.hupoint_popup_3.one').addClass('out');
	$body.removeClass('modal-active');
  if ($(this).hasClass(btnId)) {

    $content.addClass('out');

  }
});

$('.exit_btn:eq(7)').on('click', function () {
	$('.hupoint_popup_4.one').addClass('out');
	$body.removeClass('modal-active');
  if ($(this).hasClass(btnId)) {

    $content.addClass('out');

  }
});

$('.exit_btn:eq(8)').on('click', function () {
	$('.eye_popup_1.one').addClass('out');
	$body.removeClass('modal-active');
  if ($(this).hasClass(btnId)) {

    $content.addClass('out');

  }
});

$('.exit_btn:eq(9)').on('click', function () {

	$('.eye_popup_2.one').addClass('out');
	$body.removeClass('modal-active');
  if ($(this).hasClass(btnId)) {

    $content.addClass('out');

  }
});

$('.exit_btn:eq(10)').on('click', function () {

	$('.eye_popup_3.one').addClass('out');
	$body.removeClass('modal-active');
  if ($(this).hasClass(btnId)) {

    $content.addClass('out');

  }
});

$('.exit_btn:eq(11)').on('click', function () {

	$('.eye_popup_4.one').addClass('out');
	$body.removeClass('modal-active');
  if ($(this).hasClass(btnId)) {

    $content.addClass('out');

  }
});

$('.hupoint_image-click_1').on('click', function () {
      document.getElementById("hupoint_imgClickAndChange").src = document.getElementById("hupoint_1").src;
      document.getElementById("hupoint_imgClickAndChange").style.width = "37%";
});

$('.hupoint_image-click_2').on('click', function () {
      document.getElementById("hupoint_imgClickAndChange").src = document.getElementById("hupoint_2").src;
      document.getElementById("hupoint_imgClickAndChange").style.width = "100%";
});

$('.hupoint_image-click_3').on('click', function () {
      document.getElementById("hupoint_imgClickAndChange").src = document.getElementById("hupoint_3").src;
});

$('.image-click_1').on('click', function () {
      document.getElementById("imgClickAndChange").src = document.getElementById("kdo_1").src;
});

$('.image-click_2').on('click', function () {
      document.getElementById("imgClickAndChange").src = document.getElementById("kdo_2").src;
});

$('.image-click_3').on('click', function () {
      document.getElementById("imgClickAndChange").src = document.getElementById("kdo_3").src;
});
