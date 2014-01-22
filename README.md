# INDESTRUCTIBLEART.COM

This is the [haiku](https://npmjs.org/package/haiku) source code for [indestructibleart.com](http://www.indestructibleart.com).

## Running locally

To run the server locally you will first need to install the dependencies node and npm and then do:

    npm install

Once the dependencies are installed you can run the local server to view your work by using the npm start script:

    npm start

## WIP Live Previewer

To see the super, SUPER beta version of the live previewer, run the server and
then go to localhost:8080/create. This is only a preview of what's to come. Ain't
nothing being synced or saved. Yet.

To disable caching locally (ie, not have to restart the app every time you make an update), insert ", cache: false" on line 97 of node_modules/haiku/bin/haiku, right above ", url: '/'". Go onnnnnnnnn, do it. Don't cost nothin'.
