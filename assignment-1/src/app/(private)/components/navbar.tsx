import Link from "next/link"
export default function Navbar() {
    return (
       <div>
         <Link href="/dashboard">Dashboard</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="/settings">Settings</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="/logout">Logout</Link>
       </div>
    )
    }
