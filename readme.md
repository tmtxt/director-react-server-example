# Single page web app with ReactJS (server-side and client-side), Director example 

- ReactJS [http://facebook.github.io/react/](http://facebook.github.io/react/)
- ReactJS on npm [https://www.npmjs.org/package/react](https://www.npmjs.org/package/react)
- Director [https://github.com/flatiron/director](https://github.com/flatiron/director)

# Deployment

Browserify Node packages

````
gulp browserify-lib
````

Transform JSX files (this is required because the server needs those js files to
work properly. However, the below task launches this task automatically).

````
gulp jsx
````

Browserify React components from server to client (this task automatically runs
the jsx task)

````
gulp browserify-modules
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
