const path = require("path");

require("dotenv").config();

const { DATABASE_URL = "postgres://test_postgresql_develop_user:tZuJKSMAGMxrtE2JWMOGnsdD3DTZCjv0@dpg-cn192ef109ks73ce7rpg-a/test_postgresql_develop"  } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: "postgres://test_postgresql_develop_user:tZuJKSMAGMxrtE2JWMOGnsdD3DTZCjv0@dpg-cn192ef109ks73ce7rpg-a/test_postgresql_develop",
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: "postgres://test_postgresql_develop_user:tZuJKSMAGMxrtE2JWMOGnsdD3DTZCjv0@dpg-cn192ef109ks73ce7rpg-a/test_postgresql_develop",
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};