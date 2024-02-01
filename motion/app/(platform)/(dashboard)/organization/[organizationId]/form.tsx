"use client"

import { create } from "@/actions/create-boards";
import { Button } from "@/components/ui/button"

export const Form = () => {
    return (
        <form action={create}>
            <input 
              id="title"
              name="title"
              placeholder="Enter a board title"
              className="border-black border p-1"
              required
            />
            <Button type="submit">
              Submit
            </Button>
          </form>
    );
};