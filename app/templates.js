'use strict';

define(
  function() {
    var issueItem =
      '{{#issues}}\
        <div id="{{id}}" class="list-view-row">\
          <div class="list-view-row-main-title">\
            {{title}}\
          </div>\
          <div class="list-view-row-sub-title">\
            Updated {{updated_at}}\
          </div>\
        </div>\
       {{/issues}}';

    var issue =
      '<div class="detail-heading">{{issue.title}}</div>\
       <div class="detail-body"></div>';


    return {
      issueItem : issueItem,
      issue     : issue
    }
  }

);
