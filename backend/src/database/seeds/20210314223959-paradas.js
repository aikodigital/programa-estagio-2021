module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'paradas',
      [
        {
          name: 'AFONSO BRAZ C/B1',
          latitude: -23.59572,
          longitude: -46.673285,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'PARADA 1 - AFONSO BRAZ B/C',
          latitude: -23.592938,
          longitude: -46.672727,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'PARADA 2 - AFONSO BRAZ B/C',
          latitude: -23.59337,
          longitude: -46.672766,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Parada Basilio Veiga',
          latitude: -23.686008,
          longitude: -46.702349,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'PARADA 14 BIS B/C',
          latitude: -23.555934,
          longitude: -46.650112,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Parada Marina Cintra - B/C',
          latitude: -23.577156,
          longitude: -46.672467,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'GETULIO VARGAS B/C',
          latitude: -23.558836,
          longitude: -46.653843,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'ANGELICA B/C',
          latitude: -23.534564,
          longitude: -46.654302,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'PARADA PALMEIRAS B/C',
          latitude: -23.525799,
          longitude: -46.679251,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'ANTARTICA B/C"',
          latitude: -23.526523,
          longitude: -46.673588,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('paradas', null, {});
  },
};
