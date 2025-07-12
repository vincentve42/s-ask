export default function GuestNavbar()
{
    return (
        <nav className="flex justify-between items-center justify-items-center">
            <div className="">
                <a href="/"><h1 className="lg:text-2xl text-2xl p-5 font-bold">S-Ask</h1></a>
            </div>
            <div className="flex mt-3">
                <a href="/login"><p className="p-2 text-white rounded-2xl bg-black mr-2">Login</p></a>
                <a href="/register"><p className="p-2 rounded-2xl border border-gray-300">Sign up for free</p></a>
            </div>
        </nav>
    )
}