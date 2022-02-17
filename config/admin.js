module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '22cec1fa5dcc760c852c6c9d4e3fc11c'),
  },
});
