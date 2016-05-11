(function($, window, undefined) {

  'use strict';

  function App() {
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
            $('.fa-search').removeClass('fa-search');
            $('.search > .fa').addClass('fa-times');
            $('#findPost').css('display','block').focus();
          } else {
            $('.content').removeClass('show-overlay');
            $('.fa-times').removeClass('fa-times');
            $('.search > .fa').addClass('fa-search');
          }
        });
      },
      _searchPost: function() {
        $('#findPost').findPost();
      },

    };

    _openMenu._openMenuConfig();
    _scrollToDown._scroll();
    _search._show();
    _search._searchPost();
  }

  window.App = App;

})(Zepto, window);

App();
