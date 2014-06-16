# Single page web app with ReactJS (server-side and client-side), Director example 

- ReactJS [http://facebook.github.io/react/](http://facebook.github.io/react/)
- ReactJS on npm [https://www.npmjs.org/package/react](https://www.npmjs.org/package/react)
- Director [https://github.com/flatiron/director](https://github.com/flatiron/director)

# Deployment

Browserify Node package with these commands

````
browserify -r react > ./public/javascripts/react.js
browserify -r director > ./public/javascripts/director.js
````

Transform jsx

````
gulp jsx
````

Browserify React component from server to client

````
gulp browserify
````

Optional: there is a **watch** task if you want it auto transform jsx and
browserify

````
gulp watch
````

Finally, run the server with

````
node app.js
````

Open browser and access `http://localhost:3000/`
