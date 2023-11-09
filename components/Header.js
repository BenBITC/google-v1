import User from "./User";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter()

    return (
        <header className="flex justify-between p-5 text-sm text-gray-700">
            <div className="flex space-x-4 items-center">
                <Link href="https://about.google.com">
                    <p className="link">About</p>
                </Link>
                <Link href="https://store.google.com">
                    <p className="link">Store</p>
                </Link>
            </div>
            <div className="flex space-x-4 items-center">
                <Link href="https://mail.google.com">
                    <p className="link">Gmail</p>
                </Link>
                <Link href={`/search?term=${router.query.term || "Built Designs"}&searchType=image`}>
                    <p className="link">Images</p>
                </Link>
                <User/>
            </div>
        </header>
    )
}