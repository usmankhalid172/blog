'use client'
import Image from 'next/image';
import styles from './page.module.css';
import { useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';


export default function Home() {
  const router = useRouter();
  const navigate =(pageName: string)=>{
    router.push(pageName)
  }
  const [name,setName] = useState("User")
  const apple=()=>{
    setName("Usman")
  }

  const InnerComponent =()=>{
    return (
      <h1>Inner Compeonent</h1>
    )
  }
  return ( 
    <main className={styles.main}>
      
      <h1>Events, Fucnction and States {name}</h1>
      <Link href="/login">Go to Login Page</Link><br></br>
      <Link href="/about">Go to About Page</Link><br></br>
      <button onClick={()=>router.push("/login")}>Login Page</button>
      <button onClick={()=>navigate("/about")}>About Page</button>
      <button onClick={apple}>Click Me</button>
      <InnerComponent />
      {InnerComponent()}
    </main> 
  );
}
