

var ADDURL = Backbone.View.extend({
    el: '.page',
    render: function(){
        var template = $("#url-add-template").html() ;

        this.$el.html(_.template(template,{}));
    },
    events:{
        'submit .edit-url-form' : 'saveURL'
    },
    saveURL: function(ev){
        urlData = $(ev.currentTarget).serializeObject();

        var newURL = new URLModel();

        //Backbone.emulateHTTP = true;

        newURL.save(urlData,{
            type:'POST',
            success: function(url){
                console.log(url.toJSON);
                router.navigate('',{trigger:true});
            },
            error: function(url){
                console.log(url);

            }
        })
        return false;
    }

});

