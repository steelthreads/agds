# Ag Design System 

A system of React Components used by the Department of Agriculture's Export Service apps.

## Set up 

Use the correct Node version:

    nvm use

Install packages:

    yarn 

## Scripts

Develop:

    yarn dev

Runs build across all repos:

    yarn build

Rebuild pancake (GOLD Design System):

    yarn pancake

## Publish 

All commits must have a [Changeset](https://github.com/changesets/changesets):

    yarn changeset

Changes will be published from CI on merge to `main` branch. 
