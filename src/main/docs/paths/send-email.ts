export const sendMailPath = {
    post: {
        tags: ['Mail'],
        summary: 'API para enviar email',
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/sendEmailParams'
                    }
                }
            }
        },
        responses: {
            200: {
                description: 'Senha trocada'
            }
        }
    }
}