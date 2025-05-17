import Card from "@/app/components/card";
import { Github, Globe } from "lucide-react";
import { SiReact, SiNodedotjs, SiTypescript, SiTailwindcss, SiPrisma, SiAxios, SiVite, SiSwagger, SiSqlite, SiVercel, SiRailway, SiNextdotjs } from "react-icons/si";


export default function PortfolioDetalhes() {
    return (
        <section className="max-w-4xl mx-auto py-8">
            <h2 className="text-3xl font-bold mb-6">💼 Portfolio Pessoal</h2>
            <p className="text-gray-300 mb-8">
                Projeto de desenvolvimento web para display projetos pessoais.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Frontend */}
                <Card
                    title="Frontend"
                    description="Aplicação React com tema escuro para visualização de projetos."
                    techs={[
                        { icon: <SiReact size={20} />, title: "React" },
                        { icon: <SiTypescript size={20} />, title: "TypeScript" },
                        { icon: <SiTailwindcss size={20} />, title: "Tailwind CSS" },
                        { icon: <SiNextdotjs size={20} />, title: "Next.js" },
                        { icon: <SiVercel size={20} />, title: "Vercel" },
                    ]}
                    buttons={[
                        {
                            href: "https://github.com/brennoliveira/portfolio.git",
                            label: "Ver no GitHub",
                            icon: <Github size={16} />,
                            color: "bg-indigo-600",
                        },
                        // {
                        //     href: "https://money-track-frontend-blush.vercel.app",
                        //     label: "Ver online",
                        //     icon: <Globe size={16} />,
                        //     color: "bg-emerald-600",
                        // },
                    ]}
                />
            </div>
        </section>
    )
}
