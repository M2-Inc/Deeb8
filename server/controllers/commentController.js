const db = require('../models/model');
const commentController = {};

commentController.createComment = async (req, res, next) => {
  try {
    console.log('Inside comment controller create comment');
    const { commentBody, userId, postId } = req.body;
    let queryStr =
      'INSERT INTO comments (commentBody, author, post) VALUES ($1, $2, $3)';
    const results = await db.query(queryStr, [commentBody, userId, postId]);
    console.log('Generated new comment: ', results);
    return next();
  } catch (err) {
    return next({
      err: 'Error in commentController.createComment. Could not create comment',
    });
  }
};

module.exports = commentController;
