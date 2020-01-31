
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: '1f46xy2fd123456',
          make: 'Chevrolet',
          model: 'Tahoe',
          mileage: 15400,
          transmission: "auto",
          title: 'clean'
        }
        
      ]);
    });
};
