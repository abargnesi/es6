function asyncRequest(url) {
  return new Promise((resolve, reject) => {
    var oReq = new XMLHttpRequest();
    oReq.onload = function() {
      if (this.status == 200)
        resolve({ url, content: this.responseText });
      else
        reject(`request for ${url} failed with status ${this.status}`)
    };
    oReq.open("get", url, true);
    oReq.send();
  });
}

console.log('Trying to make a promise I can\'t keep...');
asyncRequest('http://localhost:63342/es6/index.h').then(
  (value) => {
    console.log(`fulfilled - downloaded, content: ${value}`);
  },
  (reason) => {
    console.log(`rejected - ${reason}`);
  });
console.log('...(cough)...');

console.log('Trying to make a promise I can keep...');
asyncRequest('http://localhost:63342/es6/index.html').then(
    (result) => {
      console.log(result.content);
      console.log(`fulfilled - downloaded ${result.url}`);
    },
    (reason) => {
      console.log(`rejected - ${reason}`);
    });
console.log('...(cough)...');
