'use client'
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, Modal, Surface, TextArea, TextField } from "@heroui/react";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";


const UpdatedIdea = ({ id , idea}) => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
      const { title, shortDescription, detailDescription, image,tags, estimateBudget, targetAudience,proposedSolution ,problemStatement,category,estimatedBudget} = idea;
    const [ideaCategory, setIdeaCategory] = useState("");

    const ideaCategories = [
        { key: "ai", label: "Artificial Intelligence" },
        { key: "tech", label: "Technology" },
        { key: "health", label: "Health & Wellness" },
        { key: "education", label: "Education" },
        { key: "fintech", label: "FinTech" },
        { key: "ecommerce", label: "E-Commerce" },
        { key: "environment", label: "Environment & Sustainability" },
        { key: "transport", label: "Transportation" },
        { key: "social", label: "Social Impact" },
        { key: "entertainment", label: "Entertainment & Media" },
        { key: "productivity", label: "Productivity Tools" },
        { key: "security", label: "Cybersecurity" },
        { key: "agritech", label: "AgriTech" },
        { key: "iot", label: "IoT & Smart Devices" },
        { key: "others", label: "Others" }
    ];

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const idea = Object.fromEntries(formData.entries());
        console.log(idea);
        idea.tags = idea.tags ? idea.tags.split(',').map(tag => tag.trim()) : [];
        idea.userEmail = user?.email;
        const { data: tokenData } = await authClient.token();
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-ideas/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                 authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(idea)
        });

        if (res.ok) {
            toast.success("Added idea successfully!")
            setIdeaCategory("");

        }
        else {
            toast.error("Failed to add idea!")
        }


    };
    return (
        <div>
            <Modal>
                
                <Button className='border border-blue-700 text-blue-700 rounded-none'><BiEdit></BiEdit> Edit</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger className="text-purple-800" />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <BiEdit className="text-purple-800"></BiEdit>
                                </Modal.Icon>
                                <Modal.Heading>Update</Modal.Heading>
                                <p className="mt-1.5 text-sm leading-5 text-gray-500 ">
                                    Update you idea
                                </p>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <Form className="flex flex-col gap-4" onSubmit={onSubmit}>


                                        <TextField isRequired name="title" defaultValue={title}>
                                            <Label>Idea Title</Label>
                                            <Input className='placeholder:text-gray-500'placeholder="Enter your idea title" />
                                            <FieldError />
                                        </TextField>


                                        <TextField isRequired name="shortDescription" defaultValue={shortDescription}>
                                            <Label>Short Description</Label>
                                            <TextArea  className='placeholder:text-gray-500'
                                                rows={2}
                                                placeholder="Write a short description..."
                                            />
                                            <FieldError />
                                        </TextField>


                                        <TextField isRequired defaultValue={detailDescription}name="detailDescription">
                                            <Label>Detailed Description</Label>
                                            <TextArea className='placeholder:text-gray-500'
                                                rows={4}
                                                placeholder="Write detailed description..."
                                            />
                                            <FieldError />
                                        </TextField>



                                        <div>
                                            <Label>Category</Label>
                                            <select 
                                                className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                value={ideaCategory}
                                                onChange={(e) => setIdeaCategory(e.target.value)}
                                                required
                                                name="category"
                                            >
                                                <option value="">Select Idea Category</option>
                                                {ideaCategories.map((cat) => (
                                                    <option key={cat.key} value={cat.key}>
                                                        {cat.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>


                                        <TextField name="tags" defaultValue={tags}>
                                            <Label>Tags (optional)</Label>
                                            <Input className='placeholder:text-gray-500' placeholder="AI,EdTech,Marketplace...." />
                                            <FieldError />
                                        </TextField>


                                        <TextField isRequired name="image" type="text" defaultValue={image}>
                                            <Label>Image URL</Label>
                                            <Input className='placeholder:text-gray-500' placeholder="Image URL" />
                                            <FieldError />
                                        </TextField>

                                        <TextField name="estimatedBudget" defaultValue={estimatedBudget}>
                                            <Label>Estimated Budget (optional)</Label>
                                            <Input className='placeholder:text-gray-500' placeholder=" $5000 / ৳50,000" />
                                            <FieldError />
                                        </TextField>

                                        <TextField isRequired defaultValue={targetAudience} name="targetAudience">
                                            <Label>Target Audience</Label>
                                            <Input className='placeholder:text-gray-500' placeholder="Enter your targeted audience" />
                                            <FieldError />
                                        </TextField>

                                        <TextField isRequired defaultValue={problemStatement} name="problemStatement">
                                            <Label>Problem Statement</Label>
                                            <TextArea className='placeholder:text-gray-500'
                                                rows={3}
                                                placeholder="Describe the problem or pain point users are facing..."
                                            />
                                            <FieldError />
                                        </TextField>

                                        <TextField isRequired defaultValue={proposedSolution} name="proposedSolution">
                                            <Label>Proposed Solution</Label>
                                            <TextArea className='placeholder:text-gray-500'
                                                rows={3}
                                                placeholder="How does your idea solve this problem?"
                                            />
                                            <FieldError />
                                        </TextField>


                                        <div className="flex gap-2 pt-2">
                                            <Button type="submit" className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white transition-all duration-300 shadow-lg hover:scale-105">
                                                Update
                                            </Button>

                                            <Button slot="close" className='text-purple-800'>
                                                Cancel
                                            </Button>
                                        </div>

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

export default UpdatedIdea;