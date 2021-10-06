# Servidor Web com NodeJs rodando em container Docker

## Get started

Install the dependencies...

```bash
cd docker-intro
npm install
```

Install the [Docker](https://www.docker.com/)

Prerequisites

> WSL 2  
> Ubuntu

Then start

```bash
docker-compose up
```

Then stop

```bash
ctrol c
```

---

### Main commands

> Example: docker build -t docker-intro/dockernode .

    - docker -v: Show docker version
    - docker login: Log in to the docker
    - docker build: create an image from the Dockerfile
    - -t: is the name/tag of the image
    - docker-intro/dockernode: name I chose for the image
    - '.': where the Dockerfile is (in this case it is a '.' because the command will be executed in the same directory as the Dockerfile is located

    - docker images: List created images

> Example: docker run -p 3000:3000 -d docker-intro/dockernode

    - docker run: create a container
    - -p 3000:3000: The container now hears port 3000
    - -d: detach, process runs in background
    - docker-intro/dockernode: container name

    - docker ps: listed the process running in the Docker
    - docker stop 'container id': stop the container
    - docker start 'container id': start container
    - docker logs 'container id': View container logs
    - docker-compose up: start the service by building the project according to the Dockerfile
    - docker rmi 'container id': stop the container and delete the image
    - docker rm 'container id': remove the container
