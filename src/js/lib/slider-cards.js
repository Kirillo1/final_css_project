'use strict'

function cardsSlider() {
  let mySwiper = ''
  let breakpoint = window.matchMedia('(max-width: 768px)')
  let breakpointChecker = function () {
    if (breakpoint.matches) {
      if (mySwiper) {
        mySwiper.destroy(true, true)
      }

      mySwiper = new Swiper('.cards-screen__slider', {
        spaceBetween: 10,
        pagination: {
          el: '.cards-screen__slider-pagination',
          type: 'fraction',
        },

        scrollbar: {
          el: '.cards-screen__slider-scrollbar',
        },
      })
      return
    } else {
      if (mySwiper) {
        mySwiper.destroy(true, true)
      }

      mySwiper = new Swiper('.cards-screen__slider', {
        pagination: {
          el: '.cards-screen__slider-pagination',
          type: 'bullets',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '</span>'
          },
        },
      })
    }
  }
  breakpoint.addListener(breakpointChecker)
  breakpointChecker()
}

cardsSlider()
