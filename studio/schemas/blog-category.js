import { baseLanguage } from '../contentTypes/localeText';

export default {
  name: 'blog-category',
  title: 'Blog Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`,
    },
  },
};
