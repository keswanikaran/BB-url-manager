

var URLList = Backbone.View.extend({
    el: '.page',
    render: function(){
        var urllist = new URLColl();

        var that = this; //extending scope for fetch function.

        urllist.fetch({
            success:function(urls){
                var template = $("#url-list-template").html() ;

                that.$el.html(_.template(template, {urls: urls.models}));
            }
        })

    }
});

