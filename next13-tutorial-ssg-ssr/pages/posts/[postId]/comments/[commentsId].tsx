import { useRouter } from "next/router"

export default function Home() {
    const router = useRouter()

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24`}
        >
            Comments Details Page id:{router.query.commentsId} - postId:{router.query.postId}
        </main>
    )
}
