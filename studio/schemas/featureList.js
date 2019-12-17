export default {
    name: 'featureList',
    title: 'Feature List',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'title',
        type: 'string'
      },
      {
          name: 'css',
          title: 'CSS',
          type: 'string'
      },
      {
        title: 'features',
        name: 'Features',
        type: 'array',
        of: [{ type: 'reference', to: {type: 'feature'} }]
      }
    ],
  }