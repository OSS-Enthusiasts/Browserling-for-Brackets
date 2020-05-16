'use strict';
require('amd-loader');

define(function (require, exports, module) {
    'use strict';
	const Sentry = require('@sentry/node');
	Sentry.init({ dsn: 'https://242a9a644d35453fbd84db17a22978ec@o315517.ingest.sentry.io/5243016' }); // Sentry error catching
    console.log("INITIALIZING BOB EXTENSION");
    var CommandManager = brackets.getModule("command/CommandManager");
    var Menus          = brackets.getModule("command/Menus");
    //var EditorManager  = brackets.getModule("editor/EditorManager");
    //var ProjectManager = brackets.getModule("project/ProjectManager");
    //var FileUtils = brackets.getModule("file/FileUtils");    
    //var DocumentManager = brackets.getModule("document/DocumentManager");    
    //var NativeApp = brackets.getModule("utils/NativeApp");
    //var Commands = brackets.getModule("command/Commands");
    
    
    var wta_ID = "bob.wta"; // WTA = WebToolsActivation 
    var wta_NAME = "Web Tools";
    function wta() {
        console.log("Executing Command WTA");
    }


    CommandManager.register(wta_NAME, wta_ID, wta);
    
    var menu = Menus.getMenu(Menus.AppMenuBar.VIEW_MENU);
    menu.addMenuDivider();
    menu.addMenuItem(wta_ID);
    
});