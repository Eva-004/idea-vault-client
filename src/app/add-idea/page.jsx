'use client'
import { authClient } from '@/lib/auth-client';
import {
    Button,
    Card,
    FieldError,
    Form,
    Input,
    Label,
    TextArea,
    TextField
} from '@heroui/react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const AddIdeaPage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
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
        idea.tags = idea.tags ? idea.tags.split(',').map(tag=> tag.trim()) :[];
          idea.userEmail = user?.email;
          const {data:tokenData} = await authClient.token();
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-ideas`, {
            method: 'POST',
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
        <div className='py-8 bg-[#F0F7FF]  dark:bg-gray-900'>

            <Card className="shadow-md md:mx-auto md:max-w-2xl py-6 px-6 rounded-2xl">

                <h1 className="text-center text-2xl font-bold bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent">
                    Turn Your Ideas Into Reality
                </h1>

                <p className="text-center text-gray-500 text-sm mt-1 mb-6">
                    Support people in need through IdeaVault
                </p>

                <Form className="flex flex-col gap-4" onSubmit={onSubmit}>


                    <TextField isRequired name="title">
                        <Label>Idea Title</Label>
                        <Input className='placeholder:text-gray-500' placeholder="Enter your idea title" />
                        <FieldError />
                    </TextField>


                    <TextField isRequired name="shortDescription">
                        <Label>Short Description</Label>
                        <TextArea className='placeholder:text-gray-500'
                            rows={2}
                            placeholder="Write a short description..."
                        />
                        <FieldError />
                    </TextField>


                    <TextField isRequired name="detailDescription">
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


                    <TextField name="tags">
                        <Label>Tags (optional)</Label>
                        <Input className='placeholder:text-gray-500' placeholder="AI,EdTech,Marketplace...." />
                        <FieldError />
                    </TextField>


                    <TextField isRequired name="image" type="text">
                        <Label>Image URL</Label>
                        <Input className='placeholder:text-gray-500' placeholder="Image URL" />
                        <FieldError />
                    </TextField>

                    <TextField name="estimatedBudget">
                        <Label>Estimated Budget (optional)</Label>
                        <Input className='placeholder:text-gray-500' placeholder=" $5000 / ৳50,000" />
                        <FieldError />
                    </TextField>

                    <TextField isRequired name="targetAudience">
                        <Label>Target Audience</Label>
                        <Input className='placeholder:text-gray-500' placeholder="Enter your targeted audience" />
                        <FieldError />
                    </TextField>

                    <TextField isRequired name="problemStatement">
                        <Label>Problem Statement</Label>
                        <TextArea className='placeholder:text-gray-500'
                            rows={3}
                            placeholder="Describe the problem or pain point users are facing..."
                        />
                        <FieldError />
                    </TextField>

                    <TextField isRequired name="proposedSolution">
                        <Label>Proposed Solution</Label>
                        <TextArea className='placeholder:text-gray-500'
                            rows={3}
                            placeholder="How does your idea solve this problem?"
                        />
                        <FieldError />
                    </TextField>


                    <div className="flex gap-2 pt-2">
                        <Button type="submit" className="w-full bg-gradient-to-r from-purple-700 to-blue-500 text-white transition-all duration-300 shadow-lg hover:scale-105">
                            Add Idea
                        </Button>

                        <Button
                            type="reset"
                            variant="secondary"
                            className="w-full text-neutral bg-info"
                            onPress={() => setIdeaCategory("")}
                        >
                            Reset
                        </Button>
                    </div>

                </Form>
            </Card>
        </div>

    );
};

export default AddIdeaPage;