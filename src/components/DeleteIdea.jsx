"use client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { toast } from "react-toastify";

const DeleteIdea = ({ id , idea}) => {
     const handleDelete = async()=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-ideas/${id}`,{
            method: 'DELETE',
            headers:{
                'content-type': 'application/json',
                
            },
            body: JSON.stringify(idea)
        });

   
        if(res.ok){
          const data = await res.json();
          toast.warn(`Delete ${idea.title} permanently!`)
           console.log(data)
        }else{
            toast.error('Failed to delete idea!')
        }
    }
    return (
        <div>
            <AlertDialog>
                <Button className='border border-red-500 text-red-500 rounded-none'><TrashBin></TrashBin>Delete</Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger className='text-purple-800' />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete  permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p className="text-gray-500">
                                    This will permanently delete <strong>{idea.title}</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleDelete} slot="close" variant="danger">
                                    Delete
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteIdea;