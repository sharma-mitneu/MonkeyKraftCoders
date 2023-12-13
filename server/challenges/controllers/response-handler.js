

export const setResponse = (data,response) =>{

    response.status(200)
        .json(data);
}

export const setErrorResponse = (error, response) => {
  console.error('Error:', error); // Log the error message to the console
  response.status(500).json({
    code: 'ServiceError',
    message: `Error occurred while processing your request. ${error.message || 'No specific error message available.'}`,
  });
};