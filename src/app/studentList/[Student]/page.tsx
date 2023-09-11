'use client'
export default function StudentList({params}){
    console.log(params);
    return(
        <div>
        <h1>Studetn Details</h1>
        <h3>Name : {params.Student}</h3>
        </div>
    )
}
