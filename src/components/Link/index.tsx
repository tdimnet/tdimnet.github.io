import { Link } from "react-router-dom";

function Component({ content, to }: { content: string; to: string }) {
  return (
    <Link
      className="text-white font-space-grotest font-bold text-base tracking-wider border-b-2 border-secondary"
      to={to}
    >
      {content}
    </Link>
  );
}

export default Component;
