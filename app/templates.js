'use strict';

define(
  function() {
    var issueItem =
      '{{#issueItems}}\
        <tr id="{{id}}" class="issue-item">\
        {{#important}}\
          <td class="span1"><span class="label label-important">Important</span></td>\
        {{/important}}\
        {{^important}}\
          <td class="span1"><span>&nbsp;</span></td>\
        {{/important}}\
          <td class="span2 issueContact">{{name}}</td>\
          <td class="span8">\
            <span class="issueSubject">\
              {{formattedSubject}}\
            </span>\
            <span class="issueMessage">\
              - <a href="#">{{formattedMessage}}</a>\
            </span>\
          </td>\
        </tr>\
      {{/issueItems}}';


    return { issueItem: issueItem }
  }

);
