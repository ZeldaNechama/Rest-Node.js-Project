import app from './app';
const port = 3000;
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'Description for my API',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./routes/*.ts'], 
};

const specs = swaggerJsdoc(options);
app.use('/Swagger', swaggerUi.serve, swaggerUi.setup(specs));



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
