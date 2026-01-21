
export const dynamic = 'force-static';
export const revalidate = false;

export default async function Home(props: PageProps<"/[id]">) {
    const params = await props.params;
    
    return (
        <div> 
           Example {params.id}
        </div>
     )
}
