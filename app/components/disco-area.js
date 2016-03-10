import Ember from 'ember';

export default Ember.Component.extend({
  calculator: Ember.inject.service(),

  hardOperation(complexity) {
    const a = math.range(0, 9000*complexity);
    return math.multiply(a, a);
  },

  didRender() {
    this._super(...arguments);

    // setTimeout(() => {
    //   this.hardOperation(1000);
    //
    //   setTimeout(() => {
    //     $('.progress-bar').attr('style', 'width: 100%');
    //     // $('.progress-bar').attr('style', 'width: 100%');
    //     this.hardOperation(1000);
    //     setTimeout(() => {
    //       $('.progress-bar').attr('style', 'width: 80%');
    //     }, 400);
    //   }, 100);
    //
    //
    //
    //   // this.hardOperation(1000);
    //   // $('.progress-bar').attr('style', 'width: 50%');
    // }, 100)

    this.get('calculator').calculateStuff(10, 1).then(() => {
      this.set('value1', 8);

    });

    // this.get('calculator').calculateStuff(15, 2).then(() => {
    //   this.set('value2', 10);
    // });
    //
    // this.get('calculator').calculateStuff(8, 3).then(() => {
    //   this.set('value3', 3);
    // });
    //
    // this.get('calculator').calculateStuff(12, 4).then(() => {
    //   this.set('value4', 5);
    // });
    //
    // this.get('calculator').calculateStuff(15, 5).then(() => {
    //   this.set('value1', 10);
    // });
    //
    // this.get('calculator').calculateStuff(20, 6).then(() => {
    //   this.set('value2', 3);
    // });

    Ember.run.later(() => {
      this.$('.text-box').slideUp();
    })

    // this.hardOperation(1000);
    // setTimeout(() => {
    //   this.set('value1', 8);
    // }, 1);
    //
    // this.hardOperation(1000);
    // setTimeout(() => {
    //   this.set('value2', 1);
    // }, 1);
    //
    // this.hardOperation(1000);
    // setTimeout(() => {
    //   this.set('value3', 4);
    // }, 1);
    //
    // this.hardOperation(1000);
    // setTimeout(() => {
    //   this.set('value4', 3);
    // }, 1);


    // for (let i = 0; i < 1000; i++) {
    //
    //
    //   setTimeout(() => {
    //     this.hardOperation(10);
    //     const index = i%10;
    //     this.set(`value${index}`, Math.floor(Math.random() * 10) + 1);
    //   }, 600);
    // }
  }
});
