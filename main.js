/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Slide.js":
/*!*********************************!*\
  !*** ./src/components/Slide.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Slide: () => (/* binding */ Slide)\n/* harmony export */ });\nfunction Slide (imageURL, container) {\r\n  this.imageURL = imageURL\r\n  const elem = container.appendChild(document.createElement('div'))\r\n  elem.style = `background-image: url(${imageURL});`\r\n  this.init = x => Object.assign(elem.style, { left: x + '%' })\r\n  this.setPicture = pictureURL => Object.assign(elem.style, {\r\n    backgroundImage: `url(${pictureURL})`\r\n  })\r\n\r\n  this.mcFromTo = function (from, to, finalOpacity) {\r\n    Object.assign(elem.style, {\r\n      transition: 'none',\r\n      left: from + '%',\r\n      opacity: 1 - finalOpacity\r\n    })\r\n    setTimeout ( function () {\r\n      Object.assign(elem.style, {\r\n        transition: 'all 0.8s',\r\n        left: to + '%',\r\n        opacity: finalOpacity\r\n      })\r\n    }, 50)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://comics/./src/components/Slide.js?");

/***/ }),

/***/ "./src/components/butterfly.js":
/*!*************************************!*\
  !*** ./src/components/butterfly.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   butterfly: () => (/* binding */ butterfly)\n/* harmony export */ });\nconst {\r\n  getLeft,\r\n  getTop,\r\n  init,\r\n  setStyle,\r\n  fly\r\n} = (__webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\")[\"default\"])\r\n\r\nconst butterfly = Object.assign(new Image(), {\r\n  src: `${location.href}/images/butterfly-on-dark.gif`,\r\n  style: `\r\n    position: fixed;\r\n    transition: all .5s;\r\n    z-index: -1;\r\n  `,\r\n  getTop,\r\n  getLeft,\r\n  init,\r\n  setStyle,\r\n  fly\r\n})\r\n\n\n//# sourceURL=webpack://comics/./src/components/butterfly.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst context = __webpack_require__(\"./src/components sync ^\\\\.\\\\/.*$\")\n\nconst moduleNames = context.keys().filter(key => key !== './' && key !== './index' && key !== './index.js')\n\nconst modules = Object.assign({}, ...moduleNames.map(name => ({ [name.split('./').join('').split('.js').join('')]: context(name) })))\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign({}, ...Object.keys(modules).map(key => ({ [key]: modules[key][key] }))));\n\n\n//# sourceURL=webpack://comics/./src/components/index.js?");

/***/ }),

/***/ "./src/components/player.js":
/*!**********************************!*\
  !*** ./src/components/player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const host = location.href\r\n\r\nconst { formatString } = (__webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\")[\"default\"])\r\nconst { playerStyles } = (__webpack_require__(/*! ../css */ \"./src/css/index.js\")[\"default\"])\r\nconst { media } = (__webpack_require__(/*! ../configs */ \"./src/configs/index.js\")[\"default\"])\r\n\r\ndocument.head\r\n  .appendChild(document.createElement('style'))\r\n  .textContent = playerStyles\r\n\r\nconst [playButton, mediaButton] = [1, 2].map(() => document.body.appendChild(document.createElement('button')))\r\n\r\nconst audio = document.body.appendChild(document.createElement('audio'))\r\naudio.setAttribute('crossorigin', 'anonymous')\r\n\r\nconst audioContext = new AudioContext(window.AudioContext || window.webkitAudioContext)\r\nconst track = audioContext.createMediaElementSource(audio)\r\ntrack.connect(audioContext.destination)\r\n\r\nObject.assign(playButton, {\r\n  playing: false,\r\n  className: 'play-button',\r\n  onclick () {\r\n    audioContext.state === 'suspended' && audioContext.resume()\r\n    if (this.playing) audio.pause()\r\n    else audio.play()\r\n    this.className = this.playing ? 'play-button' : 'play-button paused'\r\n    this.playing = !this.playing\r\n  }\r\n})\r\n\r\nObject.assign(mediaButton, {\r\n  className: 'media-button',\r\n  innerText: '♫',\r\n  media: Number(localStorage.getItem('media')) || 0,\r\n  onclick () {\r\n    playButton.playing && playButton.dispatchEvent(new Event('click'))\r\n    this.media = this.media >= media.length - 1 ? 0 : this.media + 1\r\n    localStorage.setItem('media', this.media)\r\n    audio.setAttribute('src', `${host}/sounds/${media[this.media]}.mp3`)\r\n    !playButton.playing && playButton.dispatchEvent(new Event('click'))\r\n    demo.innerText = formatString(media[this.media])\r\n  }\r\n})\r\n\r\naudio.setAttribute('src', `${host}/sounds/${media[mediaButton.media]}.mp3`)\r\n\r\nconst demo = document.body.appendChild(document.createElement('h4'))\r\nObject.assign(demo, {\r\n  innerText: formatString(media[mediaButton.media]),\r\n  className: 'music-title'\r\n})\r\n\r\naudio.addEventListener('ended', () => {\r\n  Object.assign(playButton, {\r\n    playing: false,\r\n    className: 'play-button'\r\n  })\r\n}, false)\r\n\n\n//# sourceURL=webpack://comics/./src/components/player.js?");

/***/ }),

/***/ "./src/components/slider.js":
/*!**********************************!*\
  !*** ./src/components/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slide */ \"./src/components/Slide.js\");\n\r\nconst { typeWriter } = (__webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\")[\"default\"])\r\n\r\nconst { sliderStyles } = (__webpack_require__(/*! ../css */ \"./src/css/index.js\")[\"default\"])\r\nconst { slides, subtitles } = (__webpack_require__(/*! ../configs */ \"./src/configs/index.js\")[\"default\"])\r\n\r\nconst host = location.href\r\nconst numberOfSlides = 21\r\n\r\nconst getSlide = slideNum => `${host}/slides/${(slideNum + 1).toString().padStart(2, '0')}.jpg`\r\n\r\nclass PictureSlider extends HTMLElement {\r\n  constructor () {\r\n    super()\r\n\r\n    Object.assign(this, {\r\n      subtitles,\r\n      container: this.createElem('figure'),\r\n      currentIndex: 0,\r\n      currentSlide: 0\r\n    })\r\n\r\n    this.init()\r\n\r\n    const shadow = this.attachShadow({ mode: 'open' })\r\n    shadow.appendChild(this.container)\r\n    const style = this.createElem('style', shadow)\r\n    style.textContent = sliderStyles\r\n\r\n    this.btnLeft = Object.assign(this.createElem('button', this.container), {\r\n      id: 'left',\r\n      innerHTML: '<',\r\n      onclick: () => this.changePicture('left')\r\n    })\r\n\r\n    this.btnRight = Object.assign(this.createElem('button', this.container), {\r\n      id: 'right',\r\n      innerHTML: '>',\r\n      onclick: () => this.changePicture('right')\r\n    })\r\n\r\n    this.subtitle = Object.assign(this.createElem('pre', this.container), {\r\n      className: 'picture-subtitles'\r\n    })\r\n  }\r\n\r\n  connectedCallback () {\r\n    window.dispatchEvent(new Event('slider-connected'))\r\n  }\r\n\r\n  createElem (tagName, container) {\r\n    return (!container ? document.body : container)\r\n      .appendChild(document.createElement(tagName))\r\n  }\r\n\r\n  init () {\r\n    Object.assign(this, {\r\n      slides: [\r\n        new _Slide__WEBPACK_IMPORTED_MODULE_0__.Slide(getSlide(0), this.container),\r\n        new _Slide__WEBPACK_IMPORTED_MODULE_0__.Slide(getSlide(1), this.container)\r\n      ]\r\n    })\r\n    this.slides[0].mcFromTo(100, 10)\r\n    this.slides[1].init(100)\r\n  }\r\n\r\n  changePicture (direction) {\r\n    const to = direction === 'left' ? 100 : -100\r\n    const nextSlide = this.currentSlide === 0 ? 1 : 0\r\n    const nextIndex = this.getNextIndex(direction)\r\n    this.slides[nextSlide].setPicture(getSlide(nextIndex))\r\n    this.slides[nextSlide].init(-to)\r\n    this.slides[this.currentSlide].mcFromTo(10, to, 0)\r\n    this.slides[nextSlide].mcFromTo(-to, 10, 1)\r\n    setTimeout(function () {\r\n      this.currentSlide = nextSlide\r\n      this.currentIndex = nextIndex\r\n      typeWriter(this.subtitles[this.currentIndex], this.subtitle)\r\n    }.bind(this), 1000)\r\n  }\r\n\r\n  getNextIndex (dir) {\r\n    return dir === 'left'\r\n      ? this.currentIndex === 0\r\n        ? numberOfSlides - 1\r\n        : this.currentIndex - 1\r\n      : this.currentIndex === numberOfSlides - 1\r\n        ? 0\r\n        : this.currentIndex + 1\r\n  }\r\n\r\n  getBoundingRect () {\r\n    return this.container.querySelector('div').getBoundingClientRect()\r\n  }\r\n}\r\n\r\ncustomElements.define('picture-slider', PictureSlider)\r\n\n\n//# sourceURL=webpack://comics/./src/components/slider.js?");

/***/ }),

/***/ "./src/components sync ^\\.\\/.*$":
/*!****************************************************!*\
  !*** ./src/components/ sync nonrecursive ^\.\/.*$ ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./\": \"./src/components/index.js\",\n\t\"./Slide\": \"./src/components/Slide.js\",\n\t\"./Slide.js\": \"./src/components/Slide.js\",\n\t\"./butterfly\": \"./src/components/butterfly.js\",\n\t\"./butterfly.js\": \"./src/components/butterfly.js\",\n\t\"./index\": \"./src/components/index.js\",\n\t\"./index.js\": \"./src/components/index.js\",\n\t\"./player\": \"./src/components/player.js\",\n\t\"./player.js\": \"./src/components/player.js\",\n\t\"./slider\": \"./src/components/slider.js\",\n\t\"./slider.js\": \"./src/components/slider.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/components sync ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://comics/./src/components/_sync_nonrecursive_^\\.\\/.*$?");

/***/ }),

/***/ "./src/configs/host.js":
/*!*****************************!*\
  !*** ./src/configs/host.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   host: () => (/* binding */ host)\n/* harmony export */ });\nconst host = location.href\r\n\n\n//# sourceURL=webpack://comics/./src/configs/host.js?");

/***/ }),

/***/ "./src/configs/index.js":
/*!******************************!*\
  !*** ./src/configs/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst context = __webpack_require__(\"./src/configs sync ^\\\\.\\\\/.*$\")\n\nconst moduleNames = context.keys().filter(key => key !== './' && key !== './index' && key !== './index.js')\n\nconst modules = Object.assign({}, ...moduleNames.map(name => ({ [name.split('./').join('').split('.js').join('')]: context(name) })))\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign({}, ...Object.keys(modules).map(key => ({ [key]: modules[key][key] }))));\n\n\n//# sourceURL=webpack://comics/./src/configs/index.js?");

/***/ }),

/***/ "./src/configs/media.js":
/*!******************************!*\
  !*** ./src/configs/media.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   media: () => (/* binding */ media)\n/* harmony export */ });\nconst media = [\r\n  'desolate-fields-of-sorrow',\r\n  'enchanted-moonlight-ballad',\r\n  'eternal-twilight-sonata',\r\n  'haunted-shadows-on-hills',\r\n  'majestic-orchestral-calmness',\r\n  'midnight',\r\n  'midnight-moonlight-echoes',\r\n  'robotic-dance-waltz',\r\n  'serene-celestial-opera-peace',\r\n  'serene-grand-orchestral-journey',\r\n  'tranquil-cityscape-reflections',\r\n  'music-box',\r\n  'mystical-music',\r\n  'violin-music'\r\n]\r\n\n\n//# sourceURL=webpack://comics/./src/configs/media.js?");

/***/ }),

/***/ "./src/configs/mouseTailColors.js":
/*!****************************************!*\
  !*** ./src/configs/mouseTailColors.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mouseTailColors: () => (/* binding */ mouseTailColors)\n/* harmony export */ });\nconst mouseTailColors = ['#f00','#ff0','#0ff','#f50','#0f0','#f0f','#fa0','#09b']\r\n\n\n//# sourceURL=webpack://comics/./src/configs/mouseTailColors.js?");

/***/ }),

/***/ "./src/configs/subtitles.js":
/*!**********************************!*\
  !*** ./src/configs/subtitles.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   subtitles: () => (/* binding */ subtitles)\n/* harmony export */ });\nconst subtitles = [\r\n  '',\r\n  'And so went my day.',\r\n  'So, I feel like the noose around my neck is getting tighter and tighter.',\r\n  'I\\'m tired of thinking about things and doing things.',\r\n  'Tired.',\r\n  '',\r\n  'Wait here.',\r\n  '',\r\n  '',\r\n  '',\r\n  '',\r\n  'In some situations, the only way out is to wait.<br>And all we have is this moment.',\r\n  'Even when it feels like the last circle of hell<br>somehow I feel like if there\\'s something to wait for, you won\\'t drown in it.',\r\n  'It\\'s like an aqualung.<br>There you are underwater and it feels like there\\'s almost nothing left to breathe.<br>But you get a few gulps from up there.',\r\n  'I guess I would call it an aspiration, or a goal.<br>As long as you have purpose, you\\'ll live.<br>And it\\'s not hope, and it\\'s not a fruitless search for happiness.',\r\n  'To hell with happiness, those who seek it are the most unhappy people.<br>...<br>You know why I think you can do it?',\r\n  'Because you\\'re not going for a fruitless pursuit of happiness.',\r\n  'And someday you\\'re gonna surface and breathe.<br>And while you\\'re waiting, you\\'re gonna start looking around for something to do.<br>And maybe you\\'ll even find yourself wondering... who knows.',\r\n  'And you won\\'t be waiting alone.<br>You can share your waiting with others,<br>who want to share the moment when you can take off the scuba tank.',\r\n  'Look, the fireflies are on.',\r\n  ''\r\n]\r\n\n\n//# sourceURL=webpack://comics/./src/configs/subtitles.js?");

/***/ }),

/***/ "./src/configs sync ^\\.\\/.*$":
/*!*************************************************!*\
  !*** ./src/configs/ sync nonrecursive ^\.\/.*$ ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./\": \"./src/configs/index.js\",\n\t\"./host\": \"./src/configs/host.js\",\n\t\"./host.js\": \"./src/configs/host.js\",\n\t\"./index\": \"./src/configs/index.js\",\n\t\"./index.js\": \"./src/configs/index.js\",\n\t\"./media\": \"./src/configs/media.js\",\n\t\"./media.js\": \"./src/configs/media.js\",\n\t\"./mouseTailColors\": \"./src/configs/mouseTailColors.js\",\n\t\"./mouseTailColors.js\": \"./src/configs/mouseTailColors.js\",\n\t\"./subtitles\": \"./src/configs/subtitles.js\",\n\t\"./subtitles.js\": \"./src/configs/subtitles.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/configs sync ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://comics/./src/configs/_sync_nonrecursive_^\\.\\/.*$?");

/***/ }),

/***/ "./src/css/index.js":
/*!**************************!*\
  !*** ./src/css/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst context = __webpack_require__(\"./src/css sync ^\\\\.\\\\/.*$\")\n\nconst moduleNames = context.keys().filter(key => key !== './' && key !== './index' && key !== './index.js')\n\nconst modules = Object.assign({}, ...moduleNames.map(name => ({ [name.split('./').join('').split('.js').join('')]: context(name) })))\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign({}, ...Object.keys(modules).map(key => ({ [key]: modules[key][key] }))));\n\n\n//# sourceURL=webpack://comics/./src/css/index.js?");

/***/ }),

/***/ "./src/css/logoStyle.js":
/*!******************************!*\
  !*** ./src/css/logoStyle.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   logoStyle: () => (/* binding */ logoStyle)\n/* harmony export */ });\nconst logoStyle = `\r\n  .letters {\r\n    position: fixed;\r\n    font-family: Poppins, Montserrat;\r\n    transition: all 0.2s;\r\n    z-index: 1000;\r\n    font-size: 0.8rem;\r\n  }\r\n  .logo {\r\n    position: fixed;\r\n    bottom: 8px;\r\n    left: 8px;\r\n    width: 32px;\r\n    height: 32px;\r\n    transform: scaleX(-1);\r\n    color:#aaa;\r\n    font-size: 0.8rem;\r\n    transition: all .5s;\r\n    background-color: #000;\r\n    background-image: url(${location.href}/images/butterfly-1-invert.png);\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n  }\r\n  /*.logo:after {\r\n    content: \"Author\";\r\n  }*/\r\n  .logo:hover {\r\n    background-image: url(${location.href}/images/helen.png);\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    height: 96px;\r\n    width: 120px;\r\n    border-radius: 4px;\r\n    bottom: 0;\r\n    left: 0;\r\n  }\r\n  .logo:hover:after {\r\n    content: \"♥\";\r\n    padding: 4px;\r\n    color: #fff;\r\n  }\r\n`\r\n\n\n//# sourceURL=webpack://comics/./src/css/logoStyle.js?");

/***/ }),

/***/ "./src/css/playerStyles.js":
/*!*********************************!*\
  !*** ./src/css/playerStyles.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   playerStyles: () => (/* binding */ playerStyles)\n/* harmony export */ });\nconst playerStyles = `\r\n  .play-button, .media-button {\r\n    position: fixed;\r\n    border: 0;\r\n    padding: 0;\r\n    background: transparent;\r\n    box-sizing: border-box;\r\n    cursor: pointer;\r\n    z-index: 100;\r\n  }\r\n  .play-button {\r\n    top: 20px;\r\n    left: 16px;\r\n    width: 24px;\r\n    height: 24px;\r\n    border-color: transparent transparent transparent #09b;\r\n    transition: 100ms all ease;\r\n    border-style: solid;\r\n    border-width: 12px 0 12px 24px;\r\n  }\r\n\r\n  .play-button.paused {\r\n    border-style: double;\r\n    border-width: 0px 0 0px 24px;\r\n  }\r\n\r\n  .play-button:hover {\r\n    border-color: transparent transparent transparent #079;\r\n  }\r\n\r\n  .media-button {\r\n    position: fixed;\r\n    top: 12px;\r\n    right: 16px;\r\n    border-radius: 50%;\r\n    border: solid 3px #fa0;\r\n    width: 48px;\r\n    height: 48px;\r\n    font-size: 28px;\r\n    color: #fa0;\r\n    z-index: 50;\r\n  }\r\n\r\n  .media-button:hover {\r\n    border: solid 3px #f70;\r\n    color: #f70;\r\n  }\r\n\r\n  .music-title {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 52px;\r\n    font-weight: lighter;\r\n  }\r\n`\r\n\n\n//# sourceURL=webpack://comics/./src/css/playerStyles.js?");

/***/ }),

/***/ "./src/css/sliderStyles.js":
/*!*********************************!*\
  !*** ./src/css/sliderStyles.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sliderStyles: () => (/* binding */ sliderStyles)\n/* harmony export */ });\nconst sliderStyles = `\r\n  figure {\r\n    position: fixed;\r\n    top: 5%;\r\n    left: 0;\r\n    bottom: 15%;\r\n    right: 0;\r\n    overflow: hidden;\r\n    margin: 0;\r\n  }\r\n  button {\r\n    position: absolute;\r\n    top: 50%;\r\n    font-size: 30px;\r\n    z-index: 100;\r\n    background: transparent;\r\n    border: 0;\r\n    color: white;\r\n    font-weight: bold;\r\n    outline: none;\r\n    font-family: monospace;\r\n    cursor: pointer;\r\n  }\r\n  button:hover {\r\n    color: #ff9;\r\n  }\r\n  #left { left: 4%; }\r\n  #right { right: 4%; }\r\n  div {\r\n    position: absolute;\r\n    top: 10%;\r\n    bottom: 10%;\r\n    left: 10%;\r\n    width: 80%;\r\n    box-sizing: border-box;\r\n    margin:0;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    background-position: center center;\r\n    transition: all 0.8s;\r\n  }\r\n\r\n  .picture-subtitles {\r\n    position: fixed;\r\n    bottom: 8%;\r\n    width: 80%;\r\n    margin: 0 10%;\r\n    font-size: 16px;\r\n    font-family: Montserrat;\r\n    letter-spacing: 1.2px;\r\n    white-space: normal;\r\n    line-height: 1.5;\r\n  }\r\n`\r\n\n\n//# sourceURL=webpack://comics/./src/css/sliderStyles.js?");

/***/ }),

/***/ "./src/css sync ^\\.\\/.*$":
/*!*********************************************!*\
  !*** ./src/css/ sync nonrecursive ^\.\/.*$ ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./\": \"./src/css/index.js\",\n\t\"./index\": \"./src/css/index.js\",\n\t\"./index.js\": \"./src/css/index.js\",\n\t\"./logoStyle\": \"./src/css/logoStyle.js\",\n\t\"./logoStyle.js\": \"./src/css/logoStyle.js\",\n\t\"./playerStyles\": \"./src/css/playerStyles.js\",\n\t\"./playerStyles.js\": \"./src/css/playerStyles.js\",\n\t\"./sliderStyles\": \"./src/css/sliderStyles.js\",\n\t\"./sliderStyles.js\": \"./src/css/sliderStyles.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/css sync ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://comics/./src/css/_sync_nonrecursive_^\\.\\/.*$?");

/***/ }),

/***/ "./src/helpers/fly.js":
/*!****************************!*\
  !*** ./src/helpers/fly.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fly: () => (/* binding */ fly)\n/* harmony export */ });\n/* harmony import */ var _getStep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getStep */ \"./src/helpers/getStep.js\");\n/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setStyle */ \"./src/helpers/setStyle.js\");\n\r\n\r\n\r\nfunction fly () {\r\n  if (!this) return console.warn('Butterfly does not exist.')\r\n\r\n  const { top: flyTop, left: flyLeft } = this.style\r\n  const [top, left] = [flyTop, flyLeft].map(param => parseInt(param))\r\n\r\n  this.width = Math.max(48, this.width  + (0,_getStep__WEBPACK_IMPORTED_MODULE_0__.getStep)())\r\n\r\n  const height = Math.round(this.width * 0.75)\r\n\r\n  const [maxTop, maxRight] = [\r\n    window.innerHeight - height,\r\n    window.innerWidth - this.width\r\n  ]\r\n\r\n  Object.assign(this.style, {\r\n    top: Math.min(maxTop, Math.max(0, top + (0,_getStep__WEBPACK_IMPORTED_MODULE_0__.getStep)())) + 'px',\r\n    left: Math.min(maxRight, Math.max(0, left + (0,_getStep__WEBPACK_IMPORTED_MODULE_0__.getStep)())) + 'px'\r\n  })\r\n  if (!top || !left || top > maxTop || left > maxRight) (0,_setStyle__WEBPACK_IMPORTED_MODULE_1__.setStyle)(this)\r\n\r\n  requestAnimationFrame(fly.bind(this))\r\n}\r\n\n\n//# sourceURL=webpack://comics/./src/helpers/fly.js?");

/***/ }),

/***/ "./src/helpers/formatString.js":
/*!*************************************!*\
  !*** ./src/helpers/formatString.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatString: () => (/* binding */ formatString)\n/* harmony export */ });\nconst formatString = str => str.replaceAll('-', ' ')\r\n  .split(' ')\r\n  .map(word => word[0].toUpperCase() + word.slice(1))\r\n  .join(' ')\r\n\n\n//# sourceURL=webpack://comics/./src/helpers/formatString.js?");

/***/ }),

/***/ "./src/helpers/getAngle.js":
/*!*********************************!*\
  !*** ./src/helpers/getAngle.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAngle: () => (/* binding */ getAngle)\n/* harmony export */ });\nconst getAngle = () => parseInt(Math.random() * 180)\r\n\n\n//# sourceURL=webpack://comics/./src/helpers/getAngle.js?");

/***/ }),

/***/ "./src/helpers/getLeft.js":
/*!********************************!*\
  !*** ./src/helpers/getLeft.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLeft: () => (/* binding */ getLeft)\n/* harmony export */ });\nfunction getLeft () {\r\n  const tmp = Math.round(window.innerWidth - this.width)\r\n\r\n  // const left = tmp < this.boxLeft - this.width / 2 || tmp > this.boxRight\r\n  //   ? tmp\r\n  //   : Math.random(Math.random() > 0.5 ? this.boxRight : this.boxLeft - this.width / 2)\r\n\r\n  return tmp - 48\r\n}\r\n\n\n//# sourceURL=webpack://comics/./src/helpers/getLeft.js?");

/***/ }),

/***/ "./src/helpers/getStep.js":
/*!********************************!*\
  !*** ./src/helpers/getStep.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStep: () => (/* binding */ getStep)\n/* harmony export */ });\nconst getStep = () => Math.random() > 0.5 ? -1 : 1\r\n\n\n//# sourceURL=webpack://comics/./src/helpers/getStep.js?");

/***/ }),

/***/ "./src/helpers/getTop.js":
/*!*******************************!*\
  !*** ./src/helpers/getTop.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTop: () => (/* binding */ getTop)\n/* harmony export */ });\nfunction getTop () {\r\n  const height = parseInt(this.width * 0.75)\r\n  const tmp = parseInt(window.innerHeight - height)\r\n\r\n  // const top = tmp < this.boxBottom + height / 2\r\n  //   ? Math.round(this.boxBottom + height / 2)\r\n  //   : tmp > this.boxTop - height / 2\r\n  //     ? Math.round(this.boxTop - height / 2)\r\n  //     : tmp\r\n\r\n  return tmp - 48\r\n}\r\n\n\n//# sourceURL=webpack://comics/./src/helpers/getTop.js?");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst context = __webpack_require__(\"./src/helpers sync ^\\\\.\\\\/.*$\")\n\nconst moduleNames = context.keys().filter(key => key !== './' && key !== './index' && key !== './index.js')\n\nconst modules = Object.assign({}, ...moduleNames.map(name => ({ [name.split('./').join('').split('.js').join('')]: context(name) })))\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign({}, ...Object.keys(modules).map(key => ({ [key]: modules[key][key] }))));\n\n\n//# sourceURL=webpack://comics/./src/helpers/index.js?");

/***/ }),

/***/ "./src/helpers/init.js":
/*!*****************************!*\
  !*** ./src/helpers/init.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   init: () => (/* binding */ init)\n/* harmony export */ });\nfunction init ({ top: boxTop, left: boxLeft, bottom: boxBottom, right: boxRight }) {\r\n  Object.assign(this, {\r\n    boxTop,\r\n    boxLeft,\r\n    boxBottom,\r\n    boxRight\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://comics/./src/helpers/init.js?");

/***/ }),

/***/ "./src/helpers/mouseTail.js":
/*!**********************************!*\
  !*** ./src/helpers/mouseTail.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMouseTail: () => (/* binding */ createMouseTail)\n/* harmony export */ });\nconst { mouseTailColors } = (__webpack_require__(/*! ../configs */ \"./src/configs/index.js\")[\"default\"])\r\nconst { logoStyle } = (__webpack_require__(/*! ../css */ \"./src/css/index.js\")[\"default\"])\r\n\r\nfunction createMouseTail (text) {\r\n  const colors = mouseTailColors\r\n  const letters = text.split('')\r\n  let currentMousePosition = { x: 0, y: 0 }\r\n  let currentTime = new Date().getTime()\r\n  const elems = []\r\n\r\n  const parentElem = document.createElement('div')\r\n  document.body.insertBefore(parentElem, document.body.firstChild)\r\n\r\n  const shadow = parentElem.attachShadow({ mode: 'closed' })\r\n  Object.assign(shadow.appendChild(document.createElement('div')), {\r\n    className: 'logo',\r\n    link: 'https://www.tiktok.com/@whisperr_of_solitude/photo/7365279245402115346',\r\n    onclick () {\r\n      window.open(this.link, '_blank')\r\n    }\r\n  })\r\n  shadow\r\n    .appendChild((() => {\r\n      const style = document.createElement('style')\r\n      style.textContent = logoStyle\r\n      return style\r\n    })())\r\n\r\n    function appendLetter () {\r\n      const getColor = () => colors[Math.round(Math.random() * 8)]\r\n      elems.push(Object.assign(document.createElement('p'), {\r\n        className: 'letters',\r\n        innerHTML: letters[elems.length],\r\n        style: `color: ${getColor()}`\r\n      }))\r\n\r\n      shadow.appendChild(elems[elems.length - 1])\r\n    }\r\n\r\n    const dist = event => Math.max(Math.abs(currentMousePosition.x - event.clientX ), Math.abs(currentMousePosition.y - event.clientY))\r\n\r\n    const test = event => dist(event) > 10 && new Date().getTime() - currentTime > 50\r\n\r\n    function redraw () {\r\n      for (let i = elems.length - 1; i > 0; i--) {\r\n        [elems[i].style.top, elems[i].style.left] = [elems[i-1].style.top, elems[i-1].style.left]\r\n      }\r\n      elems[0].style.top = arguments[1] + 'px'\r\n      elems[0].style.left = arguments[0] + 'px'\r\n    }\r\n\r\n    return function (event) {\r\n      if (!test(event)) return\r\n      currentTime = new Date().getTime()\r\n      currentMousePosition = { x: event.clientX, y: event.clientY }\r\n      elems.length < letters.length && appendLetter()\r\n      requestAnimationFrame(redraw.bind(null, event.clientX, event.clientY))\r\n    }\r\n}\r\n\r\ndocument.body.onmousemove = createMouseTail('⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆')\r\n\n\n//# sourceURL=webpack://comics/./src/helpers/mouseTail.js?");

/***/ }),

/***/ "./src/helpers/setStyle.js":
/*!*********************************!*\
  !*** ./src/helpers/setStyle.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setStyle: () => (/* binding */ setStyle)\n/* harmony export */ });\n/* harmony import */ var _getAngle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAngle */ \"./src/helpers/getAngle.js\");\n\r\n\r\nfunction setStyle () {\r\n  this.width = Math.round(Math.max(80, Math.random() * 180))\r\n  Object.assign(this.style, {\r\n    top: `${this.getTop()}px`,\r\n    left: `${this.getLeft()}px`,\r\n    transform: 'scale(-1)'\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://comics/./src/helpers/setStyle.js?");

/***/ }),

/***/ "./src/helpers/typeWriter.js":
/*!***********************************!*\
  !*** ./src/helpers/typeWriter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   typeWriter: () => (/* binding */ typeWriter)\n/* harmony export */ });\nconst ms = 80\r\n\r\nfunction typeWriter (string, placeholder) {\r\n  placeholder.innerHTML = ''\r\n  const lines = string.split('<br>')\r\n  let time = 0\r\n  lines.forEach((line, num) => {\r\n    const elem = placeholder.appendChild(document.createElement('p'))\r\n    const chars = line.split('')\r\n    chars.forEach((char, index) => setTimeout(() => { elem.textContent += char }, time + index * ms))\r\n    time += line.length * ms\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://comics/./src/helpers/typeWriter.js?");

/***/ }),

/***/ "./src/helpers sync ^\\.\\/.*$":
/*!*************************************************!*\
  !*** ./src/helpers/ sync nonrecursive ^\.\/.*$ ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./\": \"./src/helpers/index.js\",\n\t\"./fly\": \"./src/helpers/fly.js\",\n\t\"./fly.js\": \"./src/helpers/fly.js\",\n\t\"./formatString\": \"./src/helpers/formatString.js\",\n\t\"./formatString.js\": \"./src/helpers/formatString.js\",\n\t\"./getAngle\": \"./src/helpers/getAngle.js\",\n\t\"./getAngle.js\": \"./src/helpers/getAngle.js\",\n\t\"./getLeft\": \"./src/helpers/getLeft.js\",\n\t\"./getLeft.js\": \"./src/helpers/getLeft.js\",\n\t\"./getStep\": \"./src/helpers/getStep.js\",\n\t\"./getStep.js\": \"./src/helpers/getStep.js\",\n\t\"./getTop\": \"./src/helpers/getTop.js\",\n\t\"./getTop.js\": \"./src/helpers/getTop.js\",\n\t\"./index\": \"./src/helpers/index.js\",\n\t\"./index.js\": \"./src/helpers/index.js\",\n\t\"./init\": \"./src/helpers/init.js\",\n\t\"./init.js\": \"./src/helpers/init.js\",\n\t\"./mouseTail\": \"./src/helpers/mouseTail.js\",\n\t\"./mouseTail.js\": \"./src/helpers/mouseTail.js\",\n\t\"./setStyle\": \"./src/helpers/setStyle.js\",\n\t\"./setStyle.js\": \"./src/helpers/setStyle.js\",\n\t\"./typeWriter\": \"./src/helpers/typeWriter.js\",\n\t\"./typeWriter.js\": \"./src/helpers/typeWriter.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/helpers sync ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://comics/./src/helpers/_sync_nonrecursive_^\\.\\/.*$?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { butterfly, slider } = (__webpack_require__(/*! ./components */ \"./src/components/index.js\")[\"default\"])\r\n\r\nObject.assign(document.body.style, {\r\n  background: '#000',\r\n  color: '#eee',\r\n  fontFamily: 'Montserrat'\r\n})\r\n\r\nfunction connected (event) {\r\n  document.body.appendChild(butterfly)\r\n  const rect = document.querySelector('picture-slider').getBoundingRect()\r\n  butterfly.init(rect)\r\n  butterfly.setStyle()\r\n  requestAnimationFrame(butterfly.fly.bind(butterfly))\r\n}\r\n\r\nfunction resized (event) {\r\n  const rect = document.querySelector('picture-slider').getBoundingRect()\r\n  init(butterfly, rect)\r\n  setStyle(butterfly)\r\n}\r\n\r\nwindow.addEventListener('slider-connected', connected)\r\nwindow.addEventListener('resize', resized)\r\n\n\n//# sourceURL=webpack://comics/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;