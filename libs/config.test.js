module.exports = {
  database: "ntask_test",
  username: "",
  password: "",
  params: {
    dialect: "sqlite",
    storage: "ntask_test.sqlite",
    logging: false,
    define: {
      underscored: true
    }
  },
  jwtSecret: "NTASK_TEST",
  jwtSession: {session: false}
};
