const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "user",
        mongodb_password: "575Password!",
        mongodb_clustername: "cluster0",
        mongodb_database: "mysite-dev",
      },
    };
  }

    return {
      env: {
        mongodb_username: "user",
        mongodb_password: "575Password!",
        mongodb_clustername: "cluster0",
        mongodb_database: "mysite",
      },
    };
};
