(function($, window, undefined) {

  'use strict';

  function App() {
    var _headerFX = {
      _pattern: Trianglify({
          width: window.innerWidth,
          height: $('.trianglify').height(),
          cell_size: 50,
          stroke_width: 50.0
      }),
      _appendElement: function() {
        $('.trianglify').append(this._pattern.svg());
      }
    };

    var _openMenu = {
      _openMenuConfig: function() {
        $('.menu-icon').on('click', function() {
          $('.wrapper').toggleClass('show');
          $('.menu-icon').toggleClass('active');
        });
      }
    };

    var _scrollToDown = {
      _scroll: function() {
        smoothScroll.init();
      }
    };

    var _search = {
      _show: function() {
        $('.search').on('click', function() {
          if(!$('.content').hasClass('show-overlay')) {
            $('.content').addClass('show-overlay');
            $('.fa-search').css('color' ,'rgb(230, 230, 230)');
            $('.fa-search').removeClass('fa-search');
            $('.search > .fa').addClass('fa-times');
            $('#findPost').focus();
          } else {
            $('.content').removeClass('show-overlay');
            $('.fa-times').css('color' ,'rgb(68, 68, 68)');
            $('.fa-times').removeClass('fa-times');
            $('.search > .fa').addClass('fa-search');
          }
        });
      },
      _searchPost: function() {
        $('#findPost').findPost();
      },

    };




    _headerFX._appendElement();
    _openMenu._openMenuConfig();
    _scrollToDown._scroll();
    _search._show();
    _search._searchPost();
  }

  window.App = App;

})(Zepto, window);

App();
