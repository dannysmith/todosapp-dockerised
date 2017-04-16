# Demo of good project setup

* The backend, which is an express API running in a Docker container.
* The mongo container.
* A frontend, which is a SPA. This will eventually need to be built with WebPack etc and served from somewhere (potentially from a separate Docker container running nginx)

Run `docker-compose up` to spin everything up.

You'll have to run `npm install` in the `./backend` directory if you've just cloned this down.
