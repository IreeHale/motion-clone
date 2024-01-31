import { create } from "@/actions/create-boards";

const OrganizationIdPage = () => {

    return (
        <div>
          <form action={create}>
            <input 
              id="title"
              name="title"
              placeholder="Enter a board title"
              className="border-black border p-1"
              required
            />
          </form>
        </div>
    );
};

export default OrganizationIdPage;