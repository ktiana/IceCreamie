!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),c=0;o[c]&&o[c]!==t;)++c;return Boolean(o[c])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal"),c=document.querySelector('.modal[data-modal="'+o+'"]');document.body.classList.add("noScroll"),c.classList.add("active"),t.classList.add("active")}))}));var c=document.getElementById("Youtube");o.forEach((function(e){e.addEventListener("click",(function(e){var o=c.src;c.src=o;var n=this.closest(".modal");document.body.classList.remove("noScroll"),n.classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"),document.body.classList.remove("noScroll"))}),!1),t.addEventListener("click",(function(){var e=c.src;c.src=e,document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.body.classList.remove("noScroll")}))}));
//# sourceMappingURL=index.fa21c7ee.js.map
