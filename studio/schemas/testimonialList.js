export default {
    name: 'testimonialList',
    title: 'Testimonial List',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'css',
        title: 'CSS',
        type: 'string'
      },
      {
        name: 'list',
        title: 'Testimonial',
        type: 'array',
        of: [{ type: 'reference', to: {type: 'testimonial'} }]
      }
    ],
  }
  