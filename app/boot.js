'use strict';

define(

  [
    'app/component_data/issuesDataSource',
    'app/component_ui/issueListingUI',
    'app/component_ui/issueDetailUI'
  ],

  function(
    IssuesDataSource,
    IssueListingUI,
    IssueDetailUI
  ) {

    function initialize() {
      IssuesDataSource.attachTo(document);
      IssueListingUI.attachTo('#issue_items');
      IssueDetailUI.attachTo('#issue_item');
    }

    return initialize;
  }
);
