import React, { useState } from 'react'
import { BookOpen, BriefcaseIcon, Home, Inbox, Users } from 'lucide-react'
import { SearchBar } from './components/ui/search-bar'
import {
  Sidebar,
  SidebarMenuItem,
  SidebarMenuList
} from './components/ui/sidebar'
import {
  Header,
  LoginButton,
  AddNewButton,
  NotificationButton,
  UserProfileButton
} from './components/ui/header'
import { Outlet } from "react-router-dom"
import PopUpBox from './components/ui/popup'

function App() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');

  const handleNewMessageClick = () => {
    // Show the pop-up for unimplemented feature
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <div className="open-sans-mini">
      <div className="flex h-screen bg-white lg:px-28">
        {/* Sidebar */}
        <Sidebar>
          <SidebarMenuList>
            <SidebarMenuItem icon={<Home className="h-5 w-5 mr-2" />} link="/">
              Home
            </SidebarMenuItem>
            <SidebarMenuItem icon={<Users className="h-5 w-5 mr-2" />} link="/cluster">
              Clusters
            </SidebarMenuItem>
            <SidebarMenuItem icon={<BriefcaseIcon className="h-5 w-5 mr-2" />} link="/career">
              Jobs
            </SidebarMenuItem>
            <SidebarMenuItem icon={<BookOpen className="h-5 w-5 mr-2" />} link="/blogs">
              Blogs
            </SidebarMenuItem>
            <SidebarMenuItem icon={<Inbox className="h-5 w-5 mr-2" />} link="/message">
              Messages
            </SidebarMenuItem>
            <AddNewButton className={"w-full"} onClick={() => {
              setTitle('Feature Coming Soon');
              setMessage('Alumni will be prompted whether they want to create a post, write a blog, or add a job posting.');
              handleNewMessageClick();
            }} />
          </SidebarMenuList>
        </Sidebar>
        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <Header>
            <SearchBar type="text" placeholder="Search..." className="w-64 mr-4" />
            <div className="flex items-center space-x-4">
              <NotificationButton />
              <LoginButton />
              <UserProfileButton user={{ name: 'John Doe' }} />
            </div>
          </Header>
          {/* Page content */}
          <main className="flex-1 overflow-y-scroll bg-white p-4 space-y-10">
            <Outlet />
          </main>
        </div>
      </div >
      {showPopUp && (
        <PopUpBox
          title={title}
          message={message}
          onClose={handleClosePopUp}
        />
      )}
    </div>
  )
}

export default App
