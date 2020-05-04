# Nginx Validating Request Bodies (njs module)

## Build
docker build -t nginx-jv .

## Run command
docker run -p 80:80 --name nginx -d nginx-jv

## Run command with volume mount
docker run -p 80:80 -v $(pwd)/app:/app --name nginx -d nginx-jv

## exec
docker exec -it nginx bash

## reload nginx
nginx -s reload

## Stop and destroy
    ```
    docker rm -f nginx
    ```

## Test the functionality
* Login into the container and run a sample app
    ```
    docker exec -it nginx
    ```
    ```
    node server.js
    ```
* Now open a new terminal and deploy error.js
    ```
    docker exec -it nginx
    ```
    ```
    node error.js
    ```
* Now post the json request to test it.
    - Valid
    ```
    curl -X POST -H 'Content-Type: application/json' -d '{"key1": "value1", "key2": "value2", "key3": "value3"}' http://localhost
    ```
    - Invalid
    ```
    curl -X POST -H 'Content-Type: application/json' -d '{"key1": "value1", "key2": "value2", "key3": "value3",,,,,}' http://localhost
    ```

## Clean up environment
    ```
    docker rm -f nginx && docker rmi nginx-jv
    ```