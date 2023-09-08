'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
const StudentLogin =()=> {
    const router = useRouter();
    
    return (
        <div>
            <h2>Student Login Page</h2>
            <Link href="/">Go To Home Page</Link>
            <button onClick={()=>router.back()}>Main Login Page</button>
        </div>
    )
}

export default StudentLogin;