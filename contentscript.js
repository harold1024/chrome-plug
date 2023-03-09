class Selector {
    constructor(configs) {
        this.config = configs;
    }

    select() {
        'use strict';
        function importScript(scriptUrl) {
            const el = document.createElement("script");
            el.src = chrome.runtime.getURL(scriptUrl);
            el.onload = function () {
                this.remove();
            };
            (document.head || document.documentElement).appendChild(el);
        }
        importScript("index.js")
    }


}

const selector = new Selector([]);
selector.select();