// JavaScript Document
var targetElement;
$(function () {
  "use strict";

  var obj = {
      init: function () {
          this.toTop();
          this.smoothScroll();           
          this.initFadeAnim();
      },
      //totop
      toTop: function () {
          $("#totop").hide();
          $(window).scroll(function () {
              if ($(this).scrollTop() > 500) {
                  $("#totop").fadeIn();
              } else {
                  $("#totop").fadeOut();
              }
          });
          $("#totop a").click(function () {
              $('body,html').animate({
                  scrollTop: 0
              }, 500);
              return false;
          });
      },
      //smoothScroll
      smoothScroll: function() {
          $('a[href^="#"]').click(function() {
              var wWidth = $(window).width();
              if ($($(this).attr('href')).length) {
                  var p = $($(this).attr('href')).offset();
                  if (wWidth <= 640) {
                      $('html,body').animate({
                          scrollTop: p.top - 70
                      }, 500);
                  } else {
                      $('html,body').animate({
                          scrollTop: p.top - 80
                      }, 500);
                  }
              }
              return false;
          });
      },
      initFadeAnim: function() {
        var observerOptions = {
            rootMargin: '100px',
            threshold: 0
        }
    
        if (!jQuery('.fadeInAnim').length) return;
        jQuery('.fadeInAnim').each(function(idx, elem) {
            var io = new IntersectionObserver(function(entries, observer) {
            jQuery(entries).each(function(idx2, entry) {
                if (entry.isIntersecting && !jQuery(entry.target).hasClass('visible')) {
                jQuery(entry.target).addClass('visible');
                observer.disconnect();
                }
            });
            }, observerOptions);
            io.observe(elem)
        });
    }

  };

  obj.init();
  $('.sp-menu-item > a').click(function() {
        close_menu();
  });


  $(document).on("click", ".footer_panel .menu_info .sub_menu .title .icon", function(event){
    event.preventDefault();
    $(this).parent().parent().find("ul").slideToggle();
    $(this).toggleClass('opened');
  });

  $(document).on("click", ".close_modal", function(event){
    event.preventDefault();
    $(this).parent().hide();
  }); 
  
  
});

function darken_screen(yesno) {
    if (yesno == true) {
        document.querySelector('.screen-darken').classList.add('active');
    } else if (yesno == false) {
        document.querySelector('.screen-darken').classList.remove('active');
    }
}

function close_menu() {
    darken_screen(false);
    document.querySelector('.sp-menu-content.show').classList.remove('show');
    document.body.classList.remove('sp-menu-active');
    document.querySelector('.sp-menu-btn').classList.remove('active');
}

function show_menu() {
    darken_screen(true);
    document.getElementById('sp-menu').classList.add('show');
    document.querySelector('.sp-menu-btn').classList.add('active');

    document.body.classList.add('sp-menu-active');
}

document.addEventListener('DOMContentLoaded', function () {

});

window.addEventListener('scroll', function(){
  var header = document.getElementsByTagName('body')[0];
  let wHeight = 700;
  
  if (document.body.scrollTop > wHeight || document.documentElement.scrollTop > wHeight) {
      if (!header.classList.contains('header-fix')) {
          header.classList.add('header-fix');
      }
  }
  else {
      if (header.classList.contains('header-fix')) {
          header.classList.remove('header-fix');
      }
  }
});
