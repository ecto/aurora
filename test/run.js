var brain = require('brain');
var b   = new brain.NeuralNetwork();
var say = require('say');
var sys = require('sys');
var p   = require('prompt');
var s   = say.speak;

say.voice('Vicki');

l(3,'Running Aurora Core v0.1b');


var run = function() {
    p().ask('','input').tap(function(vars){
	s(vars.input);
    }).end();
}

run();
