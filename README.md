# knutz
NodeJS server using Express for routes and Mongoose to connect to a MongoDB

## Current build instructions
<!-- Build directory in Docker container and tag which will replace the hash id
- `docker build . -t nodejs-rest`
Run docker container with name 'knutz', environment variable VERSION (1.1), publishing container port to host <host>:<container> with an image name "nodejs-rest".
- `docker run --name=knutz --network=zygag --env VERSION=1.1 --publish 9000:3000 nodejs-rest` -->
Currently working on using a docker-compose to make sure that this service connects to the local bridge network called `xygag`.
```bash
$ docker-compose up
```
### TODO:
~~Learn namespaces for networking to get this to talk to narneso~~
Testing Mongoose
Testing NodeJS

## Sources
Mozilla Express Web Framework
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment

Transpiling ES6+ syntax with Node and Express
- https://www.freecodecamp.org/news/how-to-enable-es6-and-beyond-syntax-with-node-and-express-68d3e11fe1ab/

Compose Dockerfile to run Express on Node within Docker
- https://automationrhapsody.com/build-rest-api-express-node-js-run-docker/

Testing Express on NodeJs with Jest and Supertest
- https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6
- https://zellwk.com/blog/endpoint-testing/
- https://medium.com/@saplos123456/using-es6-import-and-export-statements-for-jest-testing-in-node-js-b20c8bd9041c
