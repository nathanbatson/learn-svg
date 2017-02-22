import Ember from 'ember';

export default Ember.Controller.extend({
    links: [
        {route: "shapes", title: "Basic Shapes"},
        {route: "css", title: "CSS"},
        {route: "viewbox", title: "Viewbox and Viewport"},
        {route: "defs", title: "Defs"},
        {route: "shared-defs", title: "Shared Defs"},
        {route: "hbs", title: "SVG with HBS"}
    ]
});
