
// import swaggerJSDoc from 'swagger-jsdoc';
// import swaggerUi from 'swagger-ui-express';
// import { Application } from 'express';

// const options = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             title: 'My Business API',
//             version: '1.0.0',
//             description: 'A description of your API',
//         },
//         tags: [
//             { name: "Business", description: "Endpoints related to business operations" },
//             { name: "Meeting", description: "Endpoints related to meeting operations" },
//             { name: "Service", description: "Endpoints related to service operations" },
//             { name: "User", description: "Endpoints related to user operations" },
//             { name: "Auth", description: "Endpoints related to auth operations" }
//         ]
//     },
//     apis: ['./src/routes/*.ts'],
// };


// const swaggerSpec = swaggerJSDoc(options);

// export const setupSwagger = (app: Application) => {
//     app.use('/hhh', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true, swaggerOptions: { docExpansion: "none" } }));
// }
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
            { name: "Business" },
            { name: "Meeting" },
            { name: "Service" },
            { name: "User" }
        ],
        components: {
            schemas: {
                Business: {
                    type: "object",
                    properties: {
                        businessId: { type: "string" },
                        userId: { type: "string" }
                    },
                    required: ["businessId", "userId"]
                }
            }
        }
    },
    apis: ['./src/routes/*.ts'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Application) => {
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
