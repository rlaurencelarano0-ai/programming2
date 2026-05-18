# 👕 ModaFit RTW - Order Management System

A beautiful, simple **Ready-to-Wear (RTW) clothing ordering system** built with **HTML, Tailwind, and JavaScript**.

This version includes support for **production-ready Supabase persistence** while still allowing a local browser storage fallback when Supabase is not configured.

---

## ⚡ Quick Start: 3 Ways to Run It

Pick **ONE** of these easy methods to open the app on your computer:

###  Option 1: Double-Click (Zero Setup! 🖱️)
The simplest way! Works on any computer.
1. Find the file [index.html](file:/programming2/index.html) in your folder.
2. **Double-click** it.
3. It will instantly open in your web browser!

---

### Option 2: Live Server in VS Code (Great for Coding 💻)
If you are using Visual Studio Code:
1. Open VS Code and search the Extensions tab for **"Live Server"** (by Ritwick Dey).
2. Click **Install**.
3. Open your [index.html](file:/programming2/index.html) file, then click the **"Go Live"** button in the bottom-right corner of VS Code.
4. Your browser will open the page automatically at `http://127.0.0.1:5500/`.

---

### Option 3: Terminal Command (Quick Server 🛠️)
Open your terminal (Command Prompt / PowerShell) in this folder and run:

**Using Python:**
```bash
python -m http.server 8080
```





**Or using Node.js:**
```bash
npx http-server -p 8080
```







Now open your browser and go to: 👉 **[http://localhost:8080/](http://localhost:8080/)**

---

## 🚀 Production Setup with Supabase

This project can persist orders to Supabase in production. The app reads `window.SUPABASE_URL` and `window.SUPABASE_ANON_KEY` from `config.js`, which can be generated during build time on Vercel.

### Setup Steps
1. Create a Supabase project.
2. Create an `orders` table with these columns:
   * `id` (text, primary key)
   * `customerName` (text)
   * `email` (text)
   * `itemSelect` (text)
   * `size` (text)
   * `quantity` (integer)
   * `price` (numeric)
   * `totalAmount` (numeric)
   * `status` (text)
   * `orderDate` (date)
   * `image` (text)
3. If using anonymous browser access, configure Row Level Security (RLS) policies or disable RLS for the `orders` table.
4. Copy `.env.example` to `.env` and set your values:
   * `NEXT_PUBLIC_SUPABASE_URL`
   * `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
5. Use the build script to generate `config.js` locally or on Vercel:
   ```bash
   npm install
   npm run build
   ```

### Deploying to Vercel
1. Add the environment variables to your Vercel project:
   * `NEXT_PUBLIC_SUPABASE_URL`
   * `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
2. Set the Vercel build command to:
   ```bash
   npm run build
   ```
3. Deploy the site as a static project.

> Vercel will generate `config.js` during the build step, so the app can use your Supabase credentials in the browser.

---

## 🧩 Key Features Explained Simply

* **💾 Auto-Save (`localStorage`):** Stores all order details securely in your browser cache.
* **🌱 Built-in Mock Data:** Pre-loads 3 fashionable sample orders so the system is never blank.
* **🧮 Live Price Calculator:** Updates estimated totals automatically as you select items or quantities.
* **🔍 Search & Filter:** Easily type names or filter by status (`Pending`, `Shipped`, `Delivered`).
* **🔔 Premium Toast Alerts:** Sliding notification cards tell you when an action is successful!
* **🔄 System Reset:** Click **"Reset System State"** at the bottom to wipe the data and start fresh.
