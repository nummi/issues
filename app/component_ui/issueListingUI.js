'use strict';

define(

  [
    'components/flight/lib/component',
    'app/mixins/with_select',
    'components/mustache/mustache',
    'app/templates'
  ],

  function(defineComponent, withSelect, Mustache, templates) {
    return defineComponent(issueListingUI, withSelect);

    function issueListingUI() {

      this.defaultAttrs({
        selectedClass: 'selected',
        allowMultiSelect: false,
        selectionChangedEvent: 'uiIssueSelectionDidChange',
        itemSelector: '.list-view-row',
        selectedItemSelector: '.list-view-row.selected'
      });

      this.appendItems = function(ev, data) {
        var html = Mustache.render(templates.issueItem, {issues: data.issues});
        this.$node.find('.list-view-content').html(html);
      };

      this.updateItemSelection = function(ev, data) {
        this.trigger('issueRequested', data.selectedIds);
      };

      this.after('initialize', function() {
        this.on(document, 'issuesDataDidLoad', this.appendItems);
        this.on('uiIssueSelectionDidChange', this.updateItemSelection);
        this.trigger('issuesRequested');
      });

    } // issueListingUI
  }
);
