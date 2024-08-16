function fetchMultipleData(urls) {
    const fetchPromises = urls.map(url => fetch(url).then(response => response.json()));
    return Promise.all(fetchPromises);
}

// Example usage:
const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
];

fetchMultipleData(urls).then(data => {
    console.log(data);
    // Output: Array of responses from the provided URLs
});
