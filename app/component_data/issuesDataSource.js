'use strict';

define(

  [
    'components/flight/lib/component',
    'app/issue_data'
  ],

  function(defineComponent, dataStore) {
    return defineComponent(issuesDataSource);

    function issuesDataSource() {

      this.getIssues = function(ev, data) {
        this.trigger('issuesDataDidLoad', { issues: this.formatIssuesData() });
      };

      this.getIssue = function(ev, issueID) {
        issueID = parseInt(issueID);

        var issueData = dataStore.filter(function(issue) {
                          return issueID === issue.id
                        })[0];

        this.trigger('issueDataDidLoad', { issue: this.formatSingleIssueData(issueData) });
      };

      this.formatIssuesData = function() {
        var issues = [];

        dataStore.forEach(function(issue) {
          issues.push({
            id: issue.id,
            title: issue.title,
            updated_at: moment(issue.updated_at).fromNow()
          });
        }, this);

        return issues;
      };

      this.formatSingleIssueData = function(issueData) {
        return {
          id    : issueData.id,
          title : issueData.title,
          body  : issueData.body
        };
      };


      this.after('initialize', function() {
        this.on('issuesRequested', this.getIssues);
        this.on('issueRequested', this.getIssue);
      });

    } // issuesDataSource
  }
);
