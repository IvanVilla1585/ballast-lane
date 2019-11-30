'use strict'

const foo = function () {
	this.someObject.someAttribute += 4
	console.log(this.someObject)
}

// const foo2 = () => {
// 	this.someObject.someAttribute += 4
// 	console.log(this.someObject)
// }

const context = {
	someObject: {
		someAttribute: 2
	}
}

/** 
 * The problem is that arrow functions doesn't have its owner 'this', this one takes the scope from are called. 
 * In this case, if you copy and paste this code into browser console, 'this' takes the value of 'window' object
 * and it doesn't have the someObject property, if this code is called from nodejs environment 'this' is an empty object.
 */

 // solution

 function foo2 () {
	this.someObject.someAttribute += 4
	console.log(this.someObject)
}

foo.call(context) // IT WORKS
foo2.call(context) // IT WORKS