export const playerStyles = `
  .play-button, .media-button {
    position: fixed;
    border: 0;
    padding: 0;
    background: transparent;
    box-sizing: border-box;
    cursor: pointer;
    z-index: 100;
  }
  .play-button {
    top: 20px;
    left: 16px;
    width: 24px;
    height: 24px;
    border-color: transparent transparent transparent #09b;
    transition: 100ms all ease;
    border-style: solid;
    border-width: 12px 0 12px 24px;
  }

  .play-button.paused {
    border-style: double;
    border-width: 0px 0 0px 24px;
  }

  .play-button:hover {
    border-color: transparent transparent transparent #079;
  }

  .media-button {
    position: fixed;
    top: 12px;
    right: 16px;
    border-radius: 50%;
    border: solid 3px #fa0;
    width: 48px;
    height: 48px;
    font-size: 28px;
    color: #fa0;
    z-index: 50;
  }

  .media-button:hover {
    border: solid 3px #f70;
    color: #f70;
  }

  .music-title {
    position: fixed;
    top: 0;
    left: 52px;
    font-weight: lighter;
  }
`
