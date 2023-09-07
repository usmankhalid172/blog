import Link from "next/link";
import { useRouter } from "next/navigation";
const Login =()=> {
    const router = useRouter();
    return (
        <div>
            <h2>Login Page</h2>
            <Link href="/">Go To Home Page</Link>
            <button onClick={()=>router.back()}></button>
        </div>
    )
}

export default Login;