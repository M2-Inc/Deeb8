const db = require('../models/model');

const usersController = {
  validateUsername: async (req, res, next) => {
    try {
      const { user } = req.body;
      const searchQuery = 'SELECT username FROM users WHERE username = $1';
      const searchParams = [user];
      const { rowCount } = await db.query(searchQuery, searchParams);
      console.log('Number of matches found in db: ', rowCount);
      if (rowCount) return next({ err: 'error username already taken' });
      return next();
    } catch (err) {
      return next({
        err: 'Error in usersController.createUser. Could not query database for username.',
      });
    }
  },

  createUser: async (req, res, next) => {
    try {
      const { user, password } = req.body;
      let queryStr =
        'INSERT INTO users (userName, password, groups, friends, post_count) VALUES ($1, $2, $3, $4, $5)';
      const results = await db.query(queryStr, [
        user,
        password,
        JSON.stringify({}),
        JSON.stringify({}),
        JSON.stringify({}),
      ]);
      console.log(`New user ${res.locals.newUser} created.`);
      return next();
    } catch (err) {
      return next({
        err: 'Error in usersController.createUser. Could not create user',
      });
    }
  },
  updateUser: (req, res, next) => {},
};

module.exports = usersController;
