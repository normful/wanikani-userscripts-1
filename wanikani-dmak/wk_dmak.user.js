// ==UserScript==
// @name        Wanikani Hitsuji Animated Stroke Order
// @version     0.9.1
// @author      acm
// @description Adds stroke animations using the DMAK library to WK
// @license     GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @namespace   wk_dmak
//
// @include     *://www.wanikani.com/*
//
// @updateURL   https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-dmak/wk_dmak.user.js
// @downloadURL https://github.com/mwil/wanikani-userscripts/raw/master/wanikani-dmak/wk_dmak.user.js
//
// @require     https://cdn.jsdelivr.net/npm/lodash@4.17.4/lodash.min.js
// @require     https://raw.githubusercontent.com/DmitryBaranovskiy/raphael/master/raphael.min.js
// @require     https://raw.githubusercontent.com/mbilbille/dmak/master/dist/dmak.min.js
//
// @resource    bootstrapcss https://raw.githubusercontent.com/mwil/wanikani-userscripts/7caebf537b4d02084d85f1a19d26b50c185d8d05/styles/bootstrap/css/bootstrap.crop.css
// @resource    bootstrapjs  https://raw.githubusercontent.com/mwil/wanikani-userscripts/8d4694c53273fbac4e6b888f4ab95a3fa16d31c5/styles/bootstrap/js/bootstrap.js
//
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/3c6ea0466951a1e58b75b2cb7a945ed7716082f7/utility/wk_interaction.js
//
// @require     https://raw.githubusercontent.com/normful/wanikani-userscripts-1/6e80d28f03fc27444d837c1369507295eb300afc/wanikani-dmak/wk_dmak.html.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/c01e4fd0bc4477c8f3c295ed2b0756837b056e8b/wanikani-dmak/wk_dmak.modal.js
// @require     https://raw.githubusercontent.com/mwil/wanikani-userscripts/c478f91c1fc7536cfdb3dcc535a224550c6fcf63/wanikani-dmak/wk_dmak.main.js
//
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_getResourceText
//
// @run-at      document-end
// ==/UserScript==
