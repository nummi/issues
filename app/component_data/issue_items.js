'use strict';

define(

  [
    'components/flight/lib/component',
    'components/mustache/mustache',
    'app/issue_data',
    'app/templates'
  ],

  function(defineComponent, Mustache, dataStore, templates) {
    return defineComponent(issueItems);

    function issueItems() {

      this.serveIssueItems = function(ev, data) {
        this.trigger('dataIssueItemsServed', { markup: this.renderItems(this.assembleItems()) });
      };

      this.renderItems = function(items) {
        return Mustache.render(templates.issueItem, {issueItems: items});
      };

      this.assembleItems = function() {
        var items = [];

        dataStore.forEach(function(each) {
          items.push(this.getItemForView(each));
        }, this);

        return items;
      };

      this.getItemForView = function(itemData) {
        var date = moment(itemData.updated_at);
        //date.format('MM/DD/YYYY - hh:mm:ssa')
        return {id: itemData.id, title: itemData.title, updated_at: date.fromNow()};
      };

      this.after("initialize", function() {
        this.on("uiIssueItemsRequested", this.serveIssueItems);
        this.on("dataIssueItemsRefreshRequested", this.serveIssueItems);
      });
    }
  }
);
