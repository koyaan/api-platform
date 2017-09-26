FROM alpine:3.5

RUN apk add --no-cache varnish

COPY start.sh /usr/local/bin/docker-app-start

RUN chmod +x /usr/local/bin/docker-app-start


RUN apk add --no-cache --virtual .persistent-deps \
		ca-certificates \
		openssl
RUN wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64
RUN chmod +x /usr/local/bin/dumb-init

ENTRYPOINT ["dumb-init"]

CMD ["docker-app-start"]

# https://github.com/hashicorp/docker-consul/pull/61/files
#  As of docker 1.13, using docker run --init achieves the same outcome. oho?
# and very neatly get it by apk too!
# well not in compose.... https://github.com/docker/cli/pull/479
#https://blog.docker.com/2017/01/whats-new-in-docker-1-13/
# also gosu! https://github.com/tianon/gosu

