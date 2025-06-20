require("dotenv").config();
const hubspot = require("@hubspot/api-client");

exports.handler = async (event, context) => {
  if (event.httpMethod === "GET") {
    const hubspotClient = new hubspot.Client({
      accessToken: process.env.HUBSPOT_ACCESS_TOKEN,
    });

    try {
      const allContacts = await hubspotClient.crm.contacts.getAll();

      // Return the data as the response
      return {
        statusCode: 200,
        body: JSON.stringify({ contacts: allContacts }),
      };
    } catch (error) {
      // Return an error response if there was an issue processing the request
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to process GET request" }),
      };
    }
  }
};
