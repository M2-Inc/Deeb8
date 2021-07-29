const db = require('../models/model');
const topicController = {};

topicController.validateTopic = async (req, res, next) => {
  try {
    console.log('Inside topic controller Validate topicname');
    const { topicName } = req.body;
    const searchQuery = 'SELECT topicName FROM topics WHERE topicName = $1';
    const searchParams = [topicName];
    const { rowCount } = await db.query(searchQuery, searchParams);
    console.log('Number of matches found in db: ', rowCount);
    if (rowCount) return next({ err: 'error topicname already taken' });
    return next();
  } catch (err) {
    return next({
      err: 'Error in groupController.createGroup. Could not query database for groupName.',
    });
  }
};

topicController.createTopic = async (req, res, next) => {
  try {
    console.log('Inside topic controller create topic');
    //userId is the id assigned to a user in the table
    const { topicName, groupId } = req.body;
    let queryStr =
      'INSERT INTO topics (topicName, posts, group_id) VALUES ($1, $2, $3)';
    const results = await db.query(queryStr, [
      topicName,
      JSON.stringify({}),
      groupId,
    ]);
    console.log('Generated new topic: ', results);
    return next();
  } catch (err) {
    return next({
      err: 'Error in topicController.createTopic. Could not create topic',
    });
  }
};

module.exports = topicController;
