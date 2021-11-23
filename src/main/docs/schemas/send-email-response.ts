export const sendEmailResponseParamsSchema = {
    type: 'object',
    properties: {
      email: {
        type: 'string'
      },
      htmlEmail: {
        type: 'boolean'
      },
      error: {
        type: 'string'
      }
    },
    required: ['email', 'sent']
  }