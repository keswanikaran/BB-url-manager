//// Just definea collection for URL model
//var URLList=Backbone.Collection.extend({
//    Model: URLModel,
//    localStorage: new Backbone.LocalStorage("urlCollection")
//});
//
//// Create an instance to make collection work!
//var URLColl=new URLList;

var URLColl = Backbone.Collection.extend({
    url:'http://localhost:3000/urllist',
    Model:URLModel

});
