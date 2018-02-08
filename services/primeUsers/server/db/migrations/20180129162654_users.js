
exports.up = function(knex, Promise) {
  return knex.schema.createTable('primeusers', (table) => {
    table.integer('userID').notNullable().unique();
    table.string('cartID').notNullable();
    table.date('trialStartDate').notNullable();
    table.date('membershipStartDate').notNullable();
    table.boolean('optOut').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('primeusers');
};
//copy users from '/Users/acme/Documents/microspore/src/server/db/testDataSmall.text' delimiter ',';