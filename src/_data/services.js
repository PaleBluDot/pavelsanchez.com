const axios = require('axios');
const dotenv = require('dotenv').config();

const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_BASE_ID;
const baseName = 'services';

const tableUrl = `https://api.airtable.com/v0/${baseId}/${baseName}?api_key=${apiKey}`;

module.exports = async () => {
	const results = await axios.get(tableUrl);

	const name = results.data.records[0].fields.name;
	const price = results.data.records[0].fields.price;

	return {
		name,
		price
	};
};
