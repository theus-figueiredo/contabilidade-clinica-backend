require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.TABLE_NAME,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.TABLE_NAME,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    use_env_variable: procces.env.DATABASE_URL,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.TABLE_NAME,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};