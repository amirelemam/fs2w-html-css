$(document).ready(function(){
  var start=0;
  var end=$('.objective').offset().top;
  var fading = $('.logohead');
  var opacity=0;

  $(window).on('scroll', function(){
    var offset = $(document).scrollTop();
    if( offset<=start ){
        opacity=0;
    }else if( offset<=end ){
        opacity=offset/end;
    }
    fading.css('opacity',opacity);
  });

  $(".scrollto").click(function(e){
    e.preventDefault();
    $(document).off("scroll");
    $('a.scrollto').each(function(){ $(this.parentElement).removeClass('active')});
    $(this.parentElement).addClass('active');
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000, 'easeInOutExpo', function(){
      $(document).on('scroll', onscrollfunc);
    });
  });

  $(document).on('scroll', onscrollfunc);

  $(".contactform").click(function(e){
    e.preventDefault();
    var name = $("#formname").val();
    var email = $("#formemail").val();
    var msg = $("#formmsg").val();
    var data = {
        name: name,
        email: email,
        msg: msg
    };
    $.ajax({
        type: 'POST',
        url: 'email.php',
        async: true,
        data: data,
        success: function(response) {
            if (response == "sent"){
              // success
            }
            else {
              // fail
            }
        }
    });
  });

  function onscrollfunc(){
    pos = $(document).scrollTop();
    $(".scrollto").each(function(){
      var curlink = $(this);
      var section = $(curlink.attr('href'));
      if (section.position().top <= pos+80 &&
          section.position().top + section.height() > pos) {
        $($(".scrollto").parent()).removeClass("active");
        $(curlink.parent()).addClass("active");
      }
      else {
        $(curlink.parent()).removeClass("active");
      }
    });
  }
});
