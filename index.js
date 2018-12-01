_getIPAddress = () => {
  const url="https://httpbin.org/ip";
  return fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson.origin);
      document.getElementById("ip").innerText = responseJson.origin
    })
    .catch(error => {
      console.error(error);
    });
};

_getIPAddress();

