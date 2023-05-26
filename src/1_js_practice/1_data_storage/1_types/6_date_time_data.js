/*
The JavaScript `Date` class is a built-in object that represents a date and time. It provides methods to work with dates, perform calculations, and format dates according to various patterns. Here's an overview of some commonly used features of the `Date` class:

1. Creating a `Date` object:
   ```javascript
   // Creating a new Date object with the current date and time
   const currentDate = new Date();

   // Creating a Date object with a specific date and time
   const specificDate = new Date('2022-12-31T23:59:59');
   ```

2. Getting date and time components:
   ```javascript
   const date = currentDate.getDate(); // Day of the month (1-31)
   const month = currentDate.getMonth(); // Month (0-11, where 0 is January)
   const year = currentDate.getFullYear(); // Full year (e.g., 2023)
   const hours = currentDate.getHours(); // Hours (0-23)
   const minutes = currentDate.getMinutes(); // Minutes (0-59)
   const seconds = currentDate.getSeconds(); // Seconds (0-59)
   ```

3. Setting date and time components:
   ```javascript
   currentDate.setFullYear(2024); // Set the year to 2024
   currentDate.setMonth(11); // Set the month to December (0-11)
   currentDate.setDate(25); // Set the day of the month to 25
   currentDate.setHours(12); // Set the hours to 12
   currentDate.setMinutes(30); // Set the minutes to 30
   currentDate.setSeconds(0); // Set the seconds to 0
   ```

4. Formatting dates:
   ```javascript
   const formattedDate = currentDate.toDateString(); // Convert to a human-readable string (e.g., "Mon May 16 2023")
   const formattedTime = currentDate.toLocaleTimeString(); // Convert to a localized time string (e.g., "10:30:45 AM")
   ```

5. Performing date calculations:
   ```javascript
   const tomorrow = new Date();
   tomorrow.setDate(currentDate.getDate() + 1); // Get the date for tomorrow

   const differenceInMilliseconds = tomorrow - currentDate; // Calculate the difference in milliseconds
   const differenceInSeconds = differenceInMilliseconds / 1000; // Convert to seconds
   ```

These are just a few examples of what you can do with the `Date` class. It's worth noting that JavaScript also has other libraries like Moment.js or date-fns that provide more advanced date manipulation and formatting capabilities.
 */

// Create a date object with 27th February 2027 as its date.
// Print to console
function createADateObject() {
  const specificDate = new Date("2027-02-27");
  console.log(specificDate);
}
createADateObject();
