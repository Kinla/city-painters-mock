export default {
    name: 'bannerHeader',
    title: 'Banner Header',
    type: 'object',
    fields: [
      {
        name: 'header',
        title: 'Header Text',
        type: 'string',
        options: {
          isHighlighted: true
        }
      },
      {
        name: 'bannerImage',
        title: 'Banner Image',
        type: 'image',
        options: {
          hotspot: true,
          metadata: ['palette'],
          isHighlighted: true
        }
      }
    ]
  }
  