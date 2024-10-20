import React from "react";
import { Avatar, AvatarImage } from '../avatar'
import { Button } from '../button'
import { Card, CardContent, CardHeader, CardFooter } from '../card/card'
import { Input, TextArea } from '../input'
import { Image, Link } from 'lucide-react'

export const AddPost = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Your avatar" />
        </Avatar>
        <TextArea placeholder="Ask a question to the community?" className="flex-grow rounded-lg border border-blue-200" />
      </CardHeader>
      <CardFooter className="flex justify-end pt-0">
        <Button className="bg-blue-500 border-2 border-blue-600 text-white rounded-full px-5 hover:bg-blue-600" size="md">Post</Button>
      </CardFooter>
    </Card>
  );
}