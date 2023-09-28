import { Link } from "react-router-dom";

function Component({
  content,
  to,
  external,
}: {
  content: string;
  to: string;
  external?: boolean;
}) {
  return (
    <Link
      className="text-white font-space-grotest font-bold text-base tracking-wider border-b-2 border-secondary"
      to={to}
      target={external ? "_blank" : ""}
    >
      {content}
    </Link>
  );
}

export default Component;
