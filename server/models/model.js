const { Pool } = require('pg');
const { config } = require('dotenv');
config();
const PG_URI = process.env.PG_URI;

const pool = new Pool({
  connectionString: PG_URI,
});

const usersQuery =
  'CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, userName varchar NOT NULL, password varchar NOT NULL, groups varchar NOT NULL, friends varchar NOT NULL, created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, post_count varchar NOT NULL)';

const topicsQuery =
  'CREATE TABLE IF NOT EXISTS topics (id SERIAL PRIMARY KEY, topicName varchar NOT NULL, posts varchar NOT NULL, created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, group_id INT NOT NULL, FOREIGN KEY (group_id) REFERENCES groups (id))';

const groupsQuery =
  'CREATE TABLE IF NOT EXISTS groups (id SERIAL PRIMARY KEY, groupName varchar NOT NULL, topics varchar NOT NULL, members varchar NOT NULL, moderators varchar NOT NULL, created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, creator INT NOT NULL, FOREIGN KEY (creator) REFERENCES users (id))';

const postsQuery =
  'CREATE TABLE IF NOT EXISTS posts (id SERIAL PRIMARY KEY, postBody varchar NOT NULL, comments varchar NOT NULL, created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, author INT NOT NULL, FOREIGN KEY (author) REFERENCES users (id))';

const commentQuery =
  'CREATE TABLE IF NOT EXISTS comments (id SERIAL PRIMARY KEY, commentBody varchar NOT NULL, created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, author INT NOT NULL, FOREIGN KEY (author) REFERENCES users (id), post INT NOT NULL, FOREIGN KEY (post) REFERENCES posts (id))';

pool.query(usersQuery);
pool.query(groupsQuery);
pool.query(topicsQuery);
pool.query(postsQuery);
pool.query(commentQuery);

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
