import { list } from "@vercel/blob";
import Image from "next/image";
import { DeleteButton } from "../components/deleteButton";


export default async function AllFilesPage(){
    const blobs = await list();

if (!blobs){
    return <div>No files</div>
} 
    return (
        <div>
            <h1>Files</h1>
            <ul>
                {blobs.blobs.map((blob, i) => (
                    <li key={blob.pathname + i}>
                        <a href={blob.url} target ="_blank">
                            <Image src={blob.url} alt={blob.pathname} width={200} height={200} />
                            {blob.pathname}</a>

                            <DeleteButton url={blob.url} />

                    </li>
                ))}
            </ul>
        </div>
    )
}