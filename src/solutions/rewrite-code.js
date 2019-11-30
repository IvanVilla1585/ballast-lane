'use strict'

async function someThing (req, res) {
	try {
		const a = await someOtherFunction()
		const b = await somethingElseFunction()
		res.send('result')
	}catch(err) {
		res.send(err.stack)
	}
}

// solution

function someThingRewrite (req, res) {
  Promise.all([
    someOtherFunction(),
    somethingElseFunction()
  ]).then(([a, b]) => {
    res.send(`result ${a}, ${b}`)
  }).catch(err => {
    res.send(err.stack)
  })
}
