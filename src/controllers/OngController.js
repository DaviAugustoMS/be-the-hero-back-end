const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    // Listagem de ongs
    async index (request, response) {
        const ong = await connection('ongs').select('*');
    
        return response.json(ong);
    },
    //Cadastro de ongs
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
    }
}