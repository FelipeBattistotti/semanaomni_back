const connection = require('../database/connection');
//const crypto = require('crypto');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    async create(request, response){
        //const params = request.query;
        //const params = request.params;

        const { name, email, whatsapp, city, uf } = request.body;

        //const id = crypto.randomBytes(4).toString('HEX');
        const id = generateUniqueId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        //console.log(data);

        return response.json({ id });
    }
};
