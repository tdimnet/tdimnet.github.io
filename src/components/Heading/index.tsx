function Component({
  css,
  content,
  as,
}: {
  css: string;
  content: string;
  as: string;
}) {
  if (as === "h1") {
    return <h1 className={`${css} font-bold font-space-grotest text-7xl`}>{content}</h1>;
  }

  if (as === "h2") {
    return <h2 className={`${css} font-bold font-space-grotest text-5xl`}>{content}</h2>;
  }

  return <h3>Not found</h3>;
}

export default Component;
