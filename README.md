# SMS (School/Course Managment System)
## Install
### Clone or download the repository in your work directory
```sh
$ git clone https://github.com/AbdelrahmanSadat/SMS.git
```

### Install Dependencies
The boilerplate uses two package.json files. One in the main or 
uppermost directory, and the other in /app
```sh
$ yarn
```
And
```sh
$ cd /app
$ yarn
```
We prefer yarn, but if you're using npm:
```sh
$ npm install
```


## Starting Development

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
yarn dev
```

## Packaging for Production

To package apps for the local platform:

```bash
yarn package
```

## Docs

See our [docs and guides here](https://electron-react-boilerplate.js.org/docs/installation)


### Common Issues
1. Make sure to install sequelize and sqlite3 in the app dir
2. In the webpack.config file, add 'pg','tedious','pg-hstore'
   to the externals array (hotfix hack thingy for sequelize)
3. Fix the unterminated comment in WrapperLodash (in the lodash dep.)
4. Add the semantic-ui-css missing theme if its's missing
  (Just copy it from their repo or a previous project)
5. Yarn postinstall (rebuilds and shit)

Make sure to check our issues section for any other problems