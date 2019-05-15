# immensity.js

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

```js
import {
  cleanDocument,
  controlCursorVisibility,
  convertSecondsToTimeUnits,
  craddel,
  createVideoController,
  crel,
  formatTimeForVideo,
  getVideoshot,
  handleContextMenu,
  handleKeyboardEvent,
  handleMouseEvent,
  openInIframe,
  photoshowSimple,
  removeAttributes,
  saveAsJSON,
  throttle
} from 'immensity';
```

## Examples

### getVideoshot

Capture video screenshot of HTML5 video at current time

```js
import { getVideoshot } from 'immensity';

const video = document.querySelector('video');

// optional object, defaults to:
const options = {
  download: true,
  name: document.title,
  quality: 0.95,
  timestamp: ` ${Date.now()}`,
  type: 'image/jpeg'
};

getVideoshot(video, options);
```

### saveAsJSON

Save javascript object as JSON file

```js
import { saveAsJSON } from 'immensity';

const data = { example: 'Example' };

// optional object, defaults to:
const options = {
  name: document.title,
  space: 0,
  timestamp: ` ${Date.now()}`
};

saveAsJSON(data, options);
```
