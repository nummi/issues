//Em.LOG_BINDINGS                  = true
Em.ENV.RAISE_ON_DEPRECATION      = true
Em.LOG_STACKTRACE_ON_DEPRECATION = true

window.App = Em.Application.create({
  LOG_TRANSITIONS: true,
  rake: {
    routes:    function() { console.log(Em.keys(App.Router.router.recognizer.names)); },
    templates: function() { console.log(Em.keys(Em.TEMPLATES)); }
  }
});


// CONTROLLERS:

App.IssuesController = Em.ArrayController.extend({
  searchQuery: '',

  filteredAndSortedIssues: function() {
    var issues      = this.get('content');
    var searchQuery = this.get('searchQuery');

    if(searchQuery !== '') {
      var regex = new RegExp(searchQuery, 'i');

      issues = issues.filter(function(i) {
        return regex.test(i.get('title'));
      });
    }

    return Em.ArrayProxy.createWithMixins(Em.SortableMixin, {
      sortProperties: this.get('updated_at'),
      sortAscending: false,
      content: issues
    });

  }.property('searchQuery', 'content.@each')
});



// ROUTER:

App.Router.map(function() {
  this.resource('issues', function() {
    this.resource('issue', { path: ':issue_id' });
  });
});

App.IndexRoute = Em.Route.extend({
  redirect: function() { this.transitionTo('issues'); }
});

App.IssuesRoute = Em.Route.extend({
  model: function() {
    return App.Issue.find();
  },
});



// DATA:

App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
});

App.Issue = DS.Model.extend({
  number:     DS.attr('number'),
  title:      DS.attr('string'),
  body:       DS.attr('string'),
  state:      DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
});


// HANDLEBARS HELPERS:
Ember.Handlebars.registerBoundHelper('date', function(date) {
  return moment(date).fromNow();
});

window.sd = new Showdown.converter();
Ember.Handlebars.registerBoundHelper('markdown', function(input) {
  return new Em.Handlebars.SafeString(sd.makeHtml(input));
});
