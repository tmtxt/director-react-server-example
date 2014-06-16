var main = require('./main.js');
var test1 = require('./test1.js');
var test2 = require('./test2.js');
var React = require('react');
var Router = require('director').Router;

var routes = {
  '/test1': test,
  '/': index,
  '/test2': testTwo
};
var router = Router(routes).configure({html5history: true});
router.init();

function index () {
  console.log('index');
  React.renderComponent(main(), document.getElementById('content'));
}

function test () {
  console.log('test1');
  React.renderComponent(test1(), document.getElementById('content'));
}

function testTwo () {
  console.log('test2');
  React.renderComponent(test2(), document.getElementById('content'));
}

function setRoute(href){
  router.setRoute(href);
  return false;
}

// React.renderComponent(main(), document.getElementById('content'));
