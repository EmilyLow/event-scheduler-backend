// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/data/schedule-data.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./src/data/migrations"
    },
    seeds: {
      directory: "./src/data/seeds"
    },
    //For foreign keys? 
    // pool: {
    //   afterCreate: (conn, done) => {
    //     //? runs after a connection is made to the sqlite engine
    //     conn.run("PRAGMA foreign_keys = ON", done)
    //   },
    // }
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./src/data/migrations"
    },
    seeds: {
      directory: "./src/data/seeds"
    },
    useNullAsDefault: true
  
  }

};
