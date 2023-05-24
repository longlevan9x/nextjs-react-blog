import Link from "next/link";

interface TagProps {
    tags?: string[];
}

export default function Tag({tags = []}: TagProps) {
    return (
        <>
            {tags?.map((tag: string, index1: number) => (
                <Link href="#" key={index1}>{tag}</Link>
            ))}
        </>
    )
}