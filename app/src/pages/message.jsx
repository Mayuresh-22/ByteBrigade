import React from 'react';
import { Button } from '../components/ui/button';

const MessageLayout = () => {
  return (
    <div className="message-component flex flex-col items-center justify-center h-full bg-white p-8">
      <div className="text-center max-w-md">
        <h2 className="text-lg font-semibold mb-4">ALUMNI DISCUSSION</h2>
        <p className="text-sm text-gray-600 mb-2">
          Be more than just hi's and hello's.
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Ensure your messages are insightful and constructive to foster meaningful conversations.
        </p>

        <p className="text-sm text-gray-600 mb-2">
          Only available to verified users.
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Interact only with verified peers for trusted, spam-free discussions.
        </p>

        <p className="text-sm text-gray-600 mb-2">
          Create your own short topics.
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Use personalized short topics to quickly start conversations on common themes.
        </p>

        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full mt-6" 
        onClick={() => alert('We are yet to add this feature.')}>
          Start New Discussion
        </Button>
      </div>
    </div>
  );
};

export default MessageLayout;
