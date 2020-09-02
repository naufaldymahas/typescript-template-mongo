import monk from 'monk';

export default class Database {
  public static db = monk('localhost:27017/my_db');
}
