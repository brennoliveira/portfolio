import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfólio | Brenno Oliveira',
  description: 'Portfólio de projetos de desenvolvimento fullstack.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Header />
        <main className="min-h-screen px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="w-full border-b border-gray-700 px-4 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Brenno Oliveira</h1>
      <nav className="space-x-6">
        <a href="/" className="hover:underline">Home</a>
        <a href="/projetos" className="hover:underline">Projetos</a>
        <a href="/sobre" className="hover:underline">Sobre</a>
        <a href="/contato" className="hover:underline">Contato</a>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="w-full border-t border-gray-700 text-center text-sm py-4">
      © {new Date().getFullYear()} Brenno Oliveira. Todos os direitos reservados.
    </footer>
  )
}
