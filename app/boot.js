'use strict';

define(

  [
    'app/component_data/issuesDataSource',
    'app/component_ui/issuesUI',
    'app/component_ui/issueUI'
  ],

  function(
    IssuesDataSource,
    IssuesUI,
    IssueUI
  ) {


    function initialize() {
      IssuesDataSource.attachTo(document);
      IssuesUI.attachTo('#issue_items');
      IssueUI.attachTo('#issue_item');
    }

    return initialize;
  }
);
