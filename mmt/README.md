React/Redux/SaSS/Webpack
=====

Includes:
- React
  - A root component (App) and a sample child component
- Redux
  - Basic reducer/action/container setup for one simple method (changing the 'theme')
- SaSS
  - Using `.scss` instead of `.sass` for easier transfer in case you want to use vanilla CSS or LESS instead
- Webpack
  - Using `babel-loader` for Javascript with ES6 and React presets
  - Using `style-loader`, `css-loader`, and `sass-loader` for CSS (looks for `.scss` files)


Get Started
------

```
$ git clone https://github.com/nishankkumar/nishankkumar.github.io.git
$ npm install
$ npm start
$ open http://localhost:8080/
```


Dependency Versions
------
Look in `package.json` for dev dependencies.

```
"react": "^15.6.2",
"react-dom": "^15.6.2",
"react-redux": "^4.4.5",
"redux": "^3.6.0",
"sass": "^0.5.0"
```


For Ststic File Generation
------
Run below command for buiding project.

```
npm run build

Enjoy!
