'use strict';

define(

  [
    'components/flight/lib/component',
    'app/issue_data'
  ],

  function(defineComponent, dataStore) {
    return defineComponent(issueItems);

    function issueItems() {

      this.getIssues = function(ev, data) {
        this.trigger('issuesDataDidLoad', { issues: this.massageData() });
      };

      this.massageData = function() {
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

      this.after('initialize', function() {
        this.on('issuesRequested', this.getIssues);
      });
    }
  }
);
