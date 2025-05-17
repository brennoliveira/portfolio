import Card from "@/app/components/card";
import { Github, Globe } from "lucide-react";
import { SiAxios, SiExpress, SiNodedotjs, SiPrisma, SiRailway, SiReact, SiSqlite, SiSwagger, SiTypescript, SiVercel, SiVite } from "react-icons/si";


export default function MoneyTrackDetalhes() {
    return (
        <section className="max-w-4xl mx-auto py-8">
            <h2 className="text-3xl font-bold mb-6">💸 MoneyTrack</h2>
            <p className="text-gray-300 mb-8">
                Projeto de TCC desenvolvido para controle financeiro pessoal com frontend e backend separados.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Frontend */}
                <Card
                    title="Frontend"
                    description="Aplicação React com tema escuro, autenticação e visualização de transações."
                    techs={[
                        { icon: <SiReact size={20} />, title: "React" },
                        { icon: <SiTypescript size={20} />, title: "TypeScript" },
                        { icon: <SiAxios size={20} />, title: "Axios" },
                        { icon: <SiVite size={20} />, title: "Vite" },
                        { icon: <SiVercel size={20} />, title: "Vercel" },
                    ]}
                    buttons={[
                        {
                            href: "https://github.com/brennoliveira/money-track-frontend",
                            label: "Ver no GitHub",
                            icon: <Github size={16} />,
                            color: "bg-indigo-600",
                        },
                        {
                            href: "https://money-track-frontend-blush.vercel.app",
                            label: "Ver online",
                            icon: <Globe size={16} />,
                            color: "bg-emerald-600",
                        },
                    ]}
                />
                {/* Backend */}
                <Card
                    title="Backend"
                    description="API com autenticação JWT, gerenciamento de usuários, categorias e transações."
                    techs={[
                        { icon: <SiNodedotjs size={20} />, title: "Nodejs" },
                        { icon: <SiTypescript size={20} />, title: "TypeScript" },
                        { icon: <SiExpress size={20} />, title: "Express" },
                        { icon: <SiPrisma size={20} />, title: "Prisma" },
                        { icon: <SiSqlite size={20} />, title: "SQLite" },
                        { icon: <SiSwagger size={20} />, title: "Swagger" },
                        { icon: <SiRailway size={20} />, title: "Railway" },
                    ]}
                    buttons={[
                        {
                            href: "https://github.com/brennoliveira/money-track-backend",
                            label: "Ver no GitHub",
                            icon: <Github size={16} />,
                            color: "bg-indigo-600",
                        },
                    ]}
                />
            </div>
        </section>
    )
}
