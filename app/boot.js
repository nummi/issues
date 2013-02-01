'use strict';

define(

  [
    'app/component_data/issue_items',
    'app/component_ui/issue_items',
  ],

  function(
    IssueItemsData,
    IssueItemsUI
  ) {


    function initialize() {
      IssueItemsData.attachTo(document);
      IssueItemsUI.attachTo('#issue_items', {itemContainerSelector: '#issue_items_TB'});
    }

    return initialize;
  }
);
