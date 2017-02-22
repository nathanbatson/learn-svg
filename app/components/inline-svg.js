import Ember from 'ember';

export default Ember.Component.extend({
    width: 500,
    height: 500,
    viewBox: null,
    paths: '',
    defs: '',
    preserveAspectRatio: null,
    actions: {
        error(){
            console.log('inline-svg error');
        }
    }
});
