export default {
    name: 'feature',
    title: 'Feature',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'title',
        type: 'string'
      },
      {
        name: 'icon',
        title: 'Icon',
        type: 'image',
        options: {
          hotspot: true
        }
      },
    ],
  }