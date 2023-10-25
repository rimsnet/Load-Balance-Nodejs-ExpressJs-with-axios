const express = require('express');
const app1 = express();
const app2 = express();
const app3 = express();

// Handler
const handler = num => (req,res)=>{
	const { method, url, headers, body } = req;
	res.send('Response from server Test: ' + num);
}

// Receive request and pass to handler method
app1.get('*', handler(1)).post('*', handler(1));
app2.get('*', handler(2)).post('*', handler(2));
app3.get('*', handler(3)).post('*', handler(3));

// Start server on PORT 3000
app1.listen(3000, err =>{
	err ?
	console.log("Failed PORT 3000"):
	console.log("Application Server PORT 3000");
});

// Start server on PORT 3001
app2.listen(3001, err =>{
	err ?
	console.log("Failed PORT 3001"):
	console.log("Application Server PORT 3001");
});

// Start server on PORT 3002
app3.listen(3002, err =>{
	err ?
	console.log("Failed PORT 3002"):
	console.log("Application Server PORT 3002");
});

