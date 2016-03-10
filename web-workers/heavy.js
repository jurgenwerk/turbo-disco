importScripts('../web-worker.js');

class Heavy extends WebWorker {
  multiply(a, b) {
    let aNumRows = a.length, aNumCols = a[0].length,
        bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(aNumRows);  // initialize array of rows
    for (let r = 0; r < aNumRows; ++r) {
      m[r] = new Array(bNumCols); // initialize the current row
      for (let c = 0; c < bNumCols; ++c) {
        m[r][c] = 0;             // initialize the current cell
        for (let i = 0; i < aNumCols; ++i) {
          m[r][c] += a[r][i] * b[i][c];
        }
      }
    }
    return m;
  }

  calculation(complexity) {
    let a = []
    for (let i=0;i<100000*complexity;++i) a[i]=i;
    this.multiply(a, a);
  }

  calculateStuff(complexity, idx) {
    debugger
    console.log("COMPUTATION STARTED: " + idx);
    this.calculation(complexity);
    console.log("COMPUTATION DONE: " + idx);
  }
}

let worker = new Heavy();
worker.listen();
