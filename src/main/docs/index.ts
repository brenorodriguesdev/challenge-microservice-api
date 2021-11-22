import paths from './paths'
import schemas from './schemas'

export default {
    openapi: '3.0.0',
    info: {
      title: 'Mensageria API',
      version: '1.0.0'
    },
    servers: [{
      url: '/api'
    }],
    tags: [{
      name: 'Mail',
      description: 'APIs de Email'
    }],
    paths,
    schemas
  }