const xhr =  (method, url, callback) => {
  const xhrInstance = new XMLHttpRequest();
  xhrInstance.onreadystatechange = () => {
    if (xhrInstance.readyState === 4) {
      callback(xhrInstance.responseText);
    }
  };
  xhrInstance.open(method, url);
  xhrInstance.send();
};

export {xhr}
