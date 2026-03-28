export interface QuickAction {
  title: string;
  description: string;
  gradient: string;
  href: string;
};

export const quickActions: QuickAction[] = [
  {
    title: "Narrar una historia",
    description: "Da vida a los personajes con una narración expresiva por IA",
    gradient: "from-cyan-400 to-cyan-50",
    href: "/text-to-speech?text=En un pueblo escondido entre montañas cubiertas de niebla, vivía un viejo relojero cuyos relojes nunca daban la hora correcta, pero siempre decían la verdad. Una tarde lluviosa, entró un extraño y pidió un reloj que pudiera mostrarle su futuro.",
  },
  {
    title: "Grabar un anuncio",
    description: "Crea anuncios profesionales con voces de IA realistas",
    gradient: "from-pink-400 to-pink-100",
    href: "/text-to-speech?text=Presentamos Café BrightBean: el tueste más suave que jamás hayas probado. Cultivado en fincas de gran altitud, tostado lentamente a la perfección y entregado fresco en tu puerta cada semana. Despierta con algo extraordinario. Prueba BrightBean hoy mismo y llévate tu primera bolsa gratis.",
  },
  {
    title: "Dirigir una escena de película",
    description: "Genera diálogos dramáticos para cine y vídeo",
    gradient: "from-violet-500 to-violet-100",
    href: "/text-to-speech?text=La lluvia golpeaba la ventana mientras ella se giraba para enfrentarlo. Lo sabías, ¿verdad?, susurró ella, con la voz apenas contenida. Él dio un paso adelante, con la mandíbula tensa. Hice lo que tenía que hacer. El silencio entre ellos era más fuerte que la tormenta afuera.",
  },
  {
    title: "Dar voz a un personaje",
    description: "Construye mundos inmersivos con voces de personajes dinámicas",
    gradient: "from-orange-400 to-orange-100",
    href: "/text-to-speech?text=Escucha bien, aventurero. El reino de Ashenvale se derrumba y el Cristal de la Eternidad se ha fragmentado en siete piezas. Eres el único que puede recomponerlo. Reúne tu valor, afila tu espada y encuéntrame en las Puertas del Alba. El tiempo no está de nuestro lado.",
  },
  {
    title: "Presentar tu podcast",
    description: "Atrapa a tus oyentes desde el primer segundo",
    gradient: "from-blue-500 to-blue-100",
    href: "/text-to-speech?text=Hola a todos, bienvenidos a un nuevo episodio de La Mente Curiosa, el podcast donde profundizamos en las historias, la ciencia y las ideas extrañas que dan forma a nuestro mundo. Soy vuestro anfitrión, y hoy tenemos a un invitado increíble que va a desafiar todo lo que creíais saber.",
  },
  {
    title: "Guiar una meditación",
    description: "Crea audios relajantes para contenido de bienestar",
    gradient: "from-lime-400 to-lime-100",
    href: "/text-to-speech?text=Cierra los ojos y respira profundamente. Mantén el aire suavemente... y suéltalo. Siente cómo el peso del día se desvanece poco a poco. Con cada respiración, te sumerges más en la calma. No necesitas estar en ningún otro lugar. Solo aquí. Solo ahora. Inhala paz, exhala tensión.",
  },
];
