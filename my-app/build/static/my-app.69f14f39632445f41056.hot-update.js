webpackHotUpdate("my-app",{

/***/ "./packages/mars-theme/src/components/post.js":
/*!****************************************************!*\
  !*** ./packages/mars-theme/src/components/post.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ \"./packages/mars-theme/src/components/link.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list */ \"./packages/mars-theme/src/components/list/index.js\");\n/* harmony import */ var _featured_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./featured-media */ \"./packages/mars-theme/src/components/featured-media.js\");\nfunction _templateObject6(){var data=_taggedTemplateLiteral([\"\\n  color: rgba(12, 17, 43, 0.8);\\n  word-break: break-word;\\n\\n  * {\\n    max-width: 100%;\\n  }\\n\\n  p {\\n    line-height: 1.6em;\\n  }\\n\\n  img {\\n    width: 100%;\\n    object-fit: cover;\\n    object-position: center;\\n  }\\n\\n  figure {\\n    margin: 24px auto;\\n    /* next line overrides an inline style of the figure element. */\\n    width: 100% !important;\\n\\n    figcaption {\\n      font-size: 0.7em;\\n    }\\n  }\\n\\n  iframe {\\n    display: block;\\n    margin: auto;\\n  }\\n\\n  blockquote {\\n    margin: 16px 0;\\n    background-color: rgba(0, 0, 0, 0.1);\\n    border-left: 4px solid rgba(12, 17, 43);\\n    padding: 4px 16px;\\n  }\\n\\n  a {\\n    color: rgb(31, 56, 197);\\n    text-decoration: underline;\\n  }\\n\\n  /* WordPress Core Align Classes */\\n\\n  @media (min-width: 420px) {\\n    img.aligncenter,\\n    img.alignleft,\\n    img.alignright {\\n      width: auto;\\n    }\\n\\n    .aligncenter {\\n      display: block;\\n      margin-left: auto;\\n      margin-right: auto;\\n    }\\n\\n    .alignright {\\n      float: right;\\n      margin-left: 24px;\\n    }\\n\\n    .alignleft {\\n      float: left;\\n      margin-right: 24px;\\n    }\\n  }\\n\"]);_templateObject6=function _templateObject6(){return data;};return data;}function _templateObject5(){var data=_taggedTemplateLiteral([\"\\n  color: rgba(12, 17, 43, 0.9);\\n  font-size: 0.9em;\\n  display: inline;\\n\"]);_templateObject5=function _templateObject5(){return data;};return data;}function _templateObject4(){var data=_taggedTemplateLiteral([\"\\n  color: rgba(12, 17, 43, 0.9);\\n  font-size: 0.9em;\\n  display: inline;\\n\"]);_templateObject4=function _templateObject4(){return data;};return data;}function _templateObject3(){var data=_taggedTemplateLiteral([\"\\n  padding: 15px 0;\\n\"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=_taggedTemplateLiteral([\"\\n  margin: 0;\\n  margin-top: 24px;\\n  margin-bottom: 8px;\\n  color: rgba(12, 17, 43);\\n\"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=_taggedTemplateLiteral([\"\\n  width: 800px;\\n  margin: 0;\\n  padding: 24px;\\n\"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Post=(_ref)=>{var{state,actions,libraries}=_ref;// Get info of current post.\nvar data=state.source.get(state.router.link);// Get the the post.\nvar post=state.source[data.type][data.id];// Get the author.\nvar author=state.source.author[post.author];// Get a date for humans.\nvar date=new Date(post.date);// Prefetch home posts and the list component.\nObject(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(()=>{actions.source.fetch(\"/\");_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"].preload();},[]);return data.isReady?Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Container,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Title,{dangerouslySetInnerHTML:{__html:post.title.rendered}}),data.isPost&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(StyledLink,{link:author.link},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Author,null,\"By \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"b\",null,author.name))),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Fecha,null,\" \",\"on \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"b\",null,date.toDateString())))),state.theme.featured.showOnPost&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(_featured_media__WEBPACK_IMPORTED_MODULE_5__[\"default\"],{id:post.featured_media}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(Body,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(FeaturedImage,null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(libraries.html2react.Component,{html:post.content.rendered}))):null;};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Post));var Container=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject());var Title=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].h1(_templateObject2());var StyledLink=Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"])(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_templateObject3());var Author=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].p(_templateObject4());var Fecha=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].p(_templateObject5());var Body=frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"].div(_templateObject6());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3Bvc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3Bvc3QuanM/ZGVkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCBGZWF0dXJlZE1lZGlhIGZyb20gXCIuL2ZlYXR1cmVkLW1lZGlhXCI7XG5cbmNvbnN0IFBvc3QgPSAoeyBzdGF0ZSwgYWN0aW9ucywgbGlicmFyaWVzIH0pID0+IHtcbiAgLy8gR2V0IGluZm8gb2YgY3VycmVudCBwb3N0LlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIC8vIEdldCB0aGUgdGhlIHBvc3QuXG4gIGNvbnN0IHBvc3QgPSBzdGF0ZS5zb3VyY2VbZGF0YS50eXBlXVtkYXRhLmlkXTtcbiAgLy8gR2V0IHRoZSBhdXRob3IuXG4gIGNvbnN0IGF1dGhvciA9IHN0YXRlLnNvdXJjZS5hdXRob3JbcG9zdC5hdXRob3JdO1xuICAvLyBHZXQgYSBkYXRlIGZvciBodW1hbnMuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwb3N0LmRhdGUpO1xuXG4gIC8vIFByZWZldGNoIGhvbWUgcG9zdHMgYW5kIHRoZSBsaXN0IGNvbXBvbmVudC5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY3Rpb25zLnNvdXJjZS5mZXRjaChcIi9cIik7XG4gICAgTGlzdC5wcmVsb2FkKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZGF0YS5pc1JlYWR5ID8gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8VGl0bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LnRpdGxlLnJlbmRlcmVkIH19IC8+XG4gICAgICAgIHtkYXRhLmlzUG9zdCAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxTdHlsZWRMaW5rIGxpbms9e2F1dGhvci5saW5rfT5cbiAgICAgICAgICAgICAgPEF1dGhvcj5cbiAgICAgICAgICAgICAgICBCeSA8Yj57YXV0aG9yLm5hbWV9PC9iPlxuICAgICAgICAgICAgICA8L0F1dGhvcj5cbiAgICAgICAgICAgIDwvU3R5bGVkTGluaz5cbiAgICAgICAgICAgIDxGZWNoYT5cbiAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICBvbiA8Yj57ZGF0ZS50b0RhdGVTdHJpbmcoKX08L2I+XG4gICAgICAgICAgICA8L0ZlY2hhPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7c3RhdGUudGhlbWUuZmVhdHVyZWQuc2hvd09uUG9zdCAmJiAoXG4gICAgICAgIDxGZWF0dXJlZE1lZGlhIGlkPXtwb3N0LmZlYXR1cmVkX21lZGlhfSAvPlxuICAgICAgKX1cbiAgICAgIDxCb2R5PlxuICAgICAgICA8RmVhdHVyZWRJbWFnZSAvPlxuICAgICAgICA8bGlicmFyaWVzLmh0bWwycmVhY3QuQ29tcG9uZW50IGh0bWw9e3Bvc3QuY29udGVudC5yZW5kZXJlZH0gLz5cbiAgICAgIDwvQm9keT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKSA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvc3QpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMjRweDtcbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgY29sb3I6IHJnYmEoMTIsIDE3LCA0Myk7XG5gO1xuXG5jb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkKExpbmspYFxuICBwYWRkaW5nOiAxNXB4IDA7XG5gO1xuXG5jb25zdCBBdXRob3IgPSBzdHlsZWQucGBcbiAgY29sb3I6IHJnYmEoMTIsIDE3LCA0MywgMC45KTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZGlzcGxheTogaW5saW5lO1xuYDtcblxuY29uc3QgRmVjaGEgPSBzdHlsZWQucGBcbiAgY29sb3I6IHJnYmEoMTIsIDE3LCA0MywgMC45KTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZGlzcGxheTogaW5saW5lO1xuYDtcblxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDEyLCAxNywgNDMsIDAuOCk7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgKiB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICB9XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgfVxuXG4gIGZpZ3VyZSB7XG4gICAgbWFyZ2luOiAyNHB4IGF1dG87XG4gICAgLyogbmV4dCBsaW5lIG92ZXJyaWRlcyBhbiBpbmxpbmUgc3R5bGUgb2YgdGhlIGZpZ3VyZSBlbGVtZW50LiAqL1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cbiAgICBmaWdjYXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgfVxuICB9XG5cbiAgaWZyYW1lIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICBibG9ja3F1b3RlIHtcbiAgICBtYXJnaW46IDE2cHggMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCByZ2JhKDEyLCAxNywgNDMpO1xuICAgIHBhZGRpbmc6IDRweCAxNnB4O1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6IHJnYigzMSwgNTYsIDE5Nyk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cblxuICAvKiBXb3JkUHJlc3MgQ29yZSBBbGlnbiBDbGFzc2VzICovXG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQyMHB4KSB7XG4gICAgaW1nLmFsaWduY2VudGVyLFxuICAgIGltZy5hbGlnbmxlZnQsXG4gICAgaW1nLmFsaWducmlnaHQge1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuXG4gICAgLmFsaWduY2VudGVyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLmFsaWducmlnaHQge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgfVxuXG4gICAgLmFsaWdubGVmdCB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICB9XG4gIH1cbmA7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFFQTtBQUVBO0FBRUE7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/post.js\n");

/***/ })

})