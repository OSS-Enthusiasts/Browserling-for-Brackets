/* eslint-disable func-names */
// eslint-disable-next-line max-len
/* jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
// eslint-disable-next-line no-unused-vars
/* global $, brackets */


/**
 *  File: Main.js
 *  Author: github.com/OSS-Enthisiasts
 *  Description:  This extension allows you to encode/decode selection
 */

// eslint-disable-next-line no-unused-vars
define((require, exports, module) => {
  //const Sentry = require('@sentry/node');
  //Sentry.init({ dsn: 'https://242a9a644d35453fbd84db17a22978ec@o315517.ingest.sentry.io/5243016' }); // Sentry error catching

  const CommandManager = brackets.getModule('command/CommandManager');
  const Menus = brackets.getModule('command/Menus');
  // var EditorManager  = brackets.getModule("editor/EditorManager");
  // var ProjectManager = brackets.getModule("project/ProjectManager");
  // var FileUtils = brackets.getModule("file/FileUtils");
  // var DocumentManager = brackets.getModule("document/DocumentManager");
  // var NativeApp = brackets.getModule("utils/NativeApp");
  // var Commands = brackets.getModule("command/Commands");


  const WtaName = 'Web Tools'; // WTA = WebToolsActivation
  const WtaID = 'bob.Web_Tools';
  function wta() {
    // AirBnB standard does will throw errors when you leave console.log
    // console.log('Executing Command WTA');


  }

  CommandManager.register(WtaName, WtaID, wta);
  const menu = Menus.getMenu(Menus.AppMenuBar.VIEW_MENU);
  menu.addMenuDivider();
  menu.addMenuItem(WtaID, WtaName, Menus.LAST);
});
