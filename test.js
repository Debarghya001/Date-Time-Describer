const EasyDateFormatter = require('./src/index');


//Test Cases
const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);  // 5 minutes in the past
const inTwoHours = new Date(Date.now() + 2 * 60 * 60 * 1000);  // 2 hours in the future
const justNow = new Date();  // Current time

console.log(EasyDateFormatter(fiveMinutesAgo));  // Expected output: "5 minutes ago"
console.log(EasyDateFormatter(inTwoHours));      // Expected output: "in 2 hours"
console.log(EasyDateFormatter(justNow));         // Expected output: "just now"