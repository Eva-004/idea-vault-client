'use client'
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, Modal, Surface, TextArea, TextField } from "@heroui/react";
import { BiEdit, BiPlusCircle } from "react-icons/bi";
import { toast } from "react-toastify";

const UpdateComment = ({ updateComment, idea }) => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    console.log(user)

       
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const commentData = Object.fromEntries(formData.entries());
        console.log(commentData);
       
        commentData.userEmail = user?.email;
        commentData.userName = user?.name;
        commentData.ideaId = idea._id;

        const currentTime = new Date().toLocaleString("en-GB");

        commentData.timeStamp = currentTime;
          const { data: tokenData } = await authClient.token();
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comment/${updateComment._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                 authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(commentData)
        });
        const comment = await res.json();
        console.log(comment);
        if (res.ok) {
            toast.success("Update comment successfully!")

        }
        else {
            toast.error("Failed to update comment!")
        }
    }
    return (
        <div>
            <Modal>

                <Button className='border border-blue-700 text-blue-700 rounded-none' ><BiEdit></BiEdit> Edit</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger className="text-purple-800" />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <BiEdit className="text-purple-800"></BiEdit>
                                </Modal.Icon>
                                <Modal.Heading>Update</Modal.Heading>
                                
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <Form onSubmit={onSubmit} >
                                        <TextField   className='max-w-xl '>
                                            <Label className='text-lg font-semibold flex items-center gap-1'><BiPlusCircle></BiPlusCircle> Update Your Valuable Opinion</Label>
                                            <TextArea name="comment"
                                                className='border shadow-md  placeholder:text-gray-500'
                                                rows={2}
                                                placeholder="Write your feedback..."
                                            />
                                            <FieldError />
                                        </TextField>
                                        <Button type="submit" className='bg-gradient-to-r from-pink-600 to-purple-600 text-white mt-2 font-bold'>Update Comment</Button>
                                    </Form>
                                </Surface>
                            </Modal.Body>
                            <Modal.Footer>


                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default UpdateComment;