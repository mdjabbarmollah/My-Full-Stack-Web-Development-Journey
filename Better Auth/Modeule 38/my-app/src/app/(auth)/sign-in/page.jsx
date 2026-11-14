"use client";
 
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { signIn } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField ,InputGroup,} from "@heroui/react";
import { useState } from "react";


const SginIn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const signinHandeler = async(e) => {
e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const data = Object.fromEntries(formdata.entries());
    console.log('form er data', data)

    const { data: resdata, error } = await signIn.email({
     
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",

    })
console.log('after submit',resdata,error)
  }

  return (
    <div>
      <h2>Sginin page</h2>
      <form className="flex w-96 flex-col gap-4" onSubmit={signinHandeler}>
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

        <TextField className="w-full max-w-[280px]"
          
          name="password"

          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        
        >
          <Label>Password</Label>
          
          <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
          <FieldError />
          <InputGroup>
            <InputGroup.Input
              
              className="w-full max-w-[280px]"
              type={isVisible ? "text" : "password"}
              
            />
            <InputGroup.Suffix className="pe-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
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
      </form>
    </div>
  );
};


export default SginIn;