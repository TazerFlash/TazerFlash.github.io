// Escapes text and turns **bold** markers from content.ts into <strong> tags.
export function rich(text: string): string {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  return escaped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}
