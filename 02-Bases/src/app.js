// const { emailtemplate } = require("./js-foundation/01-template-importaciones");
require("./js-foundation/02-destructuring");
const { getUserById } = require("./js-foundation/03-callbacks.js");

// console.log(emailtemplate);
const id = 3;
getUserById(id, function (error, user) {
  if (error) {
    throw new Error("USER NOT FOUND", id);
  }
  console.log(user);
});
