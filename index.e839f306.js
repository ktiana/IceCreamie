new Swiper(".swiper",{direction:"horizontal",loop:!0,spaceBetween:24,pagination:{el:".swiper-pagination",clickable:!0},autoHeight:!0,grabCursor:!0}),new Swiper(".swiper_02",{direction:"horizontal",loop:!0,spaceBetween:24,autoplay:{delay:3e3,disableOnInteraction:!1}});var e;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),c=0;o[c]&&o[c]!==t;)++c;return Boolean(o[c])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal"),c=document.querySelector('.modal[data-modal="'+o+'"]');document.body.classList.add("noScroll"),c.classList.add("active"),t.classList.add("active")}))}));const c=document.getElementById("Youtube");o.forEach((function(e){e.addEventListener("click",(function(e){const o=c.src;c.src=o;var n=this.closest(".modal");document.body.classList.remove("noScroll"),n.classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"),document.body.classList.remove("noScroll"))}),!1),t.addEventListener("click",(function(){const e=c.src;c.src=e,document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.body.classList.remove("noScroll")}))}));
//# sourceMappingURL=index.e839f306.js.map
