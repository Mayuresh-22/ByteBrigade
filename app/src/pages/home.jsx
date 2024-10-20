import React from 'react'

import Feed from '../components/ui/feed/feed'

export default function HomeLayout() {
  return (
    <>
      <div>
        {/* Your page content will go here */}
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">Welcome to PCCOE's Alumni Engagement Program</h2>
        <p className="text-gray-600">
          Connect with your fellow alumni, explore career opportunities, join clusters, read blogs, and more!
        </p>
      </div>
      <Feed />
    </>
  );
}