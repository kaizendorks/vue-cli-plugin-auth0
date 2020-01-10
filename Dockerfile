FROM kaizendorks/vue:4 as develop

# Create a sample app and install auth0
RUN  vue create -d app
COPY --chown=node:node . ./auth0
WORKDIR /src/app
RUN yarn add --dev file:/src/auth0 \
    && vue invoke vue-cli-plugin-auth0 \
      --configuredAuth0 y \
      --auth0Domain fake \
      --auth0ClientId fake

# Hack around to dgoss test short living images
CMD ["sleep", "1d"]
