export const logoStyle = `
  .letters {
    position: fixed;
    font-family: Poppins, Montserrat;
    transition: all 0.2s;
    z-index: 1000;
    font-size: 0.8rem;
  }
  .logo {
    position: fixed;
    bottom: 8px;
    left: 8px;
    width: 32px;
    height: 32px;
    transform: scaleX(-1);
    color:#aaa;
    font-size: 0.8rem;
    transition: all .5s;
    background-color: #000;
    background-image: url(${location.href}/images/butterfly-1-invert.png);
    background-size: contain;
    background-repeat: no-repeat;
  }
  /*.logo:after {
    content: "Author";
  }*/
  .logo:hover {
    background-image: url(${location.href}/images/helen.png);
    background-size: contain;
    background-repeat: no-repeat;
    height: 96px;
    width: 120px;
    border-radius: 4px;
    bottom: 0;
    left: 0;
  }
  .logo:hover:after {
    content: "♥";
    padding: 4px;
    color: #fff;
  }
`
