
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();
        
        //Chave estrageira
        table.foreign('ong_id').references('id').inTable('ongs');
      });
};

exports.down = function(knex) {
    //desfazer metodo up
    return knex.schema.dropTable('incidets');
  
};
