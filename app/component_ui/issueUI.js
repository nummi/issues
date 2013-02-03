'use strict';

define(

  [
    'components/flight/lib/component'
  ],

  function(defineComponent) {

    return defineComponent(issueItems);

    function issueItems() {

      this.renderItems = function(ev, data) {
        this.$node.find('.detail-view-content').html(data.markup);
      }

      this.after('initialize', function() {
        this.on(document, 'issueDataDidLoad', this.renderItems);
      });
    }
  }
);
