const navigationItems = [
  "Laboratorio",
  "Revelaciones",
  "Biblioteca",
  "Recursos",
  "Ajustes",
];

export default function Sidebar() {
  return (
    <aside className="border-b border-[#2A2A2A] bg-[#111111] px-6 py-6 lg:border-b-0 lg:border-r lg:px-8 lg:py-10">
      <nav aria-label="Navegacion principal">
        <ul className="flex flex-wrap gap-3 lg:flex-col lg:gap-4">
          {navigationItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="block rounded-full border border-[#2A2A2A] px-5 py-3 text-sm text-[#A3A3A3] transition-colors hover:border-[#0391A1] hover:text-white lg:rounded-none lg:border-0 lg:px-0"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
