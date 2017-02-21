import Ember from 'ember';

export default Ember.Component.extend({
    width: 500,
    height: 500,
    viewBox: "",
    paths: '',
    defs: '',

    actions: {
        error(){
            console.log('just some hbs errors');
        }
    }
});
