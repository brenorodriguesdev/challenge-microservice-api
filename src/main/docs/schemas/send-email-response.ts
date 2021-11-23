export const sendEmailResponseParamsSchema = {
    type: 'object',
    properties: {
      email: {
        type: 'string'
      },
      sent: {
        type: 'boolean'
      },
      error: {
        type: 'string'
      }
    },
    required: ['email', 'sent']
  }