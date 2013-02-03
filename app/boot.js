'use strict';

define(

  [
    'app/component_data/issue_items',
    'app/component_ui/issue_items',

    'app/component_data/issue',
    'app/component_ui/issue'
  ],

  function(
    IssueItemsData,
    IssueItemsUI,

    IssueData,
    IssueUI
  ) {


    function initialize() {
      IssueItemsData.attachTo(document);
      IssueItemsUI.attachTo('#issue_items');

      IssueData.attachTo(document);
      IssueUI.attachTo('#issue_item');
    }

    return initialize;
  }
);
