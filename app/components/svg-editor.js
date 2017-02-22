import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['svg-editor'],
    title: "<SVG>",
    width: 500,
    height: 330,
    viewBox: null,
    preserveAspectRatio: null,
    advanced: false,
    extra: false,
    defs: null,
    paths: ''
});
