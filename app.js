var less = require('less');
var fs = require('fs');

fs.readFile("ykt-dark.less", "utf8", function (err, contents) {
    console.log("Файл открыт");
    less.render(contents, function (e, output) {
        fs.writeFile("ykt-dark.css", output.css, function (e) {
            console.log(e);
        });
    });
});