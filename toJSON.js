Array.prototype.last = function() {
	if (this.length == 0) return undefined;
	return this[this.length-1];
};

const rl = require('readline').createInterface({
	input: process.stdin
});

var tree = [];
var stack = [tree];
var lastDepth = 0;
var currentNode = function() {
	return stack.last();
}

function validateDepth(depth, lastDepth) {
	if (depth - lastDepth > 1) throw new Error("Invalid format, can't jump more than one tab in");
}

rl.on('line', (line) => {
	var name = line.trim();

	if (name.length == 0) return;
	var depth = (line.match(/^\t*/))[0].length;

	var deeper = depth > lastDepth;
	var shallower = depth < lastDepth;

	if (deeper) {
		validateDepth(depth, lastDepth); // check the format is valid

		// convert the last line to a "parent" node
		var parent = currentNode().last();
		parent.children = [];

		// Make that line's children the "current node"
		stack.push( parent.children );
	} else if (shallower) {
		var pops = lastDepth - depth;
		while (pops--) stack.pop();
	}

	lastDepth = depth;
	currentNode().push( { name: name } );
});

rl.on('close', () => {
	console.log(JSON.stringify(tree, undefined, "  "));
})