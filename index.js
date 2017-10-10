
function produceDrivingRange(blockRange) {
  return function(street1, street2) {
    let diff = Math.abs(parseInt(street1) - parseInt(street2));
    if (diff > blockRange) {
      return `${Math.abs(blockRange - diff)} blocks out of range`;
      } else {
      return `within range by ${blockRange - diff}`;
    };
  };
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return fare * percentage;
  };
}
