import Link from "next/link";

export default function UserPage()
{
    return (
        <>
            <h1>
                <Link href={'/'}>Back to Home Page</Link>
            </h1>
            <h1>Hello User!</h1>
        </>
    )
}