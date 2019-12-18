export default {
    name: 'service2',
    title: 'Service2',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'bannerHeader'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'title.header',
            maxLength: 96
          }
      },
      {
        name: 'serviceDetails',
        title: 'Service Details',
        type: 'array',
        of: [{ type: 'section'}]
      },
      {
        name: 'testimonialList',
        title: 'Testimonials',
        type: 'testimonialList'
      },
      {
        name: 'featureList',
        title: 'Feature List',
        type: 'featureList'
      },
      {
        name: 'ctaLarge',
        title: 'Large CTA',
        type: 'ctaLarge'
      },
      {
        name: 'tips',
        title: 'Tips',
        type: 'array',
        of: [{ type: 'section' }]
      },
    ],
    preview : {
      select: {
        title: 'title.header'
      }
    }
  }