const { expect } = require("chai");
let alertFailureCount = 0;
let threshold = 200;

function networkAlertStub(celcius) {
  if (celcius > threshold) {
    console.log(`Alert! Temperature is ${celcius} degrees`);
    return 500;
  }
  // Return 200 for ok
  // Return 500 for not-ok
  // stub always succeeds and returns 200
  return 200;
}

function alertInCelcius(farenheit, networkAlert) {
  const celcius = ((farenheit - 32) * 5) / 9;
  const returnCode = networkAlert(celcius);
  if (returnCode != 200) {
    // non-ok response is not an error! Issues happen in life!
    // let us keep a count of failures to report
    // However, this code doesn't count failures!
    // Add a test below to catch this bug. Alter the stub above, if needed.
    alertFailureCount += 1;
  }
}

alertInCelcius(303.6, networkAlertStub);
expect(alertFailureCount).equals(0);

alertInCelcius(400.5, networkAlertStub);
expect(alertFailureCount).equals(1);

console.log(`${alertFailureCount} alerts failed.`);
console.log("All is well (maybe!)");
