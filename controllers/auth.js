const users = require("../models/user.js");
const jwt = require("jsonwebtoken");
//const bcrypt = require("bcryptjs");

/*
const login = (req, res) => {
  const { email, password } = req.body;

  users.findUserByCredentials('emailExample@yandex.ru', 'passwordExample')
    .then(user => {
      // Получаем объект пользователя, если почта и пароль подошли
    })
    .catch(err => {
      // Получаем ошибку, если нет
    });
};
*/

/*
const login = (req, res) => {
   const { email, password } = req.body;
 
   users
     .findOne({ email }).then(user => {
         if (!user) {
           return Promise.reject(new Error("Неправильные почта или пароль"));
         }
     
         return bcrypt.compare(password, user.password).then(matched => {
           if (!matched) {
             // Хеши не совпали — отклоняем промис
             return Promise.reject(new Error("Неправильные почта или пароль"));
           }
           // Аутентификация успешна
           return user; // Теперь user доступен
         });
       })
     .then((user) => {
       res
         .status(200)
         .send({ _id: user._id, username: user.username, email: user.email });
     })
     .catch(error => {
       res.status(401).send({ message: error.message });
     });
 };
*/

/*
 const login = (req, res) => {
   const { email, password } = req.body;
 
   users
     .findUserByCredentials(email, password)
     .then((user) => {
       res
         .status(200)
         .send({ _id: user._id, username: user.username, email: user.email });
     })
     .catch(error => {
       res.status(401).send({ message: error.message });
     });
 };
 */

const login = (req, res) => {
   const { email, password } = req.body;
 
   users
     .findUserByCredentials(email, password)
     .then((user) => {
         const token = jwt.sign({ _id: user._id }, "some-secret-key", {
         expiresIn: 3600
       });
       return { user, token };
     })
     .then(({ user, token }) => {
       res
         .status(200)
         .send({
             _id: user._id, 
             username: user.username, 
             email: user.email, 
             jwt: token });
           })
     .catch(error => {
       res.status(401).send({ message: error.message });
     });
 };

 // Не забываем экспортирвать функцию 
 module.exports = { login };