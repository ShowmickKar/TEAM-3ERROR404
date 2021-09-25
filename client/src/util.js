import data from "./data/spaceObjects";

let debris = [];
for (var i = 0; i < data.length; i++) {
  if (data[i]["OBJECT_TYPE"] === "DEBRIS") {
    console.log("Debris Found");
    debris.push(data[i]);
  }
}
const json = JSON.stringify(debris);
console.log(json);
