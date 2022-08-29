const mapArrToString = require("../mapArrToString/mapArrToString");

const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    const result = await response.json();
    const userIds = result.map((user) => user.id);
    console.log(userIds);
    return mapArrToString(userIds);
  } catch (exception) {
    console.log(exception);
  }
};

module.exports = getData;
