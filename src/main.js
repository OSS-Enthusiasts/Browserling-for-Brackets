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
  const EditorManager = brackets.getModule('editor/EditorManager');
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
  * @param id - the id of the encodeTool category, ie 'wta',
  * @param categoryTitle - the encoderTitle, ie 'Web Tools',
  * @param categoryTools - array of the encodeTools paired with the encoderTitle and function
  *                        ie [{
  *                               encoderTitle: 'URI Encode',
  *                               encodeTool: require('./web/uri').encodeToURI,
  *                           }];
  */
  const convertInput = function convertInput(convertor) {
    const editor = EditorManager.getFocusedEditor();
    if (editor) {
      // eslint-disable-next-line no-underscore-dangle
      const selectedText = editor._codeMirror.getSelections();
      const converted = convertor(selectedText[0]);
      // eslint-disable-next-line no-underscore-dangle
      editor._codeMirror.replaceSelections([converted]);
    }
  };

  const stageMenu = (id, categoryTitle, categoryTools) => {
    let isToolEnabled = false;
    CommandManager.register(categoryTitle, `oss.bob.${id}`, () => {
      if (!isToolEnabled) {
        const subMenu = Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addSubMenu(categoryTitle, `OSS_BOB_MENU_${id}`);
        subMenu.addMenuDivider();
        categoryTools.forEach((item, index) => {
          CommandManager.register(item.encoderTitle, `oss_bob_enc_${id}${index}`, () => {
            // eslint-disable-next-line no-alert
            //            alert('Execute conversion function here');
            convertInput(item.encodeTool);
          });
          subMenu.addMenuItem(`oss_bob_enc_${id}${index}`, null, Menus.FIRST);

          if (item.decoderTitle) {
            CommandManager.register(item.decoderTitle, `oss_bob_dec_${id}${index}`, () => {
              convertInput(item.decodeTool);
            });
            subMenu.addMenuItem(`oss_bob_dec_${id}${index}`, null, Menus.LAST);
          }
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
    encoderTitle: 'String to URI',
    encodeTool: require('./web/uri').encodeToURI,
    decoderTitle: 'URI to String',
    decodeTool: require('./web/uri').decodeFromURI,
  },
  {
    encoderTitle: 'String to Binary',
    encodeTool: require('./web/bin').encodeToBin,
    decoderTitle: 'Binary to String',
    decodeTool: require('./web/bin').decodeFromBin,
  },
  {
    encoderTitle: 'String to Hexadecimal',
    encodeTool: require('./web/hexadecimal').encodeToHex,
    decoderTitle: 'Hexadecimal to String',
    decodeTool: require('./web/hexadecimal').decodeFromHex,
  },
  {
    encoderTitle: 'String to PHPSerialize',
    encodeTool: require('./web/PHPSerialize').encodeToPHPSerial,
    decoderTitle: 'PHPSerialize to String',
    decodeTool: require('./web/PHPSerialize').decodeFromPHPSerial,
  },
  {
    encoderTitle: 'NL to <br>',
    encodeTool: require('./web/nl2br').encodeNlToBr,
    decoderTitle: '<br> to NL',
    decodeTool: require('./web/nl2br').decodeNlFromBr,
  },

  ];
  const HASH_TOOLS = [{
    encoderTitle: 'Hash using MD5',
    encodeTool: require('./hashing/MD5').encodeToMD5,
  },
  {
    encoderTitle: 'Hash using SHA1',
    encodeTool: require('./hashing/SHA1').encodeToSHA1,
  },
  {
    encoderTitle: 'Hash using SHA256',
    encodeTool: require('./hashing/SHA256').encodeToSHA256,
  },
  {
    encoderTitle: 'Hash using SHA512',
    encodeTool: require('./hashing/SHA512').encodeToSHA512,
  }];

  stageMenu('web', 'Web Tools', WEB_TOOLS);
  stageMenu('hash', 'Hashing Tools', HASH_TOOLS);
});
