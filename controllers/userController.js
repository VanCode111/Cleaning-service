const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User} = require('../models/models');

class UserController {
  async registration (req, res) {
    const {email, password} = req.body;
    if (!email || !password){
      return res.json({error: 'Некорректные данные'});
    }
    const candidate = await User.findOne({where: {email}});
    if (candidate) {
      return res.json({error: 'error'});
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({email, password: hashPassword});
    res.json({message: 'Завершено'});
    //const jwt  = jwt.sign({id: user.id, email: user.email, role: user.role});
  }
  async login (req, res) {
    
  }
  async check (req, res) {
    res.json({message: 'Hello world'});
  }
}

module.exports = new UserController();