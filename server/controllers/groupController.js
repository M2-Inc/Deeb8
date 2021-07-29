const db = require('../models/model');
const groupController = {};

groupController.validateGroupname = async (req, res, next) => {
  try {
    console.log('Inside group controller Validate groupname');
    const { groupName } = req.body;
    const searchQuery = 'SELECT groupname FROM groups WHERE groupname = $1';
    const searchParams = [groupName];
    const { rowCount } = await db.query(searchQuery, searchParams);
    console.log('Number of matches found in db: ', rowCount);
    if (rowCount) return next({ err: 'error groupname already taken' });
    return next();
  } catch (err) {
    return next({
      err: 'Error in groupController.createGroup. Could not query database for groupName.',
    });
  }
};

groupController.createGroup = async (req, res, next) => {
  try {
    console.log('Inside group controller create group');
    //userId is the id assigned to a user in the table
    const { groupName, userId } = req.body;
    let queryStr =
      'INSERT INTO groups (groupName, topics, members, moderators, creator) VALUES ($1, $2, $3, $4, $5)';
    const results = await db.query(queryStr, [
      groupName,
      JSON.stringify({}),
      JSON.stringify({}),
      JSON.stringify({}),
      userId,
    ]);
    console.log('Generated new group: ', results);
    return next();
  } catch (err) {
    return next({
      err: 'Error in groupController.createGroup. Could not create group',
    });
  }
};

module.exports = groupController;
