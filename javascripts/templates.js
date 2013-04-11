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
      '<div class="detail-heading">{{issue.number}} - {{issue.title}}</div>\
       <div class="detail-meta">\
         <div class="detail-meta-item"><span>State:</span> {{issue.state}}</div>\
         <div class="detail-meta-item"><span>Author:</span> {{issue.author}}</div>\
         <div class="detail-meta-item"><span>Created:</span> {{issue.created}}</div>\
         <div class="detail-meta-item"><span>Last updated:</span> {{issue.updated}}</div>\
       </div>\
       <div class="detail-body"></div>';


    return {
      issueItem : issueItem,
      issue     : issue
    }
  }

);
