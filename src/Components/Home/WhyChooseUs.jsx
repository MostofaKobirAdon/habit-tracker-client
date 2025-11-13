import React from "react";

const WhyChooseUs = () => {
  return (
    <div>
      <div class="py-20 bg-gradient-to-b from-sky-200 to-base-100">
        <div class="max-w-11/12 md:max-w-[700px] lg:max-w-6xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p class="text-gray-600 mb-12">
            Build better habits, stay motivated, and track your progress
            effortlessly.
          </p>

          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div class="bg-white p-6 rounded-xl shadow">
              <div class="text-4xl mb-4">🏆</div>
              <h3 class="text-xl font-semibold mb-2">Streak Tracking</h3>
              <p class="text-gray-500">
                Visualize your habit streaks and stay consistent every day.
              </p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow">
              <div class="text-4xl mb-4">⏰</div>
              <h3 class="text-xl font-semibold mb-2">Reminders</h3>
              <p class="text-gray-500">
                Set reminders to never miss your daily habits.
              </p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow">
              <div class="text-4xl mb-4">📊</div>
              <h3 class="text-xl font-semibold mb-2">Progress Insights</h3>
              <p class="text-gray-500">
                Track your growth and monitor your progress easily.
              </p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow">
              <div class="text-4xl mb-4">🌟</div>
              <h3 class="text-xl font-semibold mb-2">Motivation Boost</h3>
              <p class="text-gray-500">
                Get inspired with tips and community-shared habits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
