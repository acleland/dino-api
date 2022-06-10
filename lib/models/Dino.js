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

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM dinos WHERE id=$1', [id]);
    if (!rows[0]) return null;
    return new Dino(rows[0]);
  }
}

module.exports = Dino;
