exports.up = function(knex) {
    return knex.schema.createTable('company', (table) => {
      table.increments('id').unique().notNullable();
      table.text('company_name').notNullable();
    })
    .alterTable("employees", (table)=>{
      table.integer("company_id").unsigned().notNullable();
      table.foreign("company_id").references("company.id");
    });
  };
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
   knex.schema.dropTable('company');
   knex.schema.alterTable("employees",(table)=>{
   table.dropColumn("company_id");
  });
};