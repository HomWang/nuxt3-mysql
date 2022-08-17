import * as mysql from 'mysql2/promise'
import userModel from '../database/models/user.model';
// import userRepository from '../database/repositorys/user.repository';
// import { mysqlDB } from '~~/server/database/models/mysql'
// import * as userRepository from "../data/auth";

// create the connection to database
// const connection = mysql.createConnection({
// host: 'localhost',
// user: 'root',
// password: 'Ajake123',
// database: 'test'
// waitForConnections: true, // 是否等待连接
// connectionLimit: 10, // 最大连接数
// queueLimit: 0
// });

export default async (req, res, next) => {
  // try {
  //   const users = await userRepository.getAll();
  //   console.log(users)
  //   return res.status(200).json({users: users});
  // } catch (error) {
  //   next(error);
  // }
  // // execute将在内部调用prepare和query
  // connection.execute(
  //   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  //   ['Rick C-137', 53],
  //   function (err, results, fields) {
  //     console.log(results); // results contains rows returned by server
  //     console.log(fields); // fields contains extra meta data about results, if available
  //     // 如果再次执行同一语句，将从LRU缓存中选取该语句
  //     // 这将节省查询准备时间并提供更好的性能
  //   }
  // );
  // create the connection
  // const connection = await mysql.createConnection(mysqlConfig);
  // // const new_connection = await connection()
  // // query database
  // const [rows, fields] = await connection.execute('SELECT * FROM `user`');
  // // 链接结束
  // connection.end();
  // console.log(rows)
  // const found = await userRepository.findAdminById();
  // console.log(found)
  // connection.execute(
  //   'SELECT * FROM `user`',
  //   function (err, results, fields) {
  //     console.log(results); // results contains rows returned by server
  //     console.log(fields); // fields contains extra meta data about results, if available
  //     // 如果再次执行同一语句，将从LRU缓存中选取该语句
  //     // 这将节省查询准备时间并提供更好的性能
  //   }
  // );
  const data = await useStorage().getItem('redis:nuxt3-redis')
  // return data
  // return rows
  // try {
  const users = await userModel.findAllUser();
  console.log(users)
  return users
  // } catch (error) {
  //   next(error);
  // }
}