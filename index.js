const apiKey = 'AIzaSyCA4omlDL40vGNIJoQShTHVLCe5L0uVVvU';

// Example: Fetch data from an API endpoint
fetch('https://api.example.com/data?key=' + apiKey)
  .then(response => response.json())
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
