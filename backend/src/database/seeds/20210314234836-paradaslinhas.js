module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'paradaslinhas',
      [
        {
          linha_id: 1,
          parada_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          linha_id: 1,
          parada_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          linha_id: 1,
          parada_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          linha_id: 2,
          parada_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          linha_id: 2,
          parada_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          linha_id: 4,
          parada_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          linha_id: 4,
          parada_id: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          linha_id: 4,
          parada_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          linha_id: 5,
          parada_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          linha_id: 5,
          parada_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          linha_id: 6,
          parada_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          linha_id: 6,
          parada_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          linha_id: 7,
          parada_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          linha_id: 7,
          parada_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          linha_id: 8,
          parada_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          linha_id: 8,
          parada_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          linha_id: 10,
          parada_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          linha_id: 10,
          parada_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          linha_id: 9,
          parada_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          linha_id: 9,
          parada_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('paradaslinhas', null, {});
  },
};
