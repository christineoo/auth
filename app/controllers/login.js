import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations.Mixin, {

  token: localStorage.token,
  tokenChanged: function() {
    localStorage.token = this.get('token');
  }.observes('token'),

  actions:{
    userLogin: function(){
      var self = this;
    
      Ember.$.ajax({
        type: "GET",
        //url: "http://127.0.0.1:5000/",
        url: "http://stageapp-leprachaun.herokuapp.com/",
        contentType : "html/text",
        dataType: 'jsonp',
        success: function(data){
           console.log("data: " +data) 
          if (data.results){
            self.set('token', data.results.authtoken);
            self.transitionToRoute('home');
          }
          else {
            self.set('errorMessage', "invalid email/password");
          }
        }
      });
    }
  }
});
