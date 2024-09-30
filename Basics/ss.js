let obj = {
  name: "rohit",
};
const prints = (city) => {
  console.log("dd", this.name, city);
};
prints.call(obj, "bhopal");
