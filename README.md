# 📊 Dashboard Project

A modern **Dashboard** built with **Next.js (App Router)** featuring light/dark mode, statistics cards, and charts powered by **shadcn/ui**. Data for charts and stats is fetched from a **JSON Server**.

---

## 🚀 Features
- ⚡ Built with **Next.js App Router**
- 🎨 Styled with **Tailwind CSS** and **shadcn/ui**
- 🌗 Supports **Dark / Light Mode**
- 📈 Interactive charts from **shadcn/ui**
- 🔗 Fetches **Stats Cards** and **Charts** data from **JSON Server**
- 🗂️ Sidebar with collapsible menus
- 📱 Fully responsive design

---
⚠️ Important Note  
The project fetches data for charts and stats cards from a local JSON Server.  
Make sure to run JSON Server before starting the Next.js app, otherwise the data will not be loaded.

To start JSON Server:
```bash
npx json-server db.json --port 5000
