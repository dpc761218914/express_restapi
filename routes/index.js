var User = require('../controller/user');


module.exports = function(app) {
  // 获取所有用户
  app.get('/users', User.getUsers);
  //获取某一个用户
  app.get('/user/:id', User.getUser);
  //删除一个用户
  app.delete('/user/:id', User.delUser);
  //添加一个用户
  app.post('/user',User.addUser);
  //修改用户
  app.put('/user/:id',User.updateUser);

};