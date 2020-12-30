import Image from 'next/image'
import {staticPath,pagesPath} from "../lib/$path";
import Link from 'next/link'
import {useEffect} from "react";

export default function Index() {

    useEffect(() => {
        fetch("https://tasks-api-express.herokuapp.com/api/v1/tasks").then(res => res.json()).then(console.log)

    }, [])

    return <div>index
        <Image
            src={staticPath.android_chrome_384x384_png}
            alt="Picture of the author"
            width={384}
            height={384}
        />
        <Link href={pagesPath._id("hoge").$url()}>detail</Link>
    </div>;
}