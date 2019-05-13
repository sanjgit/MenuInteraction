'use strict';

// angular.module('BlurAdmin', [
//   'ngAnimate',
//   'ui.bootstrap',
//   'BlurAdmin.pages'
// ]);
(function() {
  'use strict';

  angular
    .module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);

  angular
    .module('ui.bootstrap.demo')
    .controller('DropdownController', DropdownController);

  function DropdownController($scope,$http) {
    //var vm = this;
    $scope.MenuList=[];
    $http.get("https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4")
  .then(function(response) {
    $scope.MenuList = response.data;
  });
    // $scope.MenuList={
    //   "product": [
    //     {
    //       "title": "PAYMENTS",
    //       "sub-title": "A complete payments platform engineered for growth."
    //     },
    //     {
    //       "title": "BILLING",
    //       "sub-title": "Build and scale your recurring business model."
    //     },
    //     {
    //       "title": "CONNECT",
    //       "sub-title": "Everything platforms need to get sellers paid."
    //     }
    //   ],
    //   "developers": [
    //     {
    //       "title": "DOCUMENTATION",
    //       "sub-title": "Start integrating Stripeâ€™s products and tools."
    //     },
    //     {
    //       "title": "FULL API REFERENCE",
    //       "sub-title": "Build and scale your recurring business model."
    //     },
    //     {
    //       "title": "API STATUS",
    //       "sub-title": "Everything platforms need to get sellers paid."
    //     }
    //   ],
    //   "company": [
    //     {
    //       "title": "ABOUT STRIPE",
    //       "sub-title": "A complete payments platform engineered for growth."
    //     }
    //   ]
    // }
    $scope.dropDwn=false;
    $scope.mouseHover=function(ev){
     // $scope.isDropdown=true;
      this.isDropDownOpen=true;
      //alert("hi");
    }
    // $('ul.nav li.dropdown').hover(function() {
    //   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    // }, function() {
    //   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    // });
    
  }
  angular
  .module('ui.bootstrap.demo').filter('titlecase', function() {
    return function (input) {
        var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;

        input = input.toLowerCase();
        return input.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title) {
            if (index > 0 && index + match.length !== title.length &&
                match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" &&
                (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
                title.charAt(index - 1).search(/[^\s-]/) < 0) {
                return match.toLowerCase();
            }

            if (match.substr(1).search(/[A-Z]|\../) > -1) {
                return match;
            }

            return match.charAt(0).toUpperCase() + match.substr(1);
        });
    }
});

}());