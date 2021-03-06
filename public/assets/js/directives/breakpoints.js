define(['bpn.directives', 'enquire'],
  function (bpnDirectives) {
   'use strict';

   /*
    * Breakpoints
    * - Fire events based on breakpoint matching/unmatching
    *
    *
    * Depends on following globals:
    * bpn
    * enquire
    * 
    */
    bpnDirectives.directive('breakpoints',
      [
        'sharedDataService',
        function(sharedDataService) {
          return {
            restrict:'EA',
            controller: [
              '$scope', '$element', '$attrs',
              function ($scope){
                $scope.sharedDataService = sharedDataService;
                $scope.sharedDataService.breakpoints = bpn.breakpoints;
                $scope.sharedDataService.enquireBreakpoints = {};
              }
            ],
            link: function (scope) {
              var breakpoints = scope.sharedDataService.breakpoints;
              var keys = Object.keys(breakpoints);
              
              for (var i = 0; i < keys.length; i++) {
                
                scope.sharedDataService.enquireBreakpoints[keys[i]] = (function(i) {
                  return enquire.register(breakpoints[keys[i]], {

                    // OPTIONAL
                    // If supplied, triggered when a media query matches.
                    match : function() {
                      console.log('matching in directive', keys[i]);
                      scope.$broadcast('match', keys[i]);
                    },
                                                
                    // OPTIONAL
                    // If supplied, triggered when the media query transitions 
                    // *from a matched state to an unmatched state*.
                    unmatch : function() {
                      console.log('un-matching in directive', keys[i]);
                      scope.$broadcast('unmatch', keys[i]);
                    },

                    // OPTIONAL
                    // If supplied, triggered once, when the handler is registered.
                    setup : function() {
                      console.log('setup in directive', keys[i]);
                      scope.$broadcast('setup', keys[i]);
                    },
                                                
                    // OPTIONAL, defaults to false
                    // If set to true, defers execution of the setup function 
                    // until the first time the media query is matched
                    deferSetup : true,
                                                
                    // OPTIONAL
                    // If supplied, triggered when handler is unregistered. 
                    // Place cleanup code here
                    destroy : function() {
                      console.log('destroy in directive', keys[i]);
                      scope.$broadcast('destroy', keys[i]);
                    }
                    
                  });

                })(i);

              }
            }
          };
        }
      ]
    );


  }
);
