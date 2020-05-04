FROM nginx

WORKDIR /app
COPY conf.d/nginx.conf /etc/nginx/nginx.conf
COPY conf.d/json_validator.js /etc/nginx/conf.d/json_validator.js
COPY conf.d/api_gateway.conf /etc/nginx/conf.d/api_gateway.conf
COPY conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY conf.d/proxy_forward.conf /etc/nginx/conf.d/proxy_forward.conf

VOLUME [ "${pwd}/app" ]


RUN apt update -y && \
    apt install -y nodejs curl npm vim net-tools && \
    npm install express
