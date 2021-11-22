export const unauthorized = {
    description: 'Chave de acesso inválida',
    content: {
        'application/json': {
            schema: {
                $ref: '#/schemas/error'
            }
        }
    }
}