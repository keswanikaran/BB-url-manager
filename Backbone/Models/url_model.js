// Create a URL model
var URLModel=Backbone.Model.extend({
    urlRoot:'http://localhost:3000/saveurl',
    defaults: {
        urlname: "",
        description: ""
    }
});