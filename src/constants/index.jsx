import BannerImg from "../images/banner.png"
import {
    DeviceArrowIcon,
    DeviceCardsIcon, DeviceChartIcon,
    DeviceClockIcon,
    DeviceListIcon,
    DeviceLockIcon
} from "@/components/stockLogos";

export {BannerImg};

export const navData= [
    {_id: 101, title: "Home", href: "#home"},
    {_id: 102, title: "Servicos", href: "#servicos"},
    {_id: 103, title: "Sobre nós", href: "#sobre"},
    {_id: 104, title: "Contato", href: "#contato"},

]

export const accountData = [
    {
        name: "Financas Empresariais",
        description:
            "Organize toda a gestão financeira da sua empresa.",
        icon: DeviceArrowIcon,
    },
    {
        name: "Planejamento Estratégico",
        description:
            "Elabore junto com a gente a melhor estratégia financeira pra sua empresa.",
        icon: DeviceCardsIcon,
    },
    {
        name: "Controle Financeiro Integrado",
        description:
            "Centralize suas operações financeiras em um único lugar, garantindo eficiência e precisão.",
        icon: DeviceClockIcon,
    },
    {
        name: "Gestão de Fluxo de Caixa",
        description:
            "Mantenha o fluxo de caixa da sua empresa sempre positivo com análises e previsões precisas.",
        icon: DeviceListIcon,
    },
    {
        name: "Compliance e Conformidade",
        description:
            "Garanta que sua empresa esteja sempre em conformidade com as normas e regulamentos financeiros.",
        icon: DeviceLockIcon,
    },
    {
        name: "Automação de Processos Financeiros",
        description:
            "Implemente tecnologias de automação para agilizar e otimizar seus processos financeiros.",
        icon: DeviceChartIcon,
    },
];