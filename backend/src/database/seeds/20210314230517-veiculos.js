module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'veiculos',
      [
        {
          name: 'M.BENZ',
          modelo: 'SPRINTER',
          linha_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'MARCOPOLO',
          modelo: 'MARCOPOLO/VOLARE W9 ON',
          linha_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'MARCOPOLO',
          modelo: 'MARCOPOLO/VOLARE V8 ON',
          linha_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'VW',
          modelo: 'VW/MPOLO SENIOR ON',
          linha_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'M.BENZ',
          modelo: 'M.BENZ/MPOLO SENIOR ON',
          linha_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'MARCOPOLO',
          modelo: 'MARCOPOLO/VOLARE V8 ESC',
          linha_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'VW',
          modelo: 'NEOBUS THUNDER 29',
          linha_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'AGRALE',
          modelo: 'AGRALE/MPOLO IDEALE R',
          linha_id: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'SCANIA',
          modelo: 'SCANIA/IRIZAR PB R ',
          linha_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'M.BENZ',
          modelo: 'COMIL CAMPIONE 21',
          linha_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('veiculos', null, {});
  },
};
