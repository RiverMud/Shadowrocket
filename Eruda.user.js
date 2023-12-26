// ==UserScript==
// @name         InjectEruda
// @version      0.1
// @description  Inject Eruda on specific page
// @author       Andy
// @match        https://www.9qihuo.com/*
// @grant        none
// ==/UserScript==

/* global eruda */

(function() {
    'use strict';

    var script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/eruda";
    document.body.appendChild(script);

    script.onload = function() {
        eruda.init();
    };
})();
