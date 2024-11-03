
# Date-Time-Describer 🌟

A simple, human-readable date formatting library that transforms dates into friendly phrases like "2 hours ago" or "in 3 days."

###
![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
[![npm version](https://badge.fury.io/js/easy-date-formatter.svg)](https://www.npmjs.com/package/date-time-describer)


## Features ✨

- **Readable Timestamps:** Converts dates into a readable format like "5 minutes ago" or "in 2 hours."
- **Epoch Conversion:** Converts epoch timestamps directly to human-readable date formats and friendly phrases.
- **Handles Past & Future Dates:** Supports both past and future dates in a human-readable way.
- **Auto-Pluralization:** Automatically adds "s" for plural units (e.g., "1 hour" vs. "2 hours").
- **Supports Multiple Time Units:** Converts to years, months, weeks, days, hours, minutes, and seconds.


## Installation 📦

Install ```EasyDateFormatter``` via npm:

```bash
 npm install date-time-describer

```

    
## Usage📖
Import and use ```EasyDateFormatter``` to transform dates and epoch timestamps into friendly formats.

```javascript
const EasyDateFormatter = require('date-time-describer');


//Example
const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);  // 5 minutes in the past
const inTwoHours = new Date(Date.now() + 2 * 60 * 60 * 1000);  // 2 hours in the future
const justNow = new Date();  // Current time
const epochTime = 159200034;  // Sample epoch timestamp

console.log(EasyDateFormatter.describeformat(fiveMinutesAgo));  // Output: "5 minutes ago"
console.log(EasyDateFormatter.describeformat(inTwoHours));      // Output: "in 2 hours"
console.log(EasyDateFormatter.describeformat(justNow));         // Output: "just now"
console.log(EasyDateFormatter.epoch(epochTime));                // Output: "1/2/1975, 12:00:34 AM"
console.log(EasyDateFormatter.epochreadableformat(epochTime));  // Output: "50 years ago"        // Output: "just now"
``` 
**Run**
```bash
node index.js
```

## API Reference 📚

#### Describe Date in Human-Readable Format

`EasyDateFormatter.describeformat(date)`

- **Parameters:** ```date``` (JavaScript Date object) - The date you want to format.
- **Returns:** A ```string``` with a human-readable representation of the date's proximity to the current time.

### Epoch to Readable Date Format

`EasyDateFormatter.epoch(epochTimestamp)`

- **Parameters:** epochTimestamp (Number) - An epoch timestamp to convert.
- **Returns:** A string with the date formatted as "MM/DD/YYYY, HH:MM, AM/PM".

### Epoch to Readable Relative Format

`EasyDateFormatter.epochreadableformat(epochTimestamp)`

- **Parameters:** epochTimestamp (Number) - An epoch timestamp to convert.
- **Returns:** A string with a human-readable description of the time difference between the current date and the epoch timestamp.

| Input      | Output              |
| :--------  | :------------------------- |
| `EasyDateFormatter.describeformat(new Date(Date.now() - 60000))`  | "1 minute ago" |
| `EasyDateFormatter.describeformat(new Date(Date.now() - 2e6))`    | "33 minutes ago"|
| `EasyDateFormatter.describeformat(new Date(Date.now() + 5e7))`    | "in 13 hours"   |
| `EasyDateFormatter.epoch(159200034)`    | "1/2/1975, 12:00:34 AM"     |
| `EasyDateFormatter.epochreadableformat(159200034)`| "50 years ago" |



## How It Works ⚙️

```EasyDateFormatter``` calculates the difference between the provided date (or epoch) and the current time, selecting the largest possible time unit to present the difference in a readable way.

1. **Time difference:** The library calculates the time difference in seconds.
2. **Largest unit selection:** It divides the difference by the largest time unit (years, months, days, etc.) until it finds a suitable unit.
3. **Conditional formatting:** Based on whether the date is in the past or future, it formats the string as "in X units" or "X units ago".

## Supported Time Units ⏳
`Years (>= 31556926 seconds)`

`Months (>= 2629744 seconds)`

`Weeks (>= 604800 seconds)`

`Days (>= 86400 seconds)`

`Hours (>= 3600 seconds)`

`Minutes (>= 60 seconds)`

`Seconds (< 60 seconds)`
## Project Structure 📂

```bash
Easy-Date-Formatter/
├── src/                   # Source files
│   └── index.js  # Main function file
├── package.json           # npm package configuration
├── README.md              # documentation 
└── test.js                # test cases
```

## Changelog 📜
### Version 1.0.4
- Added epoch and epochreadableformat functions to convert epoch timestamps to formatted date strings and relative time phrases.
- Enhanced test cases for new epoch features.


## Contributing

We welcome contributions! To contribute:

1. **Fork the repository.**
2. **Clone your fork locally.**
3. **Create a branch for your feature or bug fix.**
4. **Commit your changes with a detailed message.**
5. **Push to your branch and submit a pull request!**


## Authors 🙋‍♂️

- Developed by Debarghya Mondal @[debarghya001](https://github.com/Debarghya001), a passionate developer looking to simplify date formatting.


## Acknowledgements 🌟

- Inspired by the need for user-friendly timestamps in web and mobile applications.
- Special thanks to the JavaScript community for ongoing support and innovation.


## Enjoy! 🎉
Thank you for using Easy Date Formatter! We hope it brings readability and ease to your date formatting needs.