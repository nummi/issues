'use strict';

define(

  [
    'components/flight/lib/component',
    './with_select'
  ],

  function(defineComponent, withSelect) {

    return defineComponent(issueItems, withSelect);

    function issueItems() {

      var selectedFolders = ['inbox']; //FIX ME
      var selectedIssueItems;

      this.defaultAttrs({
        selectedClass: 'selected',
        allowMultiSelect: true,
        selectionChangedEvent: 'uiIssueItemSelectionChanged',
        //selectors
        itemSelector: '.issue-item',
        selectedItemSelector: '.issue-item.selected'
      });

      this.renderItems = function(ev, data) {
        this.select('itemContainerSelector').html(data.markup);
        //new items, so no selections
        this.trigger('uiIssueItemSelectionChanged', {selectedIds: []});
      }

      this.updateIssueItemSelections = function(ev, data) {
        selectedIssueItems = data.selectedIds;
      }

      this.updateFolderSelections = function(ev, data) {
        selectedFolders = data.selectedIds;
      }

      this.requestDeletion = function() {
        this.trigger('uiMoveItemsRequested', {
          itemIds: selectedIssueItems,
          fromFolder: selectedFolders[0],
          toFolder: this.attr.deleteFolder
        });
      };

      this.after('initialize', function() {
        this.on(document, 'dataIssueItemsServed', this.renderItems);
        this.on(document, 'uiDeleteIssue', this.requestDeletion);

        this.on('uiIssueItemSelectionChanged', this.updateIssueItemSelections);
        this.on(document, 'uiFolderSelectionChanged', this.updateFolderSelections);

        this.trigger('uiIssueItemsRequested');
      });
    }
  }
);
