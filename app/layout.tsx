import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'RealPayZ | Planos',description:'Escolha o seu plano RealPayZ'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="pt"><body>{children}</body></html>}
