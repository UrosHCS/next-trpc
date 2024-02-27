// nodejs server that accepts a get request on home url and returns Hello world string, without using any library
const http = require('http');

const server = http.createServer((req, res) => {
  const limitString = req.url.split('?')[1];

  let limit = parseInt(limitString, 10);

  if (!Number.isInteger(limit) || limit < 1 || limit > 1000) {
    limit = 10;
  }

  getPatients(limit).then(data => {
    // TODO: If some of the results are an empty array, perhaps we should
    // fetch more until we have `limit` number of non-empty results.
    res.end(JSON.stringify(data));
  });
});

server.listen(3210, () => {
  console.log('Server is running on port 3210');
});

export async function getPatients(limit) {
  const promises = Array.from({ length: limit }, getDataForOnePatient);

  return Promise.all(promises).catch(err => {
    console.error(err);
    return [];
  });
}

async function getDataForOnePatient() {
  const response = await fetch('https://mockapi-furw4tenlq-ez.a.run.app/data');

  return response.json();
}
