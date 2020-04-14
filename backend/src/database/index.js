import Sequelize from 'sequelize';

import User from '../app/models/User';
import Recipient from '../app/models/Recipient';

import dataBaseConfig from '../config/database';

const models = [User, Recipient];

class DataBase {
  constructor(){
    this.init();
  }

  init() {
    this.connection = new Sequelize(dataBaseConfig);

    models.map( model =>  model.init(this.connection));
  }
}

export default new DataBase;
