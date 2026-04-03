export default function GetAppMenu() {
  const items: string[] = ['Desktop app', 'Mobile app'];
  return (
    <ul className="grid grid-cols-1 xl:grid-cols-[250px]">
      {items.map((item, i) => (
        <li
          key={i}
          className="text-standard-text xl:hover:bg-faint-bg text-md cursor-pointer rounded-lg px-5 py-2 hover:bg-stone-200"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
