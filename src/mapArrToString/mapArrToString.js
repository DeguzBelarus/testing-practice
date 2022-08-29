const mapArrToString = (array) => {
  return array.filter((element) => Number.isInteger(element)).map(String);
};

module.exports = mapArrToString;
