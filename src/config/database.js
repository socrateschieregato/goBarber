module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestmaps: true,
    underscored: true,
    underscoredAll: true,
  },
}
