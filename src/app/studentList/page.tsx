import Link from "next/link";

export default function StudentList(){
    return(
        <div>
        <h1>Studetn List</h1>
        <ul>
            <li>
                <Link href="/studentList/1">Usman</Link>
            </li>
            <li>
            <Link href="/studentList/2">ALi</Link>
            </li>
            <li>
            <Link href="/studentList/3">Ahmad</Link>
            </li>
            <li>
            <Link href="/studentList/4">Usama</Link>
            </li>
        </ul>
        </div>
    )
}
