
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My Business API',
            version: '1.0.0',
            description: 'A description of your API',
        },
        tags: [
            { name: "Business", description: "Endpoints related to business operations" },
            { name: "Meeting", description: "Endpoints related to meeting operations" },
            { name: "Service", description: "Endpoints related to service operations" },
            { name: "User", description: "Endpoints related to user operations" }
        ]
    },
    apis: ['./src/routes/*.ts'],
};


const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Application) => {
    app.use('/Swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true, swaggerOptions: { docExpansion: "none" } }));
}
