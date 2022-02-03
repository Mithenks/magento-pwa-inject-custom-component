FROM node:16.13-bullseye-slim

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && \
    apt-get install -y curl gnupg && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install -y yarn && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

ADD fix-perm.sh /fix-perm.sh
RUN chmod +x /fix-perm.sh

ENTRYPOINT [ "/fix-perm.sh" ]
