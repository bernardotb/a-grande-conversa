export function AlphabeticalIndex({
  available,
  active,
  onChange
}: {
  available: string[];
  active: string;
  onChange: (letter: string) => void;
}) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div aria-label="Índice alfabético" className="flex flex-wrap gap-1">
      <button
        type="button"
        onClick={() => onChange("")}
        className={`min-w-10 border px-2 py-2 text-xs font-bold ${
          active === "" ? "bg-library-800 text-parchment-50" : "hover:border-antique-500"
        }`}
      >
        Todos
      </button>
      {letters.map((letter) => {
        const enabled = available.includes(letter);
        return (
          <button
            key={letter}
            type="button"
            disabled={!enabled}
            onClick={() => onChange(letter)}
            className={`size-9 border text-xs font-bold ${
              active === letter
                ? "bg-library-800 text-parchment-50"
                : enabled
                  ? "hover:border-antique-500"
                  : "cursor-not-allowed opacity-25"
            }`}
            aria-pressed={active === letter}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}
