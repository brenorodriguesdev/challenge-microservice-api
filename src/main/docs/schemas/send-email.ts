export const sendMailParamsSchema = {
    type: 'object',
    properties: {
      subjectEmail: {
        type: 'string'
      },
      htmlEmail: {
        type: 'string'
      },
      emails: {
        type: 'array',
        items: {
            type: 'string'
        }
      }
    },
    required: ['subjectEmail', 'htmlEmail', 'emails']
  }