/**
 * RichText — minimal markdown renderer for program bodies.
 *
 * The origin pulled in react-markdown to render a program's `body` field. Every
 * body the site actually ships is plain prose, so this renders paragraphs and
 * supports the inline emphasis the content uses (**bold**, *italic*, `code`)
 * without carrying the whole remark/micromark stack.
 */
function renderInline(text, keyPrefix) {
  const tokens = [];
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let lastIndex = 0;
  let match;
  let index = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) tokens.push(text.slice(lastIndex, match.index));
    const token = match[0];
    const key = `${keyPrefix}-${index++}`;
    if (token.startsWith("**")) {
      tokens.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("`")) {
      tokens.push(
        <code
          key={key}
          style={{
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: "0.94em",
          }}
        >
          {token.slice(1, -1)}
        </code>,
      );
    } else {
      tokens.push(<em key={key}>{token.slice(1, -1)}</em>);
    }
    lastIndex = match.index + token.length;
  }
  if (lastIndex < text.length) tokens.push(text.slice(lastIndex));
  return tokens;
}

export function RichText({ children }) {
  const text = String(children ?? "");
  const blocks = text.split(/\n{2,}/).filter((block) => block.trim() !== "");

  return (
    <>
      {blocks.map((block, index) => (
        <p key={index} style={{ margin: index === 0 ? 0 : "1.2em 0 0" }}>
          {renderInline(block.trim(), `b${index}`)}
        </p>
      ))}
    </>
  );
}
