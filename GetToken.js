const code = new URLSearchParams(window.location.search).get('code');
const clientId = '7qs5h2pj1j8a8gefv2g1m36okv';
const redirectUri = 'https://50.112.204.164/loggedin.html';

const params = {
  grant_type: 'authorization_code',
  code: code,
  client_id: clientId,
  redirect_uri: redirectUri,
};

const tokenEndpoint = `https://user-login.auth.us-west-2.amazoncognito.com/oauth2/token`;

fetch(tokenEndpoint, {
  method: 'POST',
  body: new URLSearchParams(params),
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})
  .then(response => response.json())
  .then(data => {
    const accessToken = data.access_token;
    const idToken = data.id_token;
    const refreshToken = data.refresh_token;

    // Now that you have the access token and ID token, you can use them to get the identity pool token
    // and make requests to S3 or other AWS services.
  })
  .catch(error => console.error(error));
