module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'linhas',
      [
        {
          name: 'PCA.RAMOS DE AZEVEDO',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'STO. AMARO',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'JABAQUARA',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'TERM. SACOMÃ',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'JD. SÃO ROBERTO',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'VL. JOANIZA',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'PÇA. JOÃO MENDES',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'TERM. ÁGUA ESPRAIADA',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'METRÔ TATUAPÉ',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'CONEXÃO VL. IÓRIO',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('linhas', null, {});
  },
};
