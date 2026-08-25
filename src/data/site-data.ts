export type TrainingLevel = "Iniciante" | "Intermediário" | "Avançado";

export type Training = {
  id: number;
  weekday: string;
  day: string;
  month: string;
  time: string;
  location: string;
  distance: string;
  level: TrainingLevel;
  meetingPoint: string;
  focus: string;
};

export const trainings: Training[] = [
  {
    id: 1,
    weekday: "SÁB",
    day: "05",
    month: "SET",
    time: "05:30",
    location: "Orla do Janga",
    distance: "3–5 km",
    level: "Iniciante",
    meetingPoint: "Em frente à Praça das Quatro Torres",
    focus: "Corrida leve + técnica",
  },
  {
    id: 2,
    weekday: "TER",
    day: "08",
    month: "SET",
    time: "19:00",
    location: "Parque Aurora",
    distance: "6 km",
    level: "Intermediário",
    meetingPoint: "Entrada principal do parque",
    focus: "Ritmo e resistência",
  },
  {
    id: 3,
    weekday: "QUI",
    day: "10",
    month: "SET",
    time: "05:15",
    location: "Orla de Maria Farinha",
    distance: "8–10 km",
    level: "Avançado",
    meetingPoint: "Próximo ao Forte de Pau Amarelo",
    focus: "Tempo run",
  },
  {
    id: 4,
    weekday: "DOM",
    day: "13",
    month: "SET",
    time: "05:45",
    location: "Orla de Pau Amarelo",
    distance: "5–7 km",
    level: "Intermediário",
    meetingPoint: "Calçadão, em frente ao forte",
    focus: "Longão em grupo",
  },
];

export const runningLevels = [
  {
    number: "01",
    name: "Iniciante",
    distance: "Primeiros 5 km",
    description:
      "Para quem deseja começar a correr com segurança e completar seus primeiros quilômetros.",
  },
  {
    number: "02",
    name: "Intermediário",
    distance: "5 km a 10 km",
    description:
      "Para corredores que querem melhorar resistência, distância e ritmo com consistência.",
  },
  {
    number: "03",
    name: "Avançado",
    distance: "10 km +",
    description:
      "Para preparação de provas, evolução de pace e metas cada vez mais desafiadoras.",
  },
];

export const statistics = [
  { value: 180, suffix: "+", label: "Corredores ativos" },
  { value: 12, suffix: "mil", label: "Km percorridos" },
  { value: 320, suffix: "+", label: "Treinos realizados" },
  { value: 86, suffix: "+", label: "Provas concluídas" },
];

export const events = [
  {
    id: 1,
    name: "Circuito das Praias",
    date: "18 OUT 2026",
    location: "Paulista–PE",
    distances: ["5 km", "10 km"],
    status: "Inscrições abertas",
    featured: true,
    image: "/images/event-featured.jpg",
    alt: "Grupo de corredores participando de uma prova de rua",
  },
  {
    id: 2,
    name: "Desafio Tropa 10K",
    date: "15 NOV 2026",
    location: "Orla do Janga",
    distances: ["5 km", "10 km"],
    status: "Em breve",
    featured: false,
    image: "/images/event-finish.jpg",
    alt: "Corredor cruzando a linha de chegada",
  },
  {
    id: 3,
    name: "Longão de Verão",
    date: "13 DEZ 2026",
    location: "Maria Farinha",
    distances: ["7 km", "15 km"],
    status: "Lista de interesse",
    featured: false,
    image: "/images/event-group.jpg",
    alt: "Amigos correndo juntos em uma prova ao ar livre",
  },
];

export const galleryImages = [
  {
    src: "/images/hero.jpg",
    alt: "Corredores reunidos durante uma prova",
    label: "Treino em equipe",
    className: "gallery-tall",
  },
  {
    src: "/images/gallery-medals.jpg",
    alt: "Corredores celebrando com medalhas",
    label: "Conquistas",
    className: "",
  },
  {
    src: "/images/gallery-huddle.jpg",
    alt: "Equipe reunida em uma pista de corrida",
    label: "União",
    className: "",
  },
  {
    src: "/images/gallery-race.jpg",
    alt: "Participantes felizes em uma corrida de rua",
    label: "Dia de prova",
    className: "gallery-wide",
  },
  {
    src: "/images/gallery-medal.jpg",
    alt: "Corredora exibindo sua medalha",
    label: "Cada km conta",
    className: "",
  },
];

export const testimonials = [
  {
    name: "Marina Alves",
    time: "1 ano na Tropa",
    quote:
      "Comecei alternando caminhada e corrida. Hoje já completei meus primeiros 10 km e encontrei uma turma que torce de verdade por cada evolução.",
    favorite: "10 km",
    image: "/images/avatar-marina.jpg",
  },
  {
    name: "Rafael Santos",
    time: "2 anos na Tropa",
    quote:
      "Os treinos organizados mudaram meu jeito de correr. Ganhei ritmo, disciplina e amigos que fazem qualquer longão ficar mais leve.",
    favorite: "21 km",
    image: "/images/avatar-rafael.jpg",
  },
  {
    name: "Juliana Costa",
    time: "8 meses na Tropa",
    quote:
      "Fui para um treino experimental com medo de não acompanhar. Fui acolhida desde o primeiro minuto e nunca mais parei.",
    favorite: "5 km",
    image: "/images/avatar-juliana.jpg",
  },
];

export const faqs = [
  {
    question: "Preciso ter experiência para participar?",
    answer:
      "Não. Os treinos são organizados por nível e quem está começando recebe orientação para evoluir com segurança e no próprio ritmo.",
  },
  {
    question: "Os treinos são para todas as idades?",
    answer:
      "A proposta é acolher diferentes idades e momentos de vida. Para menores de idade, a participação deve ser alinhada com a equipe e acompanhada pelo responsável.",
  },
  {
    question: "Onde os treinos acontecem?",
    answer:
      "Os pontos variam entre a Orla do Janga, Pau Amarelo, Maria Farinha e outros locais de Paulista–PE. A agenda informa cada ponto de encontro.",
  },
  {
    question: "Preciso pagar para participar?",
    answer:
      "As condições de participação podem variar conforme o tipo de treino ou evento. Fale com a equipe pelo WhatsApp para receber as informações atualizadas.",
  },
  {
    question: "Como posso entrar para a Tropa?",
    answer:
      "Preencha o formulário desta página. Ele prepara uma mensagem com o seu perfil e abre uma conversa diretamente com a equipe no WhatsApp.",
  },
  {
    question: "Posso fazer um treino experimental?",
    answer:
      "Sim. Envie seus dados pelo formulário e informe que deseja experimentar. A equipe indica o treino mais adequado para o seu nível.",
  },
];
