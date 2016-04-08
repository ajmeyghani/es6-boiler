function endpoints(app) {
  app.send('/test', {
    "name": "Amin",
    "details": {
      "server": "running"
    },
    "fakePosts": [
    { "id": "1", "msg": "hello" },
    { "id": "2", "msg": "hello2" }
    ]
  });

  app.send('/hello', {
    "msg": "hello"
  });
}

export {endpoints}
