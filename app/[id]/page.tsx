export default async function Home(props: {params: Promise<{id: string}>}) {

      const res =  await fetch("https://dog.ceo/api/breeds/image/random", {
    cache:"force-cache"
   }).then((res) => res.json());

    return <div> 
        <img src={res.message} alt="A Random Dog" width={400} height={400} />
        </div>
}