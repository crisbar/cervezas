const cervezas = require("./cervezas.json");
const uniqueRandomArray = require("unique-random-array");
var _=require("lodash");
module.exports = {
	todas: _.sortBy(cervezas, ["nombre"]),
	alazar: uniqueRandomArray(cervezas)
};