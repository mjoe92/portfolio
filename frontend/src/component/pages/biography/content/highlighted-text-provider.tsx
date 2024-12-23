export default function loadHighlightedText(id: string, text: string): JSX.Element {
  return (
    <span id={id} className="highlight-text">
      {text}
    </span>
  );
}
