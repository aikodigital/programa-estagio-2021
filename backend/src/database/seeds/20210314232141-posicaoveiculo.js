module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'posicaoveiculos',
      [
        {
          latitude: -23.534012,
          longitude: -46.641221,
          veiculo_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: -23.60123,
          longitude: -46.6761784,
          veiculo_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: -23.1928659,
          longitude: -46.7512124,
          veiculo_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: -23.68265127,
          longitude: -46.70780412,
          veiculo_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: -23.55224934,
          longitude: -46.6921421,
          veiculo_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: -23.589012,
          longitude: -46.681241,
          veiculo_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: -23.5512794,
          longitude: -46.653877,
          veiculo_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: -23.535024,
          longitude: -46.6812312,
          veiculo_id: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: -23.52587,
          longitude: -46.682149,
          veiculo_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          latitude: -23.52659,
          longitude: -46.677902,
          veiculo_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('posicaoveiculos', null, {});
  },
};
