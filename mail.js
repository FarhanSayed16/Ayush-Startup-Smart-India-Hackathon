var Brevo = require('@getbrevo/brevo');
var defaultClient = Brevo.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
var partnerKey = defaultClient.authentications['partner-key'];
partnerKey.apiKey = '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';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partnerKey.apiKeyPrefix = 'Token';

var apiInstance = new Brevo.TransactionalEmailsApi();

var sendSmtpEmail = new Brevo.SendSmtpEmail({

     "sender":{ "email":"shahnawab245@gmail.com", "name":"TechWorkers"},
     "subject":"This msg from Team TechWorkerrs",
     "htmlContent":"<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>",
     "params":{
        "greeting":"This is the default greeting",
        "headline":"This is the default headline"
     },
   "messageVersions":[
     //Definition for Message Version 1 
     {
         "to":[
            {
               "email":"farhansayed54@gmail.com",
               "name":"Bob Anderson"
            },
            {
               "email":"kaustubh7205@gmail.com",
               "name":"Anne Smith"
            }
         ],
         "htmlContent":"<!DOCTYPE html><html><body><h1>Modified header!</h1><p>This is still a paragraph</p></body></html>",
         "subject":"We are happy to be working with you"
      },
     
     // Definition for Message Version 2
      {
         "to":[
            {
               "email":"shahnawab245@gmail.com",
               "name":"Jim Stevens"
            },
            {
               "email":"mark@example.com",
               "name":"Mark Payton"
            },
            {
               "email":"andrea@example.com",
               "name":"Andrea Wallace"
            }
         ]
      }
   ]

}); // SendSmtpEmail | Values to send a transactional email

apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
