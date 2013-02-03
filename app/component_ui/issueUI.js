'use strict';

define(

  [
    'components/flight/lib/component',
    'components/mustache/mustache',
    'app/templates'
  ],

  function(defineComponent, Mustache, templates) {

    return defineComponent(issueUI);

    function issueUI() {

      this.appendItem = function(ev, data) {
        var html = Mustache.render(templates.issue, {issue: data.issue})
        this.$node.find('.detail-view-content').html(html);
      };

      this.after('initialize', function() {
        this.on(document, 'issueDataDidLoad', this.appendItem);
      });
    }
  }
);
