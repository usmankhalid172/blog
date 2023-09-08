'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
const Login =()=> {
    const router = useRouter();
    
    return (
        <div>
            <h2>Login Page</h2>
            <Link href="/">Go To Home Page</Link>
            <button onClick={()=>router.push("login/studentLogin")}>Student Login Page</button>
            <button onClick={()=>router.push("login/teacherLogin")}>Teacher Loign Page</button>
            <button onClick={()=>router.back()}>Home Page</button>
        </div>
    )
}

export default Login;