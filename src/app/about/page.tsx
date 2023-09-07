import Link from 'next/link';
import {useRouter} from 'next/navigation';
const About =()=>{
    const router = useRouter();
    return(
        <div>
            <h2>This is About Page</h2>
            <Link href="/">Go To Home Page</Link>
            <button onClick={()=>router.back()}></button>
        </div>
    )
}

export default About;