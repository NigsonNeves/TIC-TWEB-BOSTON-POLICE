const Request = require('request');

class UserController {
    async Get() {
        const promise = new Promise((resolve, reject) => {
            Request('http://localhost:8081/api/users', function (error, response, body) {
                if (error) {
                    reject(error);
                } else {
                    resolve(body);
                }
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            });
        });
        return promise;
    }
}

module.exports = new UserController();