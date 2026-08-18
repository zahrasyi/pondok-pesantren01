export default {
    name: 'prestasi',
    title: 'Prestasi Santriwati',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Judul Prestasi',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'year',
        title: 'Tahun (Contoh: 2025)',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'desc',
        title: 'Deskripsi Singkat',
        type: 'text',
        validation: (Rule: any) => Rule.required().max(150),
      },
    ],
  };