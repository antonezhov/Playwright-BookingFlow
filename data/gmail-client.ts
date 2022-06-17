import * as fs from 'fs'
import readline from 'readline'
import {google}  from 'googleapis'
import utf8 from 'utf8'
import Base64 from 'js-base64'



// If modifying these scopes, delete token.json.
const SCOPES = ['https://mail.google.com/'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.Fl
const TOKEN_PATH = 'token.json';

// // Load client secrets from a local file.
// fs.readFile('credentials.json', (err, content) => {
//   if (err) return console.log('Error loading client secret file:', err);
//   // Authorize a client with credentials, then call the Gmail API.
//   // authorize(JSON.parse(content), main);
// });

let oAuth2Client 
const credentials = { "installed": { "client_id": "232344091704-34m5mu1e2r4c7027v7crori3ajqitvri.apps.googleusercontent.com", "project_id": "test-project-2-318211", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_secret": "OsvRNC7j-DvqB0Qz_2ucF6dh", "redirect_uris": ["https://developers.google.com/oauthplayground"] } }/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
 export const gmail_client = {
  authorize: async function authorize() {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
     oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);
      
    // Check if we have previously stored a token.
    const token:any = fs.readFileSync(TOKEN_PATH)
      // if (err) return getNewToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      // callback(oAuth2Client);
    // });
  },
  getLeadLink: async function getLeadLink() {

    const messages:any = await listMessages(oAuth2Client, 'label:inbox subject:(welcome to elemy) is:unread');
    if (messages.length === 0) 
    {
      console.log('no new massages available')
      return null
    }

    // console.log(messages[0].id)
    const body:any = await getBody(oAuth2Client, messages[0].id)
    // console.log(body.raw)
    var text = Base64.decode(body.raw);
    fs.writeFileSync('raw.txt', text)
    text = text.replace(/=3D/g, '=').replace(/=0A/g, '').replace(/=\r\n/g, '')
    const link:any = text.match(/<a[^hr]+href="([^"]+)"[^>]+>\sCONFIRM INFORMATION[\s=]*<\/a>/mi)
    // var text = utf8.decode(bytes)
    return link[1]
  },
  getWelcomeEmails: async function getWelcomeEmails() {

    return await listMessages(oAuth2Client, 'label:inbox subject:(welcome to elemy) is:unread to:autotest');
  },

  getNewToken(callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error('Error retrieving access token', err);
        oAuth2Client.setCredentials(token);
        // Store the token to disk for later program executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) return console.error(err);
          console.log('Token stored to', TOKEN_PATH);
        });
        callback(oAuth2Client);
      });
    });
  }

}


/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */


function getNewToken(callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Lists the labels in the user's account.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listLabels(auth, messageId) {
  const gmail = google.gmail({ version: 'v1', auth });
  gmail.users.labels.list({
    userId: 'me',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const labels = res.data.labels;
    if (labels.length) {
      console.log('Labels:');
      labels.forEach((label) => {
        console.log(`- ${label.name} : ${label.id}`);
      });
    } else {
      console.log('No labels found.');
    }
  });
}

async function listMessages(auth, query) {
  return new Promise((resolve, reject) => {
    const gmail = google.gmail({ version: 'v1', auth });
    gmail.users.messages.list(
      {
        userId: 'me',
        q: query,
      }, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        if (!res.data.messages) {
          resolve([]);
          return;
        } resolve(res.data.messages);
        // console.log('res.data.messages', res.data.messages)
      }
    );
  });
}

 


async function getBody(auth, id) {
  return new Promise((resolve, reject) => {
    const gmail = google.gmail({ version: 'v1', auth });
    gmail.users.messages.get(
      {
        userId: 'me',
        id: id,
        format: 'raw'
      }, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        if (!res.data) {
          resolve([]);
          return;
        } resolve(res.data);

      }
    );
  });
}


