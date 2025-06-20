exports.handler = async (event, context) => {
  if (event.httpMethod === "GET") {
    try {
      // Extract location from query parameters
      const location = event.queryStringParameters?.location || "Unknown";

      // Return the data as the response
      const response = `The weather in ${location} is sunny`;

      return {
        statusCode: 200,
        body: JSON.stringify({ weather: response }),
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
