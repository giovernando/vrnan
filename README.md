## 🧠 Concept & Structure

The visual foundation of giats.me is built around a **three-phase layering system**:

1. **The Background Phase**  
   A dynamic, animated 3D world rendered with React Three Fiber, serving as the visual foundation of the site.

2. **The Main Website Phase**  
   This layer contains all the actual content — projects, about section, contact, etc. Structurally clean and minimal to let animations breathe.

3. **The Fluid Animation Layer (Above All)**  
   A real-time fluid simulation overlays the entire interface, using `mix-blend-mode` and the cursor to create an interactive, artistic brush effect. It responds to user input, adding a subtle but powerful sense of depth and responsiveness.

### 🪟 “Window” Effect

Throughout the content layer, I created intentional **cut-out sections** or “windows” that act as **holes in the layout**, letting the background animation show through. These openings create a surreal experience where the layers visually bleed into each other, amplifying the immersive feel of the site.

---

## ⚙️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **3D & Canvas:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Animation:** [GSAP](https://greensock.com/gsap/) with ScrollTrigger
- **Transitions & Scroll UX:** Custom GSAP-powered page transitions and smooth scroll behavior
- **Styling:** SCSS / CSS Modules
- **Hosting:** [Vercel](https://vercel.com)

---

## 📸 Assets & Privacy Notice

- Personal and client-related visuals (e.g., images, logos, portraits) have been **blurred, replaced, or omitted** to respect privacy and copyright.

---

## 📄 License & Attribution

This project is licensed under the **MIT License (with attribution required)**.
