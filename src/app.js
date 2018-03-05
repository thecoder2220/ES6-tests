import {Person} from './model/Person';

global.app = function () {

    /* code initial
    var christoph = new Person('Christoph', 'Burgdorf');
    console.log(christoph.fullName);
    */

  const functionWithCallback1 = callback => callback("test", undefined);
  const functionWithCallback2 = (arg, callback) => callback(arg, undefined);
  const functionWithCallback3 = (arg, callback) => callback(arg, undefined);
  const functionWithCallback4 = (arg, callback) => callback(arg, undefined);
  const functionWithCallback5 = (arg, callback) => callback(arg, undefined);
  const functionWithCallback6 = (arg, callback) => callback(arg, undefined);

  functionWithCallback1((result1, err) => {
    if (err) {
      throw err;
    }
    functionWithCallback2(result1, (result2, err) => {
      if (err) {
        throw err;
      }
      functionWithCallback3(result2, (result3, err) => {
        if (err) {
          throw err;
        }
        functionWithCallback4(result3, (result4, err) => {
          if (err) {
            throw err;
          }
          functionWithCallback5(result4, (result5, err) => {
            if (err) {
              throw err;
            }
            functionWithCallback6(result5, (result6, err) => {
              if (err) {
                throw err;
              }
              console.log(`Exemple avec les callback : ${result6}`);
            });
          });
        });
      });
    });
  });

// Et maintenant, en utilisant les promesses
  const functionWithPromise1 = () => Promise.resolve("test");
  const functionWithPromise2 = arg => Promise.resolve(arg);
  const functionWithPromise3 = arg => Promise.resolve(arg);
  const functionWithPromise4 = arg => Promise.resolve(arg);
  const functionWithPromise5 = arg => Promise.resolve(arg);
  const functionWithPromise6 = arg => Promise.resolve(arg);

  functionWithPromise1()
    .then(functionWithPromise2)
    .then(functionWithPromise3)
    .then(functionWithPromise4)
    .then(functionWithPromise5)
    .then(functionWithPromise6)
    .then(result => console.log(`Exemple avec les promesses : ${result}`))
    .catch(err => {
      throw err;
    });
};