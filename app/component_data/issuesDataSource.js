'use strict';

define(

  [
    'components/flight/lib/component',
    'app/issue_data'
  ],

  function(defineComponent, dataStore) {
    return defineComponent(issuesDataSource);

    function issuesDataSource() {

      this.getAllIssues = function(ev) {
        var issuesData = dataStore;
        this.trigger('issuesDataDidLoad', { issues: this.formatIssuesData(issuesData) });
      };

      this.getIssueByID = function(ev, requestedIssueID) {
        var requestedIssueData = dataStore.filter(function(issue) {
                                   return parseInt(requestedIssueID) === issue.id
                                 })[0];

        this.trigger('issueDataDidLoad', { issue: this.formatSingleIssueData(requestedIssueData) });
      };


      this.formatIssuesData = function(issuesData) {
        var formattedIssues = [];

        issuesData.forEach(function(issue) {
          formattedIssues.push({
            id: issue.id,
            title: issue.title,
            updated_at: moment(issue.updated_at).fromNow()
          });
        }, this);

        return formattedIssues;
      };

      this.formatSingleIssueData = function(issueData) {
        return {
          id    : issueData.id,
          title : issueData.title,
          body  : issueData.body
        };
      };


      this.after('initialize', function() {
        this.on('issuesRequested', this.getAllIssues);
        this.on('issueRequested', this.getIssueByID);
      });

    } // issuesDataSource
  }
);
