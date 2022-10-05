/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('performance', (table) => {
      table.increments('id').unique().notNullable().primary();
      table.integer('from_employee').notNullable().references('id').inTable('employees');
      table.integer('to_employee').notNullable().references('id').inTable('employees');
      table.string('comments');
      table.integer('growth').notNullable();
      table.integer('kindness').notNullable();
      table.integer('delivery').notNullable();
      table.integer('status').notNullable();
    });
  };
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.raw('DROP TABLE employees CASCADE');
  };
