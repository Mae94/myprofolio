$(function(){

    $('.small-img').click(function(){
        
      $('<div id="over">').appendTo($('body')).hide().fadeIn();
      $('#over').append($('<div class="img-box">'));
      $('#over').append($('<span class="close">&times;</span>'));
    //   $('.img-box').append($('<span class="close">&times;</span>'));
      $('.img-box').append($('<img class="lightbox">'));

      let imageSrc = $(this).class('small-img');
      $('.lightbox').attr('src', imageSrc);
      console.log(imageSrc);

      $('.close').click(function(){
          $('#over').fadeOut(function(){
               $('#over').remove();
          });
      })
    });
})