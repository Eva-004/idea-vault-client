'use client'
import { authClient } from '@/lib/auth-client';
import { Button, FieldError, Form, Label, TextArea, TextField } from '@heroui/react';
import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import { toast } from 'react-toastify';

const CommentField = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    console.log(user)

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const commentData = Object.fromEntries(formData.entries());
        console.log(commentData);
         if (!commentData.comment || commentData.comment.trim() === "") {
        toast.error("Please write a comment first!");
        return;
    }
        commentData.userEmail = user?.email;
        commentData.userName = user?.name;

        const currentTime= new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });

        commentData.timeStamp=currentTime;

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(commentData)
        });
        const comment = await res.json();
        console.log(comment);
        if (res.ok) {
            toast.success("Added comment successfully!")
        }
        else {
            toast.error("Failed to add comment!")
        }
    }
    return (
        <div>
            <Form onSubmit={onSubmit}>
                <TextField name="comment" className='max-w-xl '>
                    <Label className='text-lg font-semibold flex items-center gap-1'><BiPlusCircle></BiPlusCircle> Add Your Valuable Opinion</Label>
                    <TextArea className='border shadow-md  placeholder:text-gray-500'
                        rows={2}
                        placeholder="Write your feedback..."
                    />
                    <FieldError />
                </TextField>
                <Button type="submit" className='bg-gradient-to-r from-purple-800 to-blue-800 text-white mt-2 font-bold'>Post Comment</Button>
            </Form>
        </div>
    );
};

export default CommentField;