export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
      {
        name: 'customerTestimonial',
        title: 'Customer Testimonial',
        type: 'text'
      },
      {
        name: 'customerName',
        title: 'Customer Name',
        type: 'string'
      },
      {
        name: 'customerImage',
        title: 'Customer Photo',
        type: 'image',
        options: {
          hotspot: true
        }
      },
    ],
  }