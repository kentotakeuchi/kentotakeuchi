import { baseLanguage } from '../contentTypes/localeText';

export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subImages',
      title: 'Sub images',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'blog-category' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'description',
      type: 'localeBlock',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'likes',
      title: 'Likes',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: `title.${baseLanguage.id}`,
      author: `author.name.${baseLanguage.id}`,
      media: 'thumbnail',
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
