import { v4 as uuid } from 'uuid';

const users = [];

export const registerUser = (name, email, password) => {
  const user = {
    id: uuid(),
    name,
    email,
    password
  };
  users.push(user);
  return user;
};

export const findUserByEmail = (email) => {
  return users.find(user => user.email === email);
};

export const validateUser = (email, password) => {
  return users.find(
    user => user.email === email && user.password === password
  );
};