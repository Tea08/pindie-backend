const sendAllUsers = (req, res) => {
  // Установим заголовок ответа в формате JSON
  res.setHeader('Content-Type', 'application/json');
  // Отправим данные в виде JSON-объекта, 

  res.end(JSON.stringify(req.usersArray));
};

// Экспортируем контроллер
module.exports = sendAllUsers;
