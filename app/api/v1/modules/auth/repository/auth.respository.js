const models = require("../../../../v1/common/models");
const { User, Session } = models;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ono = require("ono");
const generatetoken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

async function createUser(req, res) {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    throw ono({ code: "Already exsists", status: 404 });
  }
  const userAlreadyExist = await User.findOne({
    where: { email: req.body.email },
  });
  if (userAlreadyExist) {
    throw ono({ code: "Already exsists", status: 404 });
  }
  const salt = await bcrypt.genSalt(12);
  const encodePass = await bcrypt.hash(password, salt);
  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password: encodePass,
  });
  if (!newUser) {
    res.status(400);
    throw new Error(" invalid data");
  }
  return newUser;
}

async function login(req, res) {
  const { email, password } = req;
  if (!email || !password) {
    throw ono({ code: "Please fill all the details", status: 400 });
  }
  const user = await User.findOne({ where: { email: email } });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = generatetoken(user.id);
    const session = Session.create({ email, token });
    if (session) {
      return {
        status: 200,
        message: "successful login!!!",
        token: token,
      };
    }
  } else {
    throw ono({ code: "wrong data entered", status: 404 });
  }
}

async function signout(req, res) {
  const sessionToken = req.headers.authorization.split(" ")[1];
  const sessionFound = await Session.findOne({
    where: { token: sessionToken },
  });
  const updateToken = await Session.destroy({
    where: {
      token: sessionToken,
    },
  });
  if (!updateToken) {
    return res.status(400).json({
      error: "unable to logout",
    });
  } else {
    return {
      status: 200,
      message: "logout successfull!",
    };
  }
}

module.exports = { createUser, login, signout };
