// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
//
// };
//
// getTempCallback('Breda,nl', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp)
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout( function() {
//       resolve(79);
//       reject('City not found');
//     }, 3000);
//   });
// }
//
// getTempPromise('Breda').then(
//   function(temp) {
//     console.log('success', temp)
//   },
//   function(err) {
//     console.log('error', err);
//   }
// );

// Challenge Area
function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Not all numbers!');
    }
  });
}

addPromise(5, 8)
.then(
  function(sum) {
    console.log('succes:', sum);
  },
  function(err) {
    console.log('error:', err)
  }
);
