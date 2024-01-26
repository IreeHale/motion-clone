import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"

export const Navbar = () => {
    return (
        <div className="fixed z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-centered">
            {/* TODO: Mobile side bar*/}
            <div className ="flex items-center gap-x-4">
                <div className="hidden md:flex">
                    <Logo />
                </div>
                <Button size="sm" className="rounded-sm hidden md:block h-auto py-1.5 px-2">
                    Create
                </Button>
            </div>
        </div>
    )
}