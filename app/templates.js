'use strict';

define(
  function() {
    var issueItem =
      '{{#issueItems}}\
        <div id="{{id}}" class="list-view-row">\
          <div class="list-view-row-main-title">\
            {{title}}\
          </div>\
          <div class="list-view-row-sub-title">\
            Updated {{updated_at}}\
          </div>\
        </div>\
       {{/issueItems}}';

    var issue =
      '<h1>{{issue.title}}</h1>\
       <div>{{issue.body}}</div>';


    return {
      issueItem : issueItem,
      issue     : issue
    }
  }

);
