'use strict';

define(

  [
    'components/flight/lib/component',
    'app/issue_data'
  ],

  function(defineComponent, dataStore) {
    return defineComponent(issue);

    function issue() {

      this.getIssue = function(ev, issueID) {
        issueID = parseInt(issueID);

        var issueData = dataStore.filter(function(issue) {
                          return issueID === issue.id
                        })[0];

        this.trigger('issueDataDidLoad', { issue: this.formatData(issueData) });
      };

      this.formatData = function(issueData) {
        return {
          id    : issueData.id,
          title : issueData.title,
          body  : issueData.body
        };
      };

      this.after('initialize', function() {
        this.on('issueRequested', this.getIssue);
      });
    }
  }
);
