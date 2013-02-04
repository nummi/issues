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
        var body = markdown.toHTML(data.issue.body);
        this.$node.find('.detail-view-content').html(html);
        this.$node.find('.detail-body').html(body);

      };

      this.after('initialize', function() {
        this.on(document, 'issueDataDidLoad', this.appendItem);
      });
    }
  }
);
