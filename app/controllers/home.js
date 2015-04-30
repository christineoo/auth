import Ember from 'ember';

export default Ember.Controller.extend({
    currentPath: null,
    onPathChanged: Ember.observer('target.url', function() {
         Ember.run.next(this, function() {
             var url =  window.location.href;
             this.set('currentPath', url.substring(url.lastIndexOf("/"), url.length));
         });
     }),

    isSelected: function() {
      if (this.get('currentPath') === '/home'){
        return 'testing';
      }
      else {
        return '';
      }
    }.property('currentPath')
});
