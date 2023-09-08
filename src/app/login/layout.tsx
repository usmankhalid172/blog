'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const pathName= usePathname();
    console.log(pathName);
    return(
            <div>
                {
                    pathName!=="/login/teacherLogin"?

                        <ul className="login-menu">
                        <li>
                            <h4>Login Navbar</h4>
                        </li>
                        <li>
                            <Link href="/login">Login Main</Link>
                        </li>
                        <li>
                            <Link href="/login/studentLogin">Student Login</Link>
                        </li>
                        <li>
                            <Link href="/login/teacherLogin">Teacher Login</Link>
                        </li> 
                    </ul>
                    :null                   
                }

                {children}
            </div>
    )
}
