import Link from 'next/link'
import Card from '../components/card'

export default function ProjetosPage() {
    return (
        <section className="max-w-4xl mx-auto py-8">
            <h2 className="text-3xl font-bold mb-6">Projetos</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card
                    title="💸 MoneyTrack"
                    description="Sistema de controle financeiro pessoal com receitas, despesas e categorias."
                    href="/projetos/money-track"
                    imageSrc="/images/money-track.png"
                    tags={[
                        { label: "✅ Completo", color: "bg-green-600 text-white" },
                        { label: "🚀 Deploy", color: "bg-emerald-600 text-white" },
                    ]}
                    hint="Clique para ver detalhes (frontend e backend)"
                />
                {/* Card clicável para Portfolio */}
                <Card
                    title="💼 Portfolio Pessoal"
                    description="Aplicação web para display de projetos de desenvolvimento frontend e/ou backend."
                    href="/projetos/portfolio"
                    // imageSrc="/images/money-track.png"
                    tags={[
                        { label: "🔧 Em progresso", color: "bg-yellow-500 text-black" },
                        // { label: "🚀 Deploy", color: "bg-emerald-600 text-white" },
                    ]}
                    hint="Clique para ver detalhes (frontend)"
                />

            </div>
        </section>
    )
}
