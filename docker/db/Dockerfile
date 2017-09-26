FROM mysql:5.7

COPY docker-healthcheck.sh /usr/local/bin/docker-healthcheck
RUN chmod +x /usr/local/bin/docker-healthcheck

# stolen from https://github.com/hashicorp/docker-base/blob/master/build.sh

RUN set -x \
	&& apt-get update && apt-get install -y --no-install-recommends ca-certificates wget && rm -rf /var/lib/apt/lists/*
RUN wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64
#&& apt-get purge -y --auto-remove ca-certificates wget
RUN chmod +x /usr/local/bin/dumb-init
RUN apt-get purge -y --auto-remove ca-certificates wget

ENTRYPOINT ["dumb-init"]
CMD ["docker-entrypoint.sh", "mysqld"]
HEALTHCHECK CMD ["docker-healthcheck"]
