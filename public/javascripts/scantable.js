// Set the region and create a DynamoDB client
AWS.config.update({region: 'us-west-2'});
const dynamodb = new AWS.DynamoDB();

function scanTable() {
  // Get the scan parameters from the form
  const attribute = "string";
  const value = document.getElementById('value').value;

  // Set the scan parameters
  const params = {
    TableName: 's3-json-textract-tablev2',
    FilterExpression: `contains(${attribute}, :value)`,
    ExpressionAttributeValues: {
      ':value': {S: value}
    }
  };

  // Scan the table
  dynamodb.scan(params, function(err, data) {
    if (err) {
      console.error('Error scanning table: ', err);
    } else {
      // Display the scan result
      const result = JSON.stringify(data.Items);
      document.getElementById('result').innerHTML = result;
    }
  });
}
