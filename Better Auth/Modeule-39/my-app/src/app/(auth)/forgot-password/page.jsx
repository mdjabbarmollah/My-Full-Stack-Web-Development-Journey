"use client";

import { requestPasswordReset } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { toast } from "react-toastify";

export default function Basic() {

  const handelForgotpassword = async (e) => {
    
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userdata = Object.fromEntries(formData.entries());
    console.log('for understanding', userdata)
    
    const resdata = await requestPasswordReset({
      email: userdata.email,
      redirectTo:'/reset-password',
    })
    
    toast.success("an email is sent to your email address please check");

    console.log('after sending reset email',resdata)
  }
  
  

return (
  <div>
    
    <h1>Forget Page</h1>
    
<Form className="flex w-96 flex-col gap-4" onSubmit={handelForgotpassword}>

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

      

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
   </div>
  );
}