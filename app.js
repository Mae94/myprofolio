$(function(){

    $('.small-img').click(function(){
        
      $('<div id="over">').appendTo($('body')).hide().fadeIn();
      $('#over').append($('<div class="img-box">'));
      $('#over').append($('<span class="close">&times;</span>'));
    //   $('.img-box').append($('<span class="close">&times;</span>'));
      $('.img-box').append($('<img class="lightbox">'));

      let imageSrc = $(this).attr('small-img');
      $('.lightbox').attr('img-box', imageSrc);
      console.log('imageScr');

      $('.close').click(function(){
          $('#over').fadeOut(function(){
               $('#over').remove();
          });
      })
    });
})

$(window).scroll(function(){

    let scrollTopValue = $(document).scrollTop();

    let lefty = $('.images-content-left').offset().top;

    if(scrollTopValue >lefty - 150){
        $('.images-content-left').animate({right:0},1000);
    }
    
    let righty = $('.images-content-right').offset().top;

    if(scrollTopValue >righty -150){
        $('.images-content-right').animate({left:0},1000);
    }
});