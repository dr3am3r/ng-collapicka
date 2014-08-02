/**
 * Collapicka
 * ng directive
 * input data
 * @Int range-from (default 0), @Int range-to (default 100), @Int range-step (default 1), @Int position (default 0)
 */

angular.module('ngCollaPicka', []).directive('ngCollaPicka', function(){
  var defaults = {
    rangeFrom: 0,
    rangeTo: 100,
    rangeStep: 1,
    position: 50,
    dragCursor: null
  };

  return {
      restrict: 'AE',
      scope: {
        rangeFrom: '@',
        rangeTo: '@',
        rangeStep: '@',
        position: '@'
      },
      template: '<div style="padding: 10px"><div style="position: relative; width: 50px; height: 200px; background: #ccc; border: 1px solid; cursor: pointer;">'
      +'<div class="collapicka-cursor" style="position: absolute; top: 10px; left: -10px; color: red;"> -> </div></div>',
      link: function(scope, iElement, iAttrs) {
        for (var prop in defaults) {
          if (defaults.hasOwnProperty(prop) && iAttrs.hasOwnProperty(prop) && typeof iAttrs[prop] !== 'undefined') {
            defaults[prop] = iAttrs[prop];
          }
        }

        $('.collapicka-cursor').draggable({
          containment: 'parent',
          axis: 'y',
          grid: [ 0, defaults.rangeStep ],
          stop: function( event, ui ) {
            var pos = ui.position.top,
              innerH = $(event.target.parentElement).innerHeight() - $(event.target).innerHeight(),
              k = innerH / ( defaults.rangeTo - defaults.rangeFrom );
            scope.position = Math.ceil( (innerH - pos) / k );
            console.log(scope.position);
            scope.$apply(defaults.dragCursor);
          }
        });
        
        
      }
  };
});