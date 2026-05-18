"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";



const LoginPage = () => {


       const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
        email: email, // required
        password: password, // required
         rememberMe: true,
        callbackURL: "/",
       });

       if(error){
        toast.error(error)
       }
       else{
        toast.success("Login successfully!")
       }
        console.log(email,password)

      };

    //      const handleGoogleSignIn = async()=>{
    //     const data = await authClient.signIn.social({
    //      provider: "google",
    //   });
    //   }

    return (
        <div className="">
            <Card className="shadow-md w-full max-w-md mx-auto  py-5 my-8">
                <h1 className="text-center text-2xl font-bold">Login</h1>

                <Form className="flex w-full   mx-auto flex-col gap-4" >
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={6}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 6) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[a-z]/.test(value)) {
                                return "Password must contain at least one lowercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }

                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>
                            Must be at least 8 characters with 1 uppercase, 1 lowercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2 ">
                        <Button type="submit">
                            <Check />
                            Login
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                        <Link href={'/forget-password'}>
                        <Button type="button" variant="secondary">
                            Forget password
                        </Button>
                        </Link>
                    </div>
                </Form>
                <p className="text-center text-gray-600 mt-2 text-xl">Don`t have account? Please <Link href={'/register'} className="text-blue-700">Register</Link></p>
                <p className="text-center text-gray-600">OR</p>
                <Button variant="outline" className={'w-full '}><GrGoogle /> Sign in with Google</Button>
            </Card>
        </div>
    );

};

export default LoginPage;