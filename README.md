# 🐄 QurbaniHat – Livestock Booking Platform  
### Assignment Category: category-A8-Pineapple

🌐 **Live Site:** https://b13-a08-v138.vercel.app/  

---

## 📌 Project Overview

**QurbaniHat** is a modern livestock marketplace platform where users can explore, view, and book animals for Qurbani such as cows and goats.

The platform ensures a **smooth, responsive, and user-friendly experience** with authentication, sorting, and booking features.

---

## 🎯 Purpose

The goal of this project is to build a **fully responsive single-page application (SPA)** with:

- Authentication system
- Dynamic data rendering
- Protected routes
- Modern UI/UX design
- Real-world marketplace concept

---

## 🚀 Key Features

### 🧭 Layout Structure
- Responsive **Navbar**
  - Logo
  - Home & All Animals links
  - Auth-based UI (Login/Register OR Avatar + Logout)
- Footer with:
  - Contact Info
  - Social Links
  - About Section

---

### 🐐 Animal Marketplace
- JSON-based animal data (6+ animals)
- Animal properties:
  - Name, Type, Breed
  - Price, Weight, Age
  - Location, Description
  - Image & Category

---

### 🏠 Home Page
- Hero Banner with CTA
- Featured Animals section
- Extra Sections:
  - Qurbani Tips
  - Top Breeds

---

### 🛒 All Animals Page
- Dynamic animal cards
- Sort by price (Low → High / High → Low)
- Responsive grid layout

---

### 📄 Animal Details Page
- Full animal information
- Booking form:
  - Name
  - Email
  - Phone
  - Address
- 🔐 Login required
- ✅ Toast success message after booking
- 🔄 Form resets after submit (no DB storage)

---

## 🔐 Authentication System

### 🔑 Login
- Email & Password login
- Google Social Login
- Error handling with toast
- Redirect after success

### 📝 Registration
- Name, Email, Photo URL, Password
- Google signup option
- Redirect to login after success

---

## 👤 My Profile (Challenge Feature)

### ✅ Profile Page
- Shows:
  - User Name
  - Email
  - Profile Image

### 🔄 Update Profile
- Update Name & Image
- Uses Better Auth:
👉 https://better-auth.com/docs/concepts/users-accounts#update-user

---

## 🎨 UI & UX

- Fully **Responsive Design** (Mobile, Tablet, Desktop)
- Modern UI with Tailwind + DaisyUI
- Smooth interactions & clean layout

---

## 🔔 Additional Features

- ✅ Toast Notifications (React Toastify)
- ⏳ Loading states
- ❌ Custom Not Found Page
- 🎯 Unique design based on Qurbani theme

---

## ⚡ NPM Packages Used

- **next.js** – Framework
- **react** – UI library
- **tailwindcss** – Styling
- **daisyui** – UI components
- **react-icons** – Icons
- **react-toastify** – Toast notifications
- **better-auth** – Authentication system

### 🎯 Extra Package (Challenge)
- (Example) **Animate.css / Lottie / React-Spring**

---

## 🔐 Environment Variables

Sensitive data is secured using `.env.local`:

```env
NEXT_PUBLIC_AUTH_URL=your_auth_url
AUTH_SECRET=your_secret_key

---

## 👨‍💻 Author  
**Md. Fazle Rabbi**  
📧 rabbitkgbd@gmail.com

