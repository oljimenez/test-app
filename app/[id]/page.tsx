import { cacheLife } from "next/cache";
import { Suspense } from "react";


export default function Home(props: PageProps<"/[id]">) {
  
    return (
        <div> 
            <Suspense fallback={<div>Loading...</div>}>
                <RuntimeData params={props.params}/>
            </Suspense>
            <CachedData />
        </div>
     )
}

async function RuntimeData(props: {params: PageProps<"/[id]">['params']}){
    const params = await props.params;
    return <div>{params.id}</div>
}

async function CachedData(){
    "use cache";
    cacheLife('max');

    const res =  await fetch("https://dog.ceo/api/breeds/image/random").then((res) => res.json());

    return  <div> 
        <img src={res.message} alt="A Random Dog" width={400} height={400} />
    </div>
}