import connectionMysql from '../config/mysql';
import IUser from '../interfaces/user.interface';

export default {
  async findAllUser() {
    const query = 'SELECT * FROM user';
    const [users] = await connectionMysql.execute(query);
    return users as IUser[];
    // return users;
  },
  async addUser(user: string) {
    const query = "INSERT INTO user (user) VALUES (?)";
    const [users] = await connectionMysql.execute(query, [user]);
    return users as IUser[];
    // return users;
  },
}