const cervezas = require("./cervezas.json");
const uniqueRandomArray = require("unique-random-array");
var _=require("lodash");
//añadi
module.exports = {
	todas: _.sortBy(cervezas, ["nombre"]),
	alazar: uniqueRandomArray(cervezas)
};