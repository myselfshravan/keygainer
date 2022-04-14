const txt =
  '{"title":"Software Engineering Fundamentals", "name":"by Adrian Dawson school", "top_details":"48 lectures ( 280 Hours)" }';
const obj = JSON.parse(txt);
document.getElementById("title").innerHTML = obj.title;
document.getElementById("name").innerHTML = obj.name;
document.getElementById("top_details").innerHTML = obj.top_details;
// document.getElementById("top_details").innerHTML = obj.top_details;
// document.getElementById("top_details").innerHTML = obj.top_details;
