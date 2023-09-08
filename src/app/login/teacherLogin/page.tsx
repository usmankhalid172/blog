'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
const TeacherLogin =()=> {
    const router = useRouter();
    
    return (
        <div>
            <h2>Teacher Login Page</h2>
            <Link href="/">Go To Home Page</Link>
            <button onClick={()=>router.back()}>Mian Login Page</button>
        </div>
    )
}

export default TeacherLogin;