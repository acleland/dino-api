const pool = require('../utils/pool');

class Dino {
  id;
  name;
  period;
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.period = row.period;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM dinos;');
    return rows.map((row) => new Dino(row));
  }
}

module.exports = Dino;
