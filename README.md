# Demo of good project setup

* The backend, which is an express API running in a Docker container.
* The mongo container.
* A frontend, which is a SPA. This will eventually need to be built with WebPack etc and served from somewhere (potentially from a separate Docker container running nginx)

Run `docker-compose up` to spin everything up.

You'll have to run `npm install` in the `./backend` directory if you've just cloned this down.

TODO:

[ ] Build out frontend using VueJS.
[ ] Build out the backend functionality a bit.
[ ] Convert front-end to multi-file, built with WebPack
[ ] Serve the compiled frontend from a seperate container running nginx (maybe?)
[ ] Migrate to use [this docker setup](http://tech.osteel.me/posts/2017/01/15/how-to-use-docker-for-local-web-development-an-update.html).
[ ] Confirm it works on a clean server
