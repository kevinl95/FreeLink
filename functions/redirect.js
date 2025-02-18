exports.handler = async (event, context) => {
    const redirectUrl = process.env.REDIRECT_URL;  // Read the environment variable
  
    if (!redirectUrl) {
      return {
        statusCode: 500,
        body: 'REDIRECT_URL environment variable not set.',
      };
    }
  
    return {
      statusCode: 301,  // HTTP status code for permanent redirect
      headers: {
        Location: redirectUrl,  // Redirect to the URL specified in the environment variable
      },
    };
  };
  