// ==UserScript==
// @name         GoogleSearchRedirect
// @version      0.1
// @description  iOS默认搜索从google.cn重定向至google.com
// @author       RiverMud
// @match        https://www.google.cn/search*
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';
  const url = new URL(location);
  url.hostname = 'www.google.com';
  location.replace(url);
})();
