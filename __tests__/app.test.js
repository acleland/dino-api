const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/dinos should return list of dinosaurs', async () => {
    const expected = [
      {
        id: '1',
        name: 'Iguanodon',
        period: 'Cretaceous',
      },
      {
        id: '2',
        name: 'Tyrannosaurus',
        period: 'Cretaceous',
      },
      {
        id: '3',
        name: 'Apatosaurus',
        period: 'Jurassic',
      },
      {
        id: '4',
        name: 'Dilophosaurus',
        period: 'Jurassic',
      },
      {
        id: '5',
        name: 'Ankylosuaurus',
        period: 'Cretaceous',
      },
      {
        id: '6',
        name: 'Stegosaurus',
        period: 'Jurassic',
      },
      {
        id: '7',
        name: 'Triceratops',
        period: 'Cretaceous',
      },
      {
        id: '8',
        name: 'Pteronodon',
        period: 'Cretaceous',
      },
      {
        id: '9',
        name: 'Dimetrodon',
        period: 'Triassic',
      },
      {
        id: '10',
        name: 'Diplodocus',
        period: 'Jurassic',
      },
      {
        id: '11',
        name: 'Parasaurolophus',
        period: 'Cretaceous',
      },
      {
        id: '12',
        name: 'Spinosaurus',
        period: 'Crecaceous',
      },
      {
        id: '13',
        name: 'Velociraptor',
        period: 'Cretaceous',
      },
      {
        id: '14',
        name: 'Spike the Puppy Dragon',
        period: 'Quaternary',
      },
    ];
    const res = await request(app).get('/dinos');
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
