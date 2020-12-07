import app from "./app";

app.listen(3333, error => {
  if (error) {
    console.log(`Couldn't start the server.`);
  } else {
    console.log("The server is running on: http://localhost:3333/");
  }
});
