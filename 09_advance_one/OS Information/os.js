// In this lab, we will explore how to use the os module in Node.js to gather information about the operating system. This is useful when you want to write platform-specific code or gather statistics about your application's environment. Throughout the lab, you will be required to export variables to be tested. We will be using the ESM syntax for all imports and exports.

// Some important functions in the os module are:

// os.type(): returns the operating system name.
// os.freemem(): returns the amount of free system memory in bytes.
// os.totalmem(): returns the total amount of system memory in bytes.
// os.uptime(): returns the system uptime in seconds.

// A basic node js question from codedamn

const os = require("os");

function getOsName() {
  const osType = os.type();
  console.log(osType);
}

function getFreeMemoryPercentage() {
  const freeMemory = os.freemem();
  const totalmem = os.totalmem();
  const percentage = freeMemory / totalmem;
  console.log(percentage);
}

function getUptimeInMinutes(){
  const uptimeInSeconds = os.uptime();
  const uptimeInMinutes = Math.round(uptimeInSeconds / 60);
  return uptimeInMinutes;
}
getOsName();
getFreeMemoryPercentage();
getUptimeInMinutes()