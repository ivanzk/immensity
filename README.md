# immensity

[![npm](https://img.shields.io/npm/v/immensity.svg)](https://www.npmjs.com/package/immensity)

JavaScript library for DOM manipulation

## Install

```
npm install immensity
```

## Usage

```js
import * as iy from 'immensity';
```

Or

```js
import {
  cleanDocument,
  convertSecondsToTimeUnits,
  craddel,
  crel,
  formatTimeForVideo,
  getVideoshot,
  handleContextMenu,
  handleKeyboardEvent,
  handleMouseEvent,
  openInIframe,
  photoshowSimple,
  removeAttributes,
  VideoController
} from 'immensity';
```

## Example - getVideoshot

Capture video screenshot of any HTML5 video at current time

```js
const video = document.querySelector('video');

// optional object, defaults to:
const options = {
  download: true,
  ext: '.jpg',
  name: document.title,
  quality: 0.95,
  timestamp: ` ${Date.now()}`,
  type: 'image/jpeg'
};

getVideoshot(video, options);
```
