import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index-aleluya');
  this.route('sobrenos-aleluya');
  this.route('planillas-aleluya');
  this.route('medios-aleluya');
});

export default Router;
