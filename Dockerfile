# Todo: Create cli image and use it here: E.g FROM kaizendorks/vue:3
FROM node:11-alpine AS vuecli

LABEL maintainer="https://github.com/kaizendorks"

RUN npm install -g @vue/cli@^3.0.0 \
    && vue --version

USER node
WORKDIR /home/node

CMD ["vue"]

FROM vuecli AS ci

USER node

# Create a sample app and install auth0
RUN  vue create -d app
COPY --chown=node:node . ./auth0
WORKDIR /home/node/app
RUN yarn add --dev file:/home/node/auth0 \
    && vue invoke vue-cli-plugin-auth0 -d

USER root

# Hack around to dgoss test short living images
CMD ["sleep", "1d"]
