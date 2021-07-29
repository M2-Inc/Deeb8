const db = require('../models/model');
const postsController = {};

postsController.createPost = async (req, res, next) => {
  try {
    console.log('Inside post controller create post');
    //userId is the id assigned to a user in the table
    const { postBody, userId } = req.body;
    let queryStr =
      'INSERT INTO posts (postBody, comments, author) VALUES ($1, $2, $3)';
    const results = await db.query(queryStr, [
      postBody,
      JSON.stringify({}),
      userId,
    ]);
    console.log('Generated new post: ', results);
    return next();
  } catch (err) {
    return next({
      err: 'Error in postsController.createPost. Could not create post',
    });
  }
};

module.exports = postsController;
