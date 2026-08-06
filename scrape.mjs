import https from 'https';
import fs from 'fs';
import path from 'path';

const query = 'Hacienda San Juan de las Flores Yaxkukul';
const url = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
  }
};

https.get(url, options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    // Buscar todas las imágenes base64 encriptadas en la respuesta de Google
    // Google las guarda como 'data:image/jpeg;base64,...'
    const regex = /data:image\/(jpeg|png|gif);base64,([a-zA-Z0-9+/=]+)/g;
    let match;
    const images = [];

    while ((match = regex.exec(data)) !== null) {
      // Ignorar logos pequeños y basura (< 500 bytes en base64)
      if (match[2].length > 1000) {
        images.push(match[2]);
      }
    }

    console.log(`Se encontraron ${images.length} miniaturas de alta calidad.`);

    const outDir = path.join(process.cwd(), 'public', 'images', 'galeria');
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    let count = 0;
    for (const base64Data of images) {
      if (count >= 6) break; // Queremos 6 imágenes
      const buffer = Buffer.from(base64Data, 'base64');
      const filePath = path.join(outDir, `real_${count + 1}.jpg`);
      fs.writeFileSync(filePath, buffer);
      console.log(`Guardada imagen real_${count + 1}.jpg`);
      count++;
    }
  });
}).on('error', (err) => {
  console.error('Error fetching images:', err.message);
});
