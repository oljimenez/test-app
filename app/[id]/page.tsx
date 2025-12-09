import { cacheLife } from "next/cache";


export default async function Home(props: PageProps<"/[id]">) {
  
    return (
        <div> 
            <CachedData params={props.params}/>
        </div>
     )
}

async function CachedData(props:{params: PageProps<"/[id]">['params']}){
    "use cache";
    cacheLife('max');

    const params = await props.params;
    const res =  await fetch("https://dog.ceo/api/breeds/image/random").then((res) => res.json());

    return  <div> 
        <img src={res.message} alt="A Random Dog" width={400} height={400} />
        {params.id}
    </div>
}