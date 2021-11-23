import {
  sendMailParamsSchema,
  errorSchema,
  sendEmailResponseParamsSchema
} from './schemas/'

export default {
  sendMailParams: sendMailParamsSchema,
  error: errorSchema,
  sendEmailResponseParams: sendEmailResponseParamsSchema
}
