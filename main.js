class Main {
  constructor() {
    this.colorDecimal = 0;
    this.body = document.body;
    this.hexNumEl = document.getElementById('hex-number');
  }

  init() {
    window.setInterval(() => {
      this.update();
    }, 500);
  }

  update() {
    this.colorDecimal++;
    let val = this.buildHexStr();

    this.body.style.backgroundColor = '#' + val;
    this.hexNumEl.innerText = val;
  }

  buildHexStr() {
    let hexStr = (parseInt(this.colorDecimal, 10)).toString(16);

    while (hexStr.length < 6) {
      hexStr = '0' + hexStr;
    }

    return hexStr;
  }
}

var app = new Main();
app.init();
