# Matriz de Contenidos - Hacienda San Juan de las Flores

Esta matriz define qué contenido se mostrará en cada ruta del sitio web, asegurando una narrativa visual adecuada.

## `app/page.tsx` (Inicio)
- **Hero:** Título principal, subtítulo emocional y CTAs ("Agenda un recorrido", "Cotiza tu evento").
- **Presentación:** Texto introductorio enfocado en la exclusividad y conexión con Yucatán.
- **Tipos de Eventos (Preview):** Tarjetas visuales para Bodas, XV años, Celebraciones y Eventos Empresariales.
- **Espacios (Preview):** Destacar 3 áreas principales con enlaces a `/espacios`.
- **Experiencia:** Timeline visual (Visita -> Planeación -> Celebración).
- **Confianza:** Mención a Yaxkukul, contacto verificado y CTA final a WhatsApp.

## `app/espacios/page.tsx`
- **Cabecera:** Introducción a los espacios del recinto.
- **Lista de Espacios:** Tarjetas detalladas. (Atención: Mantener capacidades ocultas o con etiqueta `[Por confirmar]`).
- **Características generales:** Accesibilidad, estacionamiento, exclusividad de uso.

## `app/eventos/page.tsx`
- **Bodas:** Enfoque en romance, escenarios fotográficos.
- **XV Años:** Enfoque en espacios amplios y seguros.
- **Empresariales / Sociales:** Flexibilidad de áreas para distintos montajes.

## `app/galeria/page.tsx`
- **Cuadrícula fotográfica:** Imágenes destacadas (filtrables por tipo o espacio si hay suficientes fotos).

## `app/cotizar/page.tsx`
- **Formulario Multiestep:**
  - Paso 1: Tipo de evento.
  - Paso 2: Fecha estimada e invitados.
  - Paso 3: Selección de áreas de interés.
  - Paso 4: Datos de contacto y comentarios.

## `app/contacto/page.tsx`
- **Información Directa:** WhatsApp (999 265 9055), Lic. Cinthia Cecilia Campos Argüelles.
- **Ubicación:** Calle 18 x 20, Yaxkukul (Referencia a la oficina en Mérida como secundaria).
- **Formulario Rápido:** Para dudas simples o solicitud de recorridos.
