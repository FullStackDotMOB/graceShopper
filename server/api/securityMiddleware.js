const {
  models: { User },
} = require('../db');

// const requireToken = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization;
//     const user = await User.findByToken(token);
//     if (!user) {
//       return res.status(404).send('Not found: This user does not exist');
//     } else {
//       req.user = user;
//       next();
//     }
//   } catch (err) {
//     next(err);
//   }
// };

const isAdmin = (req, res, next) => {
  if (req.user !== 'admin') {
    res
      .status(403)
      .send(
        'Halt! Who goes there? This section is for Admins only! Go back from whence you came!'
      );
  } else {
    next();
    return true;
  }
};

module.exports = {
  // requireToken,
  isAdmin,
};
