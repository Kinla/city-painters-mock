export default {
    name: 'service',
    title: 'Service',
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
        name: 'content',
        type: 'array',
        of: [{ type: 'testimonialList' }, { type: 'featureList' }, { type: 'section' }, { type: 'ctaLarge' }]
      },
    ],
    preview : {
      select: {
        title: 'title.header'
      }
    }
  }