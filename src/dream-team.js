const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let tri, res;
  let totalStr = [];
  if (typeof members !== "string" && !Array.isArray(members)) {
    return false;
  } else {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") {
        tri = members[i].trim().toUpperCase();
        totalStr.push(tri[0]);
      }
    }
    res = totalStr.sort().join("");
    return res;
  }
};
