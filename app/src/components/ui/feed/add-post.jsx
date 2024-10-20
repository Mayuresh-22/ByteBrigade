import React from "react";
import { Avatar, AvatarImage } from '../avatar'
import { Button } from '../button'
import { Card, CardContent, CardHeader, CardFooter } from '../card/card'
import { Input } from '../input'
import { Image, Link } from 'lucide-react'

export const AddPost = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Your avatar" />
        </Avatar>
        <Input placeholder="Ask a question to the community?" className="flex-grow" />
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Image className="h-4 w-4 mr-2" />
            Image
          </Button>
          <Button variant="outline" size="sm">
            <Link className="h-4 w-4 mr-2" />
            Link
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <Button variant="outline">Write Article</Button>
        <Button className="bg-blue-600 text-white hover:bg-blue-700" size="md">Post</Button>
      </CardFooter>
    </Card>
  );
}