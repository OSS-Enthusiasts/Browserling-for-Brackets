// eslint-disable-next-line no-unused-vars
/* global $, brackets */

/**
 *  File: Main.js
 *  Author: github.com/OSS-Enthisiasts
 *  Description:
 *  @todo Add description
 */

// eslint-disable-next-line no-unused-vars
define((require, exports, module) => {
  // const Sentry = require('@sentry/node');
  // Sentry.init({ dsn: 'https://242a9a644d35453fbd84db17a22978ec@o315517.ingest.sentry.io/5243016' }); // Sentry error catching

  const CommandManager = brackets.getModule('command/CommandManager');
  const Menus = brackets.getModule('command/Menus');
  // const EditorManager = brackets.getModule('editor/EditorManager');

  // var ProjectManager = brackets.getModule("project/ProjectManager");
  // var FileUtils = brackets.getModule("file/FileUtils");
  // var DocumentManager = brackets.getModule("document/DocumentManager");
  // var NativeApp = brackets.getModule("utils/NativeApp");
  // var Commands = brackets.getModule("command/Commands");

  const menu = Menus.getMenu(Menus.AppMenuBar.VIEW_MENU);

  menu.addMenuDivider(); // Show a trailing line to separate our menus from Brackets' ones

  /** Sets up everything required for each category
  * Usage:
  * @param id - the id of the tool category, ie 'wta',
  * @param categoryTitle - the title, ie 'Web Tools',
  * @param categoryTools - array of the tools paired with the title and function
  *                        ie [{
  *                               title: 'URI Encode',
  *                               tool: require('./web/uri').encodeToURI,
  *                           }];
  */
  const stageMenu = (id, categoryTitle, categoryTools) => {
    let isToolEnabled = false;
    CommandManager.register(categoryTitle, `oss.bob.${id}`, () => {
      if (!isToolEnabled) {
        const subMenu = Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addSubMenu(categoryTitle, `OSS_BOB_MENU_${id}`);
        categoryTools.forEach((item, index) => {
          CommandManager.register(item.title, `oss_bob_${id}${index}`, () => {
            // eslint-disable-next-line no-alert
            alert('Execute conversion function here');
          });
          subMenu.addMenuItem(`oss_bob_${id}${index}`, null, Menus.FIRST);
        });
        isToolEnabled = true;
        CommandManager.get(`oss.bob.${id}`).setChecked(true);
      } else {
        Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).removeSubMenu(`OSS_BOB_MENU_${id}`); // Example with enc/dec 118
        CommandManager.get(`oss.bob.${id}`).setChecked(false);
        isToolEnabled = false;
      }
    });

    // Adding menu items
    menu.addMenuItem(`oss.bob.${id}`, categoryTitle, Menus.LAST);
  };

  // Set up category menus here using this format

  const WEB_TOOLS = [{
    title: 'URI Encode',
    tool: require('./web/uri').encodeToURI,
  }];
  const HASH_TOOLS = [{
    title: 'Calc MD5',
    tool: require('./hashing/MD5').encodeToURI,
  }];

  stageMenu('web', 'Web Tools', WEB_TOOLS);
  stageMenu('hash', 'Hashing Tools', HASH_TOOLS);
});
