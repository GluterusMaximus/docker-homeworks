# Docker commands

Build the docker image:  
`docker build -t gregorus/docker-hw3:1.0 .`

Run the image with memory and cpu constraints:  
`docker run -p 80:3000 -m 50M --cpu-period=20000 --cpu-quota=10000 gregorus/docker-hw3:1.0`

Push the image to dockerhub:  
`docker push gregorus/docker-hw3:1.0`

Pull the image from dockerhub:  
`docker pull gregorus/docker-hw3:1.0`
