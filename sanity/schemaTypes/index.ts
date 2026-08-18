import { type SchemaTypeDefinition } from 'sanity'

// 1. Import schema yang sudah kamu buat dari folder sebelah
import berita from '../schemas/berita'
import prestasi from '../schemas/prestasi'

export const schema: { types: SchemaTypeDefinition[] } = {
  // 2. Daftarkan di dalam array ini
  types: [berita, prestasi],
}