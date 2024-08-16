function racePromises(promises) {
    return Promise.race(promises);
}

// Example usage:
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'First Promise Resolved');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'Second Promise Rejected');
});

racePromises([promise1, promise2])
    .then(result => {
        console.log('Resolved:', result);
    })
    .catch(error => {
        console.log('Rejected:', error);
    });
