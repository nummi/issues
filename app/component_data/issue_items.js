'use strict';

define(

  [
    'components/flight/lib/component',
    'components/mustache/mustache',
    'app/data',
    'app/templates'
  ],

  function(defineComponent, Mustache, dataStore, templates) {
    return defineComponent(issueItems);

    function issueItems() {

      this.defaultAttrs({
        folder: 'inbox'
      });

      this.serveIssueItems = function(ev, data) {
        var folder = (data && data.folder) || this.attr.folder;
        this.trigger("dataIssueItemsServed", {markup: this.renderItems(this.assembleItems(folder))})
      };

      this.renderItems = function(items) {
        return Mustache.render(templates.issueItem, {issueItems: items});
      };

      this.assembleItems = function(folder) {
        var items = [];

        dataStore.issue.forEach(function(each) {
          if (each.folders && each.folders.indexOf(folder) > -1) {
            items.push(this.getItemForView(each));
          }
        }, this);

        return items;
      };

      this.getItemForView = function(itemData) {
        var thisItem, thisContact, msg

        thisItem = {id: itemData.id, important: itemData.important};

        thisContact = dataStore.contacts.filter(function(contact) {
          return contact.id == itemData.contact_id
        })[0];
        thisItem.name = [thisContact.firstName, thisContact.lastName].join(' ');

        var subj = itemData.subject;
        thisItem.formattedSubject = subj.length > 70 ? subj.slice(0, 70) + "..." : subj;

        var msg = itemData.message;
        thisItem.formattedMessage = msg.length > 70 ? msg.slice(0, 70) + "..." : msg;

        return thisItem;
      };

      this.after("initialize", function() {
        this.on("uiIssueItemsRequested", this.serveIssueItems);
        this.on("dataIssueItemsRefreshRequested", this.serveIssueItems);
      });
    }
  }
);
