module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '66.94.103.207'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'boxfy'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '@Ana010118'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
