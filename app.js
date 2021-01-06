var awsIot = require('aws-iot-device-sdk');


var device = awsIot.device({
   keyPath: '86b1c1c908-private.pem.key',

    // adding path for the private key.

  certPath: '86b1c1c908-certificate.pem.crt',

    //adding path for the certificate key

    caPath: 'rootCA.pem',

    // adding root CA path
  clientId: 'newThing',

    // adding clientID of AWS

      host: 'ar5hy24zq542e-ats.iot.us-east-2.amazonaws.com'

    // adding host for the AWS
});



device
  .on('connect', function() {
    console.log('connect');
    // alert at console if connected succesfully

    device.publish('topic_1', JSON.stringify({ Sensor_test_data_sent: 20}));

    // publishing through mqtt a custom message to the AWS cloud

    console.log('message sent .. ');

    // alert at console if message sent succesfully

  });

// device
//   .on('message', function(topic, payload) {
//     console.log('message', topic, payload.toString());
//     console.log('ajidsifu');
//   });