var express = require('express');
var path = require("path");
var app = express();

var server = app.listen(1337, function () {
var host = server.address().address;
var port = server.address().port;

colors = {
            green: function (str) {
                return "\033[32m" + str + "\033[0m"
            },
            red: function (str) {
                return "\033[31m" + str + "\033[0m"
            },
            yellow: function (str) {
                return "\033[33m" + str + "\033[0m"
            }
         }

console.log("\n  " + colors.yellow("Dojo Team.\n  2015, Trello Like.\n") + "  ------------------\n")
console.log(colors.green("  Server running on port ") + colors.red(port) + "\n")
console.log(colors.yellow("  Par ordre d'apparition : \n  Eric Ondoa\n  Issame El Kharbili\n  Boris Monti\n  Matthieu Boudinot\n  Boliang Tan\n  Jamal Zidane\n  Françoise Lasserre\n  Alexis Mauroy\n  José Cardoso\n  Dominique Joisin") + "\n")

app.use(express.static(path.join(__dirname, '../')))

});
