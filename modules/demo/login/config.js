define(function (require, module, exports) {
    module.exports = {
        resources : {
            script : {
                main: "main.js"
            },
            style : {
                main: "main.css"
            },
            source : {
                index: "index.html"
            },
            data : { 
            }
        },
        config : {
            level : 8,
            absolute : true,
            background : "#fff",
            style : ["main"],
            script : ["main"],
            source: ["index"],
            data: [],
            sandbox : true,
            cache : 0,
            timeout : 60,
            animation : true
        },
        param : {
          turnover: 0
        }
    }
})