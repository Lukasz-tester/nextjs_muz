"use client";
import Image from "next/image";
import { useState } from "react";

export default function UploadForm(){
    const [file, setFIle] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [inProgress, setInProgress] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        setInProgress(true);
        e.preventDefault();

        const formData = new FormData();
        formData.append("file", file as Blob);

        const response = await fetch("/api/file", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        setPreview(data.url);
        setInProgress(false);
    };

    const styles = {
        form: 'p-4 rounded-lg',
        input: 'border p-2 mb-4 w-full border-grey-300 rounded'
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input}
            type="file"
            onChange={(e) => setFIle(e.target.files?.item(0) || null)}
            />
            <button className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700" type="submit">{inProgress ? "Uploading..." : "Upload"}</button>

            {preview && (
                <div>
                    <Image src={preview} alt="test" width={1200} height={1200} />
                </div>
            )}
        </form>
    )

}