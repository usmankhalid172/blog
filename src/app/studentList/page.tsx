import Link from "next/link";

export default function StudentList(){
    return(
        <div>
        <h1>Studetn List</h1>
        <ul>
            <li>
                <Link href="/studentList/usman">Usman</Link>
            </li>
            <li>
            <Link href="/studentList/ali">ALi</Link>
            </li>
            <li>
            <Link href="/studentList/ahmad">Ahmad</Link>
            </li>
            <li>
            <Link href="/studentList/usama">Usama</Link>
            </li>
        </ul>
        </div>
    )
}
