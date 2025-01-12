// ==UserScript==
// @name         r/place Template
// @namespace    http://tampermonkey.net/
// @version      7
// @description  try to take over the canvas!
// @author       me
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/TheFel0x/place-overlay/raw/main/src/scripts/place-overlay.user.js
// @downloadURL  https://github.com/TheFel0x/place-overlay/raw/main/src/scripts/place-overlay.user.js
// ==/UserScript==

var overlayImage = null;
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        const canvasContainer = document.querySelector("garlic-bread-embed").shadowRoot.querySelector("div.layout").querySelector("garlic-bread-canvas").shadowRoot.querySelector("div.container");
        overlayImage = document.createElement("img");
        updateImage();
        overlayImage.style = `position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;pointerEvents: 'none';`;
        canvasContainer.appendChild(overlayImage);
    }, false);
}

function updateImage() {
    overlayImage.src = "https://raw.githubusercontent.com/TheFel0x/place-overlay/main/overlay/overlay_target.png"
}

setInterval(function () {overlayImage.src = "https://raw.githubusercontent.com/TheFel0x/place-overlay/main/overlay/overlay_target.png"}, 30000);
