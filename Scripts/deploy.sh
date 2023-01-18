#!/bin/env sh
# This script is used to deploy the application to the server
# It is called by the CI/CD pipeline
# It is assumed that the server is already configured with the correct environment variables

# Build the application
npm run build

cd dist || exit

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:AndrewCrossan1/candyshopfrontend.git master:gh-pages

cd - || exit
