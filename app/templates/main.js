define([
  'soma'
],
    function (soma) {
      'use strict';

      var App = soma.Application.extend({
        init: function () {
          // add command maps / mediator maps etc
        },
        start: function () {
          // dispatch start event
        }
      });

      new App();
    });