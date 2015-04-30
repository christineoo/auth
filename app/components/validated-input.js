import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
   focusOut: function(event) {
    this.set('focused', false);
    },
    showErrors: function() {
      this.set("showError", true);
      console.log("show error: " +this.set("showError", true));
    }
  }
});
