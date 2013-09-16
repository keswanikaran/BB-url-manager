var Router = Backbone.Router.extend({
    routes: {
        '':'home',
        'newurl':'addUrl'
    }

});

var urlList = new URLList();
var addURL = new ADDURL();

var router = new Router();

router.on('route:home',function(){
   urlList.render() ;
});


router.on('route:addUrl',function(){
       addURL.render();
    });

Backbone.history.start();
