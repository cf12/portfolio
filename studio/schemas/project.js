export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image'
    },
    {
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        storeOriginalFilename: false,
        accept: 'video/*'
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'markdown'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'thumbnail'
    }
  }
}
