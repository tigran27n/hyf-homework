const CRUDCRUD_API_KEY = '1f96865285eb41f4850e0ac73233d8b4';
const RAPIDAPI_API_KEY = '4caa623681mshdd50f2101981573p1e9109jsnc16590a79b9e';
// API key dont work i dont know why :(
function postScreenshot(url, data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `https://crudcrud.com/api/${CRUDCRUD_API_KEY}/screenshots`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 201) {
          resolve(JSON.parse(xhr.responseText)._id);
        } else {
          reject(new Error('Failed to generate screenshot'));
        }
      }
    };
    xhr.send(JSON.stringify({ url, data }));
  });
}

function getScreenshots() {
  return fetch(`https://crudcrud.com/api/${CRUDCRUD_API_KEY}/screenshots`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to retrieve screenshots');
      }
    });
}

function deleteScreenshot(id) {
  return fetch(`https://crudcrud.com/api/${CRUDCRUD_API_KEY}/screenshots/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        return;
      } else {
        throw new Error('Failed to delete screenshot');
      }
    });
}

function generateScreenshot(url) {
  return fetch(`https://website-screenshot6.p.rapidapi.com/screenshot?url=${encodeURIComponent(url)}&width=1920&height=1080&fullscreen=true`, {
      headers: {
        'x-rapidapi-host': 'website-screenshot6.p.rapidapi.com',
        'x-rapidapi-key': RAPIDAPI_API_KEY
      }
    })
    .then(response => {
      if (response.ok) {
        return response.arrayBuffer();
      } else {
        throw new Error('Failed to generate screenshot');
      }
    })
    .then(arrayBuffer => {
      const data = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
      return postScreenshot(url, data);
    });
}

// Example usage
generateScreenshot('https://example.com')
  .then(id => console.log(`Screenshot generated with ID ${id}`))
  .catch(error => console.error(error));
