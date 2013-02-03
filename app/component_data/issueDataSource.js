'use strict';

define(

  [
    'components/flight/lib/component',
    'components/mustache/mustache',
    'app/issue_data',
    'app/templates'
  ],

  function(defineComponent, Mustache, dataStore, templates) {
    return defineComponent(issue);

    function issue() {

      this.serveIssue = function(ev, issueID) {
        if(!issueID) { return; }
        this.trigger('issueDataDidLoad',
                     { markup: this.renderItem( this.getItemForView(issueID) ) });
      };

      this.renderItem = function(itemData) {
        return Mustache.render(templates.issue, {issue: itemData});
      };

      this.getItemForView = function(issueID) {
        issueID = parseInt(issueID);
        var itemData = dataStore.filter(function(issue) {
                         return issueID === issue.id
                       })[0];
        return {
          id    : itemData.id,
          title : itemData.title,
          body  : itemData.body
        };
      };

      this.after('initialize', function() {
        this.on('issueRequested', this.serveIssue);
      });
    }
  }
);
