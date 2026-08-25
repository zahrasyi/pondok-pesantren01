# Pondok Pesantren Daarul Huda - Fullstack CMS Website 🚀

> A development project for an integrated company profile website and Content Management System (CMS) for Pondok Pesantren Daarul Huda Li Tahfidzil Qur'an.

## 📖 About the Project
This project was developed to digitize the information and publication system of the Islamic boarding school (*pesantren*). The main focus of this development is to create a high-performance (fast-loading) website with a responsive interface, and to provide a dedicated dashboard that allows clients to manage news content independently without requiring a technical background.

## 💻 Role & Responsibilities
In this freelance project, I took full responsibility for the entire End-to-End development lifecycle, including:
*   Translating client requirements into a Jamstack-based application architecture.
*   Building a responsive, interactive, and modern frontend.
*   Designing the database schema and integrating a Headless CMS.
*   Configuring deployment, optimizing performance, and integrating a custom domain.

## 🛠️ Tech Stack
*   **Framework:** Next.js (React)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Headless CMS:** Sanity.io
*   **Deployment:** Vercel

## ✨ Key Features
*   **Dynamic Content Management:** Clients can manage data structures (News, Gallery, Leadership) in real-time through Sanity Studio.
*   **Dynamic Routing:** Implementation of dynamic news page generation using a slug system.
*   **Advanced Image Optimization:** Utilizing Next.js built-in components for automatic WebP format compression and lazy loading, ensuring the page does not lag even when loading multiple high-quality photo assets.
*   **Secure API Fetching:** Strict CORS origin configurations between the Vercel frontend and the Sanity backend.

## 💡 Technical Challenges & Solutions
During the development of this project, several technical solutions were successfully implemented:
1.  **Overcoming Performance Bottlenecks:** Resolved stuttering scroll animations and slow loading times by refactoring large DOM elements and switching from standard `<img>` tags to more memory-efficient handling via Next.js `<Image>`.
2.  **Production Environment Integration:** Resolved connection blocking issues during the transition from localhost to the production server through Environment Variables configuration and API network permissions (CORS).

## 🔗 Live Demo
🌐 [Visit Official Website](https://ponpesdaarulhuda.vercel.app) 

---
