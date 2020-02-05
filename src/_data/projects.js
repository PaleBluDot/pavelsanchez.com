const axios = require('axios');
const dotEnv = require('dotenv');

const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_BASE_ID;
const baseName = 'projects';

const tableUrl = `https://api.airtable.com/v0/${baseId}/${baseName}?api_key=${apiKey}`;

module.exports = async () => {
	const results = await axios.get(tableUrl);

	const res = results.data.records;
	const name = results.data.records[0].fields.name;
	const year = results.data.records[0].fields.year;
	const client = results.data.records[0].fields.client;
	const website = results.data.records[0].fields.website;
	const tools = results.data.records[0].fields.tools;
	const media = results.data.records[0].fields.media;

	return {
		res
	};
};
