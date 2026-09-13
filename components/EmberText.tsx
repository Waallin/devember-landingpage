export function EmberText({ text }: { text: string }) {
  const parts = text.split(/(\s+)/);

  return parts.map((part, index) => {
    if (part === "" || /^\s+$/.test(part)) {
      return part.includes("\n") ? <span key={`ws-${index}`}>{part}</span> : null;
    }

    const next = parts[index + 1];
    const trailingSpace = next && /^\s+$/.test(next) && !next.includes("\n") ? " " : "";

    return (
      <span key={`${part}-${index}`} className="ember-word">
        {part}
        {trailingSpace}
      </span>
    );
  });
}
