# scripts

`yarn build`
runs build across all repos

Using --root-mode upward is the special sauce to using Yarn workspaces. This tells Babel the node_modules are located in the root instead of nested inside each of the individual packages. This prevents each package from having the same node_modules and extracts them up to the root. We’ll be utilizing a similar approach for testing later.

`yarn bootstrap`
links our root dependencies to our packages
