import app from './app';

const port = 3000;



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Swagger is running on http://localhost:${port}/Swagger`);
  
});
