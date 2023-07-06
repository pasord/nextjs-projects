import { useRouter } from "next/router"

export default function Home() {
    const router = useRouter()
    const paramsArr = router.query?.params
    console.log(11, paramsArr); // 参数数组


    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24`}
        >
            Help Page params: {paramsArr}
        </main>
    )
}
