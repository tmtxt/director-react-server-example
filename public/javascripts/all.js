// Require modules
var main = require('./main.js');
var test1 = require('./test1.js');
var test2 = require('./test2.js');

var React = require('react');
var Router = require('director').Router;

// Director Client routing table
// If the user click on those link, the client will render the view
var routes = {
  '/test1': test,
  '/': index,
  '/test2': testTwo
};
var router = Router(routes).configure({html5history: true});
router.init();

// Route handler functions
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

// Util function
// Must return false to prevent default action of <a> tag
function setRoute(href){
  // set route using director
  router.setRoute(href);
  return false;
}
