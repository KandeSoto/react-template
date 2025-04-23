# React Template Base

Plantilla base para proyectos React con:

- Vite + TypeScript
- React Router
- Toastify
- Axios con Interceptors
- i18n (multiidioma)
- Layouts modulares
- Context API
- Formularios con `react-hook-form` + `yup`

---

## 🚀 Cómo usar esta plantilla

Clona esta plantilla en un nuevo proyecto con [`degit`](https://github.com/KandeSoto/react-template):

```bash
npx degit bitbucket:TU_USUARIO/NOMBRE_DEL_REPO nuevo-proyecto
cd nuevo-proyecto
npm install
npm run dev
```

> ⚠️ Asegúrate de que el repositorio sea público para que `degit` funcione.

---

## 📂 Estructura recomendada

```
src/
├── @core/
│   ├── layout/         # Estructura visual base (TopBar, AppLayout)
│   └── components/     # Componentes reutilizables
├── context/
├── hooks/
├── pages/
├── router/
├── apis/
└── assets/
```

---

## 🧪 ¿Qué incluye?

- Protección de rutas (`RequireAuth`)
- Interceptores Axios con loading global
- Selectores de idioma con banderas
- Layout separado de `AppLayout`
- `ToastContainer` listo para notificaciones
