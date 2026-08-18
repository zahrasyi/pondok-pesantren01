export default {
    name: 'berita',
    title: 'Berita & Pengumuman',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Judul Berita',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'category',
        title: 'Kategori',
        type: 'string',
        options: {
          list: [
            { title: 'Akademik', value: 'Akademik' },
            { title: 'Penerimaan', value: 'Penerimaan' },
            { title: 'Kampus', value: 'Kampus' },
            { title: 'Penelitian', value: 'Penelitian' },
          ],
        },
      },
      {
        name: 'date',
        title: 'Tanggal Publikasi',
        type: 'date',
        options: { dateFormat: 'DD MMMM YYYY' },
      },
      {
        name: 'img',
        title: 'Gambar Utama',
        type: 'image',
        options: { hotspot: true }, // Memungkinkan klien mengatur fokus gambar
      },
      {
        name: 'excerpt',
        title: 'Kutipan Singkat (Excerpt)',
        type: 'text',
        description: 'Muncul di kartu berita depan (Maks. 200 karakter)',
      },
      
      {
        name: 'slug',
        title: 'Slug (URL)',
        type: 'slug',
        options: {
          source: 'title', // Otomatis membuat URL dari judul
          maxLength: 96,
        },
      },
      {
        name: 'content',
        title: 'Isi Berita Lengkap',
        type: 'array',
        of: [
          { type: 'block' }, // Untuk teks paragraf biasa
          { type: 'image', options: { hotspot: true } } // Memungkinkan admin menyisipkan gambar di tengah teks
        ],
      },
     
    ],
  };