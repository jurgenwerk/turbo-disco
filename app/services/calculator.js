import WebWorker from 'ember-web-workers/services/worker';
export default WebWorker.extend({
  workerName: 'heavy',
  calculateStuff(complexity, idx) {
    return this.postMessage('calculateStuff', complexity, idx);
  }
});
