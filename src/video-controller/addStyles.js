import craddel from '../craddel';

export default function() {
  craddel(
    { tag: 'style', parent: document.head },
    {
      id: 'iyVideoControllerStyle',
      innerHTML: /* css */ `
      @import url('https://fonts.googleapis.com/css?family=Open+Sans');
      * {
        box-sizing: border-box;
      }

      :root {
        --volumeBarState: 50%;
        --seekBarState: 0%;
        --seekBarBuffered: 0%;
        --fillColorActive: rgba(25, 118, 210, 1);
        --volumeBarColor: 25, 118, 210;
        --seekBarColor: 25, 118, 210;
        --fillColorBuffered: rgba(25, 118, 210, .5);
        --fillColor: rgba(25, 118, 210, .1);
        --textColor: rgb(33, 150, 243);
      }

      body {
        margin: 0 !important;
        overflow-x: hidden !important;
      }

      #iyModal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 16777269;
      }

      #iyVideoControllerRoot.videoContainer {
        background: #111; 
        display: flex;
        flex-wrap: wrap;
        width: 100vw;
        height: 100vh;
        z-index: 16777271;
      }

      #iyVideoControllerRoot #videoOverlay {
        position: absolute;
        width: 100vw;
        height: 100vh;
      }

      #iyVideoControllerRoot video {
        background-color: #000 !important;
        flex: 100% !important;
        width: 100% !important;
        height: initial !important;
        max-width: 100% !important;
        max-height: 100% !important;
      }

      #iyVideoControllerRoot .controlsContainer {
        display: flex;
        align-items: center;
        background: rgba(0,0,0,.66);
        position: absolute;
        bottom: 0px;
        height: 50px;
        width: 100%;
        cursor: default;
      }

      #iyVideoControllerRoot .hideControls {
        display: none
      }

      #iyVideoControllerRoot .showControls {
        display: flex !important;
      }

      #iyVideoControllerRoot .controlBars {
        border-radius: 8px;
        height: 8px;
        margin: 0px 16px;
        cursor: pointer;
        box-shadow: 
          0px 0px 8px 2px rgba(0,0,0,.2),
          0px 4px 4px 2px rgba(0,0,0,.2);
        transition: 100ms cubic-bezier(0.4, 0.0, 0.2, 1);
      }

      #iyVideoControllerRoot .controlBars:hover {
        height: 32px;
        border-radius: 32px;
      }

      #iyVideoControllerRoot #seekBar {
        border: 1px solid rgb(var(--seekBarColor));
        flex: 1 1 400px;
        display: flex;
        align-items: center;
        background-image: linear-gradient(
          90deg,
          rgba(var(--seekBarColor), 1),
          rgba(var(--seekBarColor), 1) var(--seekBarState),
          rgba(var(--seekBarColor), .5) var(--seekBarState),
          rgba(var(--seekBarColor), .5) var(--seekBarBuffered),
          rgba(var(--seekBarColor), .1) var(--seekBarBuffered),
          rgba(var(--seekBarColor), .1) 100%);
      }

      #iyVideoControllerRoot #seekBarTime {
        font-family: 'Open Sans', sans-serif;
        color: var(--textColor);
        font-size: initial;
        flex: 0 1 auto;
        margin: 0px 16px;
        cursor: default;
        user-select: none;
      }

      #iyVideoControllerRoot #volumeBar {
        border: 1px solid rgb(var(--volumeBarColor));
        flex: 0 1 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(
          90deg,
          rgba(var(--volumeBarColor), 1),
          rgba(var(--volumeBarColor), 1) var(--volumeBarState),
          rgba(var(--volumeBarColor), .1) var(--volumeBarState),
          rgba(var(--volumeBarColor), .1) 100%);
      }

      #iyVideoControllerRoot #volumeBarLevel {
        display: none;
      }

      #iyVideoControllerRoot .waiting {
        animation-duration: 1s;
        animation-name: waitingborder;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-timing-function: ease-in-out;
      }

      @keyframes waitingborder {
        from {
          border: 1px solid #1976D2;
        }
        to {
          border: 1px solid #D32F2F;
        }
      }
    `
    }
  );
}
