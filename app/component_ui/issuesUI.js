'use strict';

define(

  [
    'components/flight/lib/component',
    './with_select',
    'components/mustache/mustache',
    'app/templates'
  ],

  function(defineComponent, withSelect, Mustache, templates) {
    return defineComponent(issuesUI, withSelect);

    function issuesUI() {

      this.defaultAttrs({
        selectedClass: 'selected',
        allowMultiSelect: false,
        selectionChangedEvent: 'uiIssueSelectionDidChange',
        itemSelector: '.list-view-row',
        selectedItemSelector: '.list-view-row.selected'
      });

      this.renderItems = function(data) {
        return Mustache.render(templates.issueItem, {issues: data.issues});
      };

      this.appendItems = function(ev, issuesData) {
        var html = this.renderItems(issuesData);
        this.$node.find('.list-view-content').html(html);
        this.trigger('uiIssueSelectionDidChange', {selectedIds: []});
      }

      this.updateItemSelection = function(ev, data) {
        this.trigger('issueRequested', data.selectedIds);
      }

      this.after('initialize', function() {
        this.on(document, 'issuesDataDidLoad', this.appendItems);
        this.on('uiIssueSelectionDidChange', this.updateItemSelection);
        this.trigger('issuesRequested');
      });

    } // issuesUI
  }
);
