'use strict';

var http = require('http');
var fs = require('fs');
var qs = require('querystring'); // gestion primitive des requêtes (sans 'express' et 'body-parser') pour les besoins de cet exercice

// app.use(function(req, res, next) {
//         res.header("Access-Control-Allow-Origin", 'http://localhost:8080');
//         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//         next();
//     });

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

// fonction utilitaire pour comparer les attributs et les valeurs des objets
const attributesEqual = (objA, objB) => Object.keys(objA).length === Object.keys(objB).length &&
      Object.keys(objA).map(i => objB[i] === objA[i]).every(i => i == true)
// fonction utilitaire pour comparer les clés des attributs seulement
const keysEqual = (objA, objB) => Object.keys(objA).length === Object.keys(objB).length &&
      Object.keys(objA).filter(i => Object.keys(objB).includes(i)).length == Object.keys(objA).length

const formule = 'PROGRAM=EQUILIB&TMIN=1000&T_units=TK&MASS=X&P_value=1&PRESSURE=ATM&TEMPERATURE=tk&AQUEOUS=noaqua&react1n=&REACT1=Si&react2n=1.5&REACT2=O2&react3n=&REACT3=&react4n=&REACT4=&REACT5=&CUT=1E-70&submit=Calculate+%3E%3E&format=OUTB&DIST=NODIST';

var objFormule = qs.parse(formule);

var dataFile = fs.readFileSync('data-output.json', 'UTF8');

var s = http.createServer(function (req, res) {
    var postData = 'initial';
    //    res.setHeader("Access-Control-Allow-Origin", "*");  // accepte toutes les origines
    res.setHeader("Access-Control-Allow-Origin", "null"); // accepte que la requête proviennent du fureteur directement
    //    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    // fonction de rappel pour l'événement 'data'
    req.on('data', function(data) {
	postData = data.toString();
	// message pour signaler l'erreur, mais on poursuit comme si c'était les valeurs attendues
	if(!keysEqual(objFormule, qs.parse(postData))) {
	    console.log('Requête non conforme (utilisez les valeurs de défaut)');
	    console.log(' attendu : ' + JSON.stringify(objFormule));
	    console.log(' reçu    : ' + JSON.stringify(qs.parse(data.toString())));
	}
    });
    // fonction de rappel pour l'événement 'end' (termine l'échange)
    req.on('end', function() {
	sleep(2000).then(() => {
	    res.writeHead(200, {'Content-Type': 'text/plain'});
	    res.write(dataFile);
	    res.end();
	    console.log('Requête :::' + postData + ':::\n');
//	    console.log('Réponse :::' + dataFile + ':::\n');
	});
    });
});

s.listen(8080);
