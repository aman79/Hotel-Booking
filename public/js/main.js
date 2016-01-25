/**
* Main JS
* js/main.js
* configure require.js
*/
require.config({
     baseUrl:'js',
          paths : {
              'jquery' : 'lib/jquery',
              'underscore' : 'lib/underscore',
              'bootstrap' : 'lib/bootstrap',
              'backbone'    :    'lib/backbone',
              'localStorage'     : 'lib/backbone.localStorage',
              'text'    :    'lib/text'
          },
          shim : {           /*this is used to give the dependecies of non AMD module like 
                                      jquery or underscore*/
                   'backbone' :  {
                        deps : ['jquery','underscore'],
                        exports : 'backbone'
                   },
                   'underscore' : {
                        deps : ['jquery'],
                        exports :'_'
                   },
                   'localStorage' : {
                        deps : ['backbone']
                   }
              }
});
require(['views/masterView'],function(MasterView){
   
     var masterView= new MasterView();
     masterView.render();
     
});






