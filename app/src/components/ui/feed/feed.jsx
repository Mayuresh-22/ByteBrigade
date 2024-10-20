import React from 'react'
import { Avatar, AvatarImage } from '../avatar'
import { Button } from '../button'
import { Card, CardContent, CardHeader, CardFooter } from '../card/card'
import { Input } from '../input'
import { Image, Link } from 'lucide-react'
import { Post } from './post'
import { AddPost } from './add-post'

export default function Feed() {
  return (
    <div className="flex flex-grow">
      <div className="flex-grow">
        <AddPost />
        {[1, 2].map((post) => (
          <Post key={post} />
        ))}
      </div>

      <div className="flex-grow ml-6 w-80 max-w-5xl">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Active Discussions</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2].map((discussion) => (
                <div key={discussion} className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User avatar" />
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Hamdaan Ahmad</p>
                    <p className="text-xs text-gray-500 mb-1">9h</p>
                    <p className="text-sm">Day 6/21 - Course Detail Page for an Online Learning Platform by Hamdaan Ahmad</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}