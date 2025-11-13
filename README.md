# Habit Tracker

[![React](https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-blue?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Axios](https://img.shields.io/badge/Axios-1.4-lightgrey?logo=axios&logoColor=white)](https://axios-http.com/)
[![SweetAlert2](https://img.shields.io/badge/SweetAlert2-11-orange?logo=javascript&logoColor=white)](https://sweetalert2.github.io/)

**Habit Tracker** is a web application that helps users create, update, and manage their daily habits. It provides features like habit streak tracking, reminders, and progress management to stay consistent and motivated.

## 🔗 Live Demo

[View Live Project](https://habit-tracker-website.netlify.app/)

## 🚀 Features

- Create, update, and delete habits
- Track streaks for each habit
- User authentication and secure access
- Real-time updates with Axios
- SweetAlert2 notifications for actions

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS
- **Routing:** React Router
- **HTTP Requests:** Axios
- **Notifications:** SweetAlert2
- **Backend:** REST API (authenticated)

## 💻 Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```

## 📝 Usage

### 1. View Habits

- After logging in, navigate to the **My Habits** page.
- All your habits are displayed in a table with:
  - **Title**
  - **Category**
  - **Current Streak**
  - **Created Date**

### 2. Create a Habit

- Use the habit creation form (handled elsewhere in the app).
- Fill in the following fields:
  - Title
  - Category
  - Description
  - Reminder Time
  - Image URL

### 3. Update a Habit

- Click the **Update** button next to a habit.
- A modal will appear with the habit details pre-filled.
- Edit any field and click **Update Habit** to save changes.

### 4. Delete a Habit

- Click the **Delete** button next to a habit.
- A confirmation popup will appear:
  - **Confirm:** Habit is deleted and removed from the table.
  - **Cancel:** No changes are made.

### 5. Mark Habit Complete

- Click the **Mark Complete** button next to a habit.
- This logs today’s completion and increases the habit streak.
- The streak is updated in real-time in the table.
