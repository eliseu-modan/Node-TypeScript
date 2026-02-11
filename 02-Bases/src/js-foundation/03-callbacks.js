const users = [
  {
    id: 1,
    name: "John Doe",
    email: "teste@gmail.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
  },
];

function getUserById(id, callback) {
  const user = users.find(function (user) {
    return user.id === id;
  });

  if (!user) {
    return callback(new Error("USER NOT FOUND"), id);
  }
  return callback(null, user);
}


module.exports = {
  getUserById,
};
