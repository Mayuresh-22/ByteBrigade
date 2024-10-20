import React, { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from '../avatar'
import { Button } from "../button";
import { Card, CardContent, CardHeader, CardFooter } from '../card/card'
import { MessageSquare, MoreHorizontal, Repeat2, ThumbsUp } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../dropdown/dropdown'

export const Post = ({ post }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Card key={post} className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage alt="User avatar" />
          </Avatar>
          <div>
            <p className="text-sm font-medium">Ayush Chugh</p>
            <p className="text-xs text-gray-500">@ayushchugh • 1h</p>
          </div>
        </div>
        <DropdownMenu ref={dropdownRef}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0" onClick={toggleDropdown}>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          {isDropdownOpen && <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>}
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-2">Create a FlipTimer</h3>
        <p className="text-sm text-gray-600 mb-2">
          Set your targets and check how many times you have to achieve them.
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Your target will be saved in your browser too.
        </p>
        <a href="https://fliptimer.ayushchugh.com" className="text-sm text-blue-600 hover:underline">
          https://fliptimer.ayushchugh.com
        </a>
        <div className="mt-4 border rounded-md p-4">
          <h4 className="font-semibold mb-2">FlipTimer</h4>
          <p className="text-sm text-gray-600 mb-2">
            Set a target date and see how much time is left in months, weeks, days, hours, minutes, and seconds.
          </p>
          <img src="/placeholder.svg?height=200&width=400" alt="FlipTimer preview" className="rounded-md" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <Button variant="ghost" size="sm" className="text-gray-500">
          <MessageSquare className="h-4 w-4 mr-2" />
          0
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-500">
          <Repeat2 className="h-4 w-4 mr-2" />
          0
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-500">
          <ThumbsUp className="h-4 w-4 mr-2" />
          2
        </Button>
      </CardFooter>
    </Card>
  );
}