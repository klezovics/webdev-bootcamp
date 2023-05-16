Certainly! Here are simple code examples for each of the mentioned browser APIs:

1. Document Object Model (DOM) API:
   ```javascript
   // Creating a new element and appending it to the document
   const newElement = document.createElement('div');
   newElement.textContent = 'Hello, world!';
   document.body.appendChild(newElement);
   ```

2. Window API:
   ```javascript
   // Opening a new window
   window.open('https://www.example.com', '_blank');
   ```

3. Fetch API:
   ```javascript
   // Making a GET request and handling the response
   fetch('https://api.example.com/data')
     .then(response => response.json())
     .then(data => {
       console.log(data);
     })
     .catch(error => {
       console.error(error);
     });
   ```

4. Storage APIs:
   ```javascript
   // Storing and retrieving data from localStorage
   localStorage.setItem('name', 'John Doe');
   const storedName = localStorage.getItem('name');
   console.log(storedName);  // Output: 'John Doe'
   ```

5. Geolocation API:
   ```javascript
   // Getting the user's current location
   navigator.geolocation.getCurrentPosition(position => {
     console.log('Latitude:', position.coords.latitude);
     console.log('Longitude:', position.coords.longitude);
   }, error => {
     console.error('Error getting location:', error);
   });
   ```

6. Web Storage API:
   ```javascript
   // Storing and retrieving data from sessionStorage
   sessionStorage.setItem('count', '5');
   const storedCount = sessionStorage.getItem('count');
   console.log(storedCount);  // Output: '5'
   ```

7. Web Audio API:
   ```javascript
   // Creating and playing a simple audio element
   const audioContext = new AudioContext();
   const audioElement = new Audio('path/to/audio-file.mp3');
   const source = audioContext.createMediaElementSource(audioElement);
   source.connect(audioContext.destination);
   audioElement.play();
   ```

Remember that some APIs may require user permission or may have additional configuration and usage details. These examples provide a starting point for working with each API, and you can explore the respective API documentation for more details and advanced usage.