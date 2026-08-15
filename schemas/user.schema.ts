export const userSchema = {
  type: 'object',
  required: ['id', 'name'],
  additionalProperties: false,
  properties: {
    id: {
      type: 'number',
    },
    name: {
      type: 'string',
    },
  },
};