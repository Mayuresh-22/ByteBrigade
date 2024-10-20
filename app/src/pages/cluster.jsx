import React from "react";

const ClusterCard = ({ cluster }) => (
  <div className="cluster-card border-b px-4 py-6 flex justify-between space-x-4">
    <div className="space-y-3">
      <h3 className="font-semibold text-lg">{cluster.title}</h3>
      <p className="text-sm text-gray-600">{cluster.description}</p>
      <div className="participants mt-2">
        <span className="font-medium text-gray-500">
          {cluster.participants} participants
        </span>
      </div>
    </div>
    <button className="join-button text-blue-500 font-semibold">Join</button>
  </div>
);

const ClusterList = () => {
  const clusters = [
    {
      title: "Water Conservation Initiatives",
      description:
        "Join this cluster to discuss and share ideas on water conservation projects and initiatives led by PCCOE alumni.",
      participants: 120,
    },
    {
      title: "AI and Machine Learning",
      description:
        "A space for alumni and students to exchange knowledge, resources, and job opportunities in AI and ML fields.",
      participants: 75,
    },
    {
      title: "Entrepreneurship and Startups",
      description:
        "For alumni who have started their own businesses, this cluster is focused on entrepreneurship tips, resources, and support.",
      participants: 90,
    },
    // Add more clusters as needed
  ];

  return (
    <div className="clusters-section flex flex-col w-2/3 p-4 border-r-2">
      <div className="clusters-header flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">All Clusters</h2>
        <button className="text-gray-600">Cluster Preferences</button>
      </div>
      {clusters.map((cluster, index) => (
        <ClusterCard key={index} cluster={cluster} />
      ))}
    </div>
  );
};

const TopicSuggestions = () => (
  <div className="filter-card bg-white rounded-lg mb-4 px-4 border py-10">
    <h3 className="font-semibold text-lg">Browse Topic Suggestions</h3>
    <div className="tags flex flex-wrap gap-2 mt-4">
      <span className="bg-green-200 text-xs px-2 py-1 rounded-lg">
        Career Development
      </span>
      <span className="bg-blue-200 text-xs px-2 py-1 rounded-lg">
        Water Conservation
      </span>
      <span className="bg-yellow-200 text-xs px-2 py-1 rounded-lg">
        AI & Machine Learning
      </span>
      <span className="bg-pink-200 text-xs px-2 py-1 rounded-lg">
        Entrepreneurship
      </span>
      <span className="bg-purple-200 text-xs px-2 py-1 rounded-lg">
        Academic Research
      </span>
      <span className="bg-gray-200 text-xs px-2 py-1 rounded-lg">
        Social Impact Projects
      </span>
      {/* Add more tags/topics as needed */}
    </div>
  </div>
);

const TrendingDiscussions = () => (
  <div className="filter-card bg-white rounded-lg mb-4 px-4 border py-10">
    <h3 className="font-semibold text-lg">Trending Discussions</h3>
    <ul className="mt-4 space-y-5">
      <li className="text-sm text-gray-700">
        <span className="font-semibold">Water Conservation Hackathon</span> - 32 comments
      </li>
      <li className="text-sm text-gray-700">
        <span className="font-semibold">AI for Sustainable Development</span> - 28 comments
      </li>
      <li className="text-sm text-gray-700">
        <span className="font-semibold">PCCOE Alumni Meet 2024</span> - 45 comments
      </li>
      <li className="text-sm text-gray-700">
        <span className="font-semibold">Entrepreneurship for Engineers</span> - 40 comments
      </li>
      <li className="text-sm text-gray-700">
        <span className="font-semibold">Career Mentorship Program</span> - 22 comments
      </li>
    </ul>
  </div>
);

const FilterSection = () => (
  <div className="filter-section w-1/3 p-4">
    {/* Topic Suggestions */}
    <TopicSuggestions />
    {/* Trending Discussions */}
    <TrendingDiscussions />
  </div>
);

const ClusterLayout = () => {
  return (
    <div className="clusters-page flex">
      <ClusterList />
      <FilterSection />
    </div>
  );
};

export default ClusterLayout;
