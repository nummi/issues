'use strict';

define(

  [
    'app/component_data/issuesDataSource',
    'app/component_ui/issuesUI',

    'app/component_data/issueDataSource',
    'app/component_ui/issueUI'
  ],

  function(
    IssuesDataSource,
    IssuesUI,

    IssueDataSource,
    IssueUI
  ) {


    function initialize() {
      IssuesDataSource.attachTo(document);
      IssuesUI.attachTo('#issue_items');

      IssueDataSource.attachTo(document);
      IssueUI.attachTo('#issue_item');
    }

    return initialize;
  }
);
