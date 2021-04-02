import users from "./users.routes";

export default (app) => {
  app.use("/api/users/", users);
};
