import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('shapes');
    this.route('css');
    this.route('viewbox');
    this.route('defs');
    this.route('shared-defs');
    this.route('hbs');
});

export default Router;
