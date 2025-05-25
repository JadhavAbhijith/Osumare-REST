const bcrypt = require('bcryptjs');

const fakeUser = { 
    username: 'admin',
    password: 
    bcrypt.hashSync('password123', 8),
};

module.exports = fakeUser;