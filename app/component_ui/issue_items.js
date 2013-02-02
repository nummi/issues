'use strict';

define(

  [
    'components/flight/lib/component',
    './with_select'
  ],

  function(defineComponent, withSelect) {

    return defineComponent(issueItems, withSelect);

    function issueItems() {

      var selectedItems;

      this.defaultAttrs({
        selectedClass: 'selected',
        allowMultiSelect: false,
        selectionChangedEvent: 'uiIssueItemSelectionChanged',
        //selectors
        itemSelector: '.list-view-row',
        selectedItemSelector: '.list-view-row.selected'
      });

      this.renderItems = function(ev, data) {
        this.$node.find('.list-view-content').html(data.markup);
        this.trigger('uiIssueItemSelectionChanged', {selectedIds: []});
      }

      this.updateItemSelections = function(ev, data) {
        selectedItems = data.selectedIds;
      }

      this.after('initialize', function() {
        this.on(document, 'dataIssueItemsServed', this.renderItems);
        this.on('uiIssueItemSelectionChanged', this.updateItemSelections);
        this.trigger('uiIssueItemsRequested');
      });
    }
  }
);
