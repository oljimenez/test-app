
import { cacheLife, cacheTag } from 'next/cache';

export default async function Home(props: PageProps<"/[id]">) {
    'use cache';
    cacheLife('max');
    cacheTag('page-content');

    const params = await props.params;
    
    return (
        <div> 
           Example {params.id}
        </div>
     )
}
