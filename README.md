> **Deprecated**: This repository has been depreacted and is not supported. You may be looking for [AgDS-Next](https://github.com/steelthreads/agds-next) instead.

# Ag Design System 

A system of React Components used by the Department of Agriculture's Export Service apps.

**How to use this library:**

* Docs 👉 [https://agds.dev](https://agds.dev)
* Read [USAGE.md](./USAGE.md)

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

Rebuild pancake (GOLD Design System) and compile to React (for @ag.ds/core):

    yarn pancake
    
    yarn pancake-to-react

## Publish 

All commits must have a [Changeset](https://github.com/changesets/changesets):

    yarn changeset

Changes will be published from CI on merge to `main` branch. 

To register no change, add an empty Changeset with:

    yarn changeset --empty 
