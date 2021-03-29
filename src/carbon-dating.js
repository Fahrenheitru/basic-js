const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || (parseFloat(sampleActivity)) < 1 || (parseFloat(sampleActivity) > 15) || isNaN(parseFloat(sampleActivity))){
    return false;
  } else {
    let k = 0.693 / HALF_LIFE_PERIOD;
    let ln = Math.log(MODERN_ACTIVITY / sampleActivity);
    let t = Math.ceil(ln/k);
    return t;
  }
};
