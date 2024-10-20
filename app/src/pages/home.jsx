import React from 'react'
import { Bell, BookOpen, BriefcaseIcon, Home, Inbox, LogIn, Search, Users } from 'lucide-react'

import { Button } from '../components/ui/button'
import { SearchBar } from '../components/ui/search-bar'
import { Sidebar, SidebarMenuItem, SidebarMenuList } from '../components/ui/sidebar'
import { Header, LoginButton, NewPostButton, NotificationButton, UserProfileButton } from '../components/ui/header'
import Feed from '../components/ui/feed/feed'

export default function HomeLayout() {
  return (
    <div className="flex h-screen bg-white lg:px-28">
      {/* Sidebar */}
      <Sidebar>
        <SidebarMenuList>
          <SidebarMenuItem icon={<Home className="h-5 w-5 mr-2" />} link="/">
            Home
          </SidebarMenuItem>
          <SidebarMenuItem icon={<Users className="h-5 w-5 mr-2" />} link="/connections">
            Clusters
          </SidebarMenuItem>
          <SidebarMenuItem icon={<BriefcaseIcon className="h-5 w-5 mr-2" />} link="/jobs">
            Jobs
          </SidebarMenuItem>
          <SidebarMenuItem icon={<BookOpen className="h-5 w-5 mr-2" />} link="/blogs">
            Blogs
          </SidebarMenuItem>
          <SidebarMenuItem icon={<Inbox className="h-5 w-5 mr-2" />} link="/messages">
            Messages
          </SidebarMenuItem>
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
            <NewPostButton />
            <UserProfileButton user={{ name: 'John Doe' }} />
          </div>
        </Header>

        {/* Page content */}
        <main className="flex-1 overflow-y-scroll bg-gray-100 p-4 space-y-10">
          <div>
            {/* Your page content will go here */}
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Welcome to AlumniConnect</h2>
            <p className="text-gray-600">
              Connect with your fellow alumni, explore career opportunities, join clusters, read blogs, and more!
            </p>
          </div>
          <Feed />
        </main>
      </div>
    </div >
  )
}