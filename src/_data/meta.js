const axios = require('axios');
const dotEnv = require('dotenv');

const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_BASE_ID;
const baseName = 'settings';

const tableUrl = `https://api.airtable.com/v0/${baseId}/${baseName}?api_key=${apiKey}`;

module.exports = async () => {
	const results = await axios.get(tableUrl);
	const author = results.data.records[0].fields.author;
	const description = results.data.records[0].fields.description;
	const title = results.data.records[0].fields.title;
	const url = results.data.records[0].fields.url;
	return {
		author,
		description,
		title,
		url
	};
};
