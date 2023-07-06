import { useEffect, useState } from "react"

export default function Home() {
    // const [data, setData] = useState<any[]>([])

    // dummyjson 接口不通
    // const fetchData = () => {
    //     fetch('https:dummyjson.com/post').then((res) => {
    //         return res.json()
    //     }).then((reply) => {
    //         console.log(222, reply);
    //     })
    // }
    // useEffect(() => {
    //     fetchData()
    // }, [])

    const [dt, setDt] = useState('')

    useEffect(() => {
        setDt((new Date()).toString())
    }, [])

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24`}
        >
            Poasts List Page
            <p>{dt}</p>
        </main>
    )
}
