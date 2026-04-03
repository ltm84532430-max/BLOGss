import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownContentProps = {
  content: string;
};

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        img: (props) => (
          <img
            {...props}
            alt={props.alt ?? ""}
            className="my-6 rounded-2xl border border-[var(--border)]"
          />
        )
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

