export const sliderStyles = `
  figure {
    position: fixed;
    top: 5%;
    left: 0;
    bottom: 15%;
    right: 0;
    overflow: hidden;
    margin: 0;
  }
  button {
    position: absolute;
    top: 50%;
    font-size: 30px;
    z-index: 100;
    background: transparent;
    border: 0;
    color: white;
    font-weight: bold;
    outline: none;
    font-family: monospace;
    cursor: pointer;
  }
  button:hover {
    color: #ff9;
  }
  #left { left: 4%; }
  #right { right: 4%; }
  div {
    position: absolute;
    top: 10%;
    bottom: 10%;
    left: 10%;
    width: 80%;
    box-sizing: border-box;
    margin:0;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    transition: all 0.8s;
  }

  .picture-subtitles {
    position: fixed;
    bottom: 8%;
    width: 80%;
    margin: 0 10%;
    font-size: 16px;
    font-family: Montserrat;
    letter-spacing: 1.2px;
    white-space: normal;
    line-height: 1.5;
  }
`
