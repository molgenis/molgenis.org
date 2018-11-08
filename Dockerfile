FROM nginx

COPY _site /usr/share/nginx/html

RUN mkdir /etc/nginx/redirect.d

COPY deploy/nginx/redirect.conf /etc/nginx/redirect.d
COPY deploy/nginx/default.conf /etc/nginx/conf.d

