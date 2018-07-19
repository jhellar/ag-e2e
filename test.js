const wdio = require('webdriverio');
const opts = require('./opts');

const client = wdio.remote(opts);

describe('Test', function() {
  this.timeout(0);

  before(async function() {
    await client.init();
  });

  after(async function() {
    await client.end();
  });

  it('should login', async function() {
    await client.pause(3000) // wait for initialization
      .click('.bar-button-menutoggle')
      .pause(10000);
  });
});