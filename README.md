## Prerequisites

- Node (recommend v8.2.0 or higher)

### Access Locally
```
$ git clone https://github.com/patsplat/ps770.git
$ cd ps770
$ yarn
$ npm run develop
```
To test the CMS locally run a production build of the site:
```
$ npm run build
$ npm run serve
```

### Setting up the CMS
Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

## Debugging
Windows users might encounter ```node-gyp``` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.
```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')

Derived from https://github.com/AustinGreen/gatsby-starter-netlify-cms
