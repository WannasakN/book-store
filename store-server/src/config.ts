const isProd = process.env.NODE_ENV == 'production'
let appConfig = {
  isProd,
  clearDataBeforeLodingFixture: isProd ? false : true,
  dbConnectionInfo: {
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : 'san123456',
    database : 'store'
  }
}

export default appConfig;