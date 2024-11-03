const EasyDateFormatter = require('./src/index');


//Test Cases
const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);  // 5 minutes in the past
const inTwoHours = new Date(Date.now() + 2 * 60 * 60 * 1000);  // 2 hours in the future
const justNow = new Date();  // Current time

console.log(EasyDateFormatter.describeformat(fiveMinutesAgo));  // Expected output: "5 minutes ago"
console.log(EasyDateFormatter.describeformat(inTwoHours));      // Expected output: "in 2 hours"
console.log(EasyDateFormatter.describeformat(justNow));         // Expected output: "just now"
console.log(EasyDateFormatter.epoch(159200034))                 //Expected Output: "1/2/1975, 12:00:34 AM"
console.log(EasyDateFormatter.epochreadableformat(159200034))   //Expected Output: "50 Years ago"