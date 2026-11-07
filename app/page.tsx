import { headers } from 'next/headers';
import Plans from './plans';
export const dynamic = 'force-dynamic';
export default async function Home({searchParams}:{searchParams:Promise<{pais?:string}>}) {const params=await searchParams; const h=await headers(); const detected=(h.get('x-vercel-ip-country')||'MZ').toUpperCase(); const country=params.pais==='ao'?'AO':params.pais==='mz'?'MZ':detected==='AO'?'AO':'MZ'; return <Plans initialCountry={country} detectedCountry={detected}/>}
