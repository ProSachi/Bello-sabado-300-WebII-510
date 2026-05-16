# Proyecto React + Vite + TypeScript + Tailwind CSS

Este proyecto ha sido configurado con React, Vite, TypeScript y Tailwind CSS, e incluye el componente **ScrollExpandMedia** para crear experiencias de scroll interactivas.

## ✅ Configuración Completada

- ✅ **TypeScript** - Configurado con tsconfig.json
- ✅ **Tailwind CSS** - Instalado y configurado
- ✅ **Path Aliases** - Alias `@/` configurado para imports
- ✅ **Framer Motion** - Para animaciones fluidas
- ✅ **Estructura shadcn** - Carpeta `/components/ui` creada

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/
│   │   ├── scroll-expansion-hero.tsx  # Componente principal
│   │   └── demo.tsx                   # Ejemplos de uso
│   ├── CharacterList.jsx              # Componente anterior
│   └── CharacterList.css
├── config/
│   └── axiosConfig.js
├── services/
│   └── rickAndMortyService.js
├── App.tsx                            # App principal (TypeScript)
├── main.tsx                           # Entry point (TypeScript)
└── index.css                          # Estilos globales + Tailwind
```

## 🚀 Comandos Disponibles

```bash
# Instalar dependencias (si es necesario)
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📦 Dependencias Instaladas

### Dependencias de Producción
- `react` - Biblioteca principal
- `react-dom` - React DOM
- `axios` - Cliente HTTP
- `framer-motion` - Animaciones

### Dependencias de Desarrollo
- `typescript` - Soporte TypeScript
- `tailwindcss` - Framework CSS
- `postcss` - Procesador CSS
- `autoprefixer` - Prefijos CSS automáticos
- `@types/react` - Tipos TypeScript para React
- `@types/react-dom` - Tipos TypeScript para React DOM

## 🎨 Componente ScrollExpandMedia

### Características

- ✨ Expansión de media al hacer scroll
- 🎥 Soporte para video e imágenes
- 📱 Responsive (mobile y desktop)
- 🎭 Animaciones con Framer Motion
- 🌓 Compatible con modo oscuro

### Props del Componente

```typescript
interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';     // Tipo de media
  mediaSrc: string;                   // URL del video/imagen
  posterSrc?: string;                 // Poster para video
  bgImageSrc: string;                 // Imagen de fondo
  title?: string;                     // Título
  date?: string;                      // Fecha o subtítulo
  scrollToExpand?: string;            // Texto de instrucción
  textBlend?: boolean;                // Activar mix-blend-difference
  children?: ReactNode;               // Contenido adicional
}
```

### Uso Básico

```tsx
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

function MyComponent() {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc="https://example.com/video.mp4"
      bgImageSrc="https://example.com/background.jpg"
      title="Mi Título"
      date="2026"
      scrollToExpand="Desplázate para Expandir"
    >
      <div>
        <h2>Contenido adicional</h2>
        <p>Este contenido aparece después de la expansión</p>
      </div>
    </ScrollExpandMedia>
  );
}
```

### Ejemplos Disponibles

El archivo `demo.tsx` incluye 4 ejemplos exportados:

1. **VideoExpansionTextBlend** - Video con efecto blend en texto
2. **ImageExpansionTextBlend** - Imagen con efecto blend en texto
3. **VideoExpansion** - Video sin efecto blend
4. **ImageExpansion** - Imagen sin efecto blend
5. **Demo** (default) - Demo interactivo con toggle entre video/imagen

## 🔧 Configuraciones Importantes

### Tailwind CSS (tailwind.config.js)

```javascript
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
}
```

### TypeScript (tsconfig.json)

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]  // Alias para imports
    }
  }
}
```

### Vite (vite.config.js)

```javascript
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

## 🎯 Importancia de /components/ui

La carpeta `/components/ui` es estándar en proyectos que usan **shadcn/ui**:

- **Organización**: Separa componentes de UI reutilizables
- **Convención**: Facilita la colaboración en equipos
- **Escalabilidad**: Permite agregar más componentes UI fácilmente
- **shadcn**: Compatible con la CLI de shadcn para agregar componentes

## 📝 Notas Adicionales

### Adaptaciones de Next.js a Vite

El componente original era para Next.js. Se realizaron estas adaptaciones:

1. ❌ Removido `'use client'` - No necesario en React/Vite
2. ❌ Removido `next/image` - Reemplazado con `<img>`
3. ✅ Mantenido TypeScript
4. ✅ Mantenido Tailwind CSS
5. ✅ Mantenido Framer Motion

### Imágenes de Stock

Las URLs de imágenes en el demo usan Unsplash con imágenes que existen:
- Video de muestra: Big Buck Bunny (video libre)
- Fondo: Paisajes de montaña
- Imágenes: Underwater photography

## 🐛 Solución de Problemas

### Error: Cannot find module '@/...'

Asegúrate de que Vite esté corriendo. Si persiste:
```bash
# Reinstalar dependencias
npm install
# Limpiar cache
rm -rf node_modules .vite
npm install
```

### Tailwind no funciona

Verifica que `index.css` incluya:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### TypeScript muestra errores

El Language Server puede tardar en actualizar. Prueba:
- Recargar VS Code
- Ejecutar `npm run build` para validar

## 📚 Recursos

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)

---

**Proyecto creado**: Mayo 2026  
**Framework**: React + Vite + TypeScript + Tailwind CSS
