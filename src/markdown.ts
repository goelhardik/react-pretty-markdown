var hljs = require("highlight.js");
var Remarkable = require("remarkable");
var md = new Remarkable("full", {
    html: false,        // Enable HTML tags in source
    xhtmlOut: false,        // Use '/' to close single tags (<br />)
    breaks: false,        // Convert '\n' in paragraphs into <br>
    langPrefix: 'language-',  // CSS language prefix for fenced blocks
    linkify: true,         // autoconvert URL-like texts to links
    linkTarget: '',           // set target to open link in

    // Enable some language-neutral replacements + quotes beautification
    typographer: false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: '“”‘’',

    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    highlight: function (str: any, lang: any) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                console.log("LANG HIGHLIGHT", lang);
                return hljs.highlight(lang, str).value;
            } catch (__) { }
        }

        try {
            console.log("AUTO HIGHLIGHT");
            return hljs.highlightAuto(str).value;
        } catch (__) { }

        console.log("DEFAULT HIGHLIGHT");
        return ''; // use external default escaping
    }
});

export default md;