export const sendMailPath = {
    post: {
        security: [{
            bearerAuth: []
        }],
        tags: ['Mail'],
        summary: 'API para enviar email',
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/sendMailParams'
                    }
                }
            }
        },
        responses: {
            200: {
                description: 'Sucesso',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/sendEmailResponseParams'
                        }
                    }
                }
            },
            400: {
                $ref: '#/components/badRequest'
            },
            401: {
                $ref: '#/components/unauthorized'
            },
            500: {
                $ref: '#/components/serverError'
            }
        }
    }
}