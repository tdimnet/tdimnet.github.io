type Tag = "h1" | "h2" | "h3";

function Component({
  css,
  content,
  as,
}: {
  css: string;
  content: string;
  as: Tag;
}) {
  if (as === "h1") {
    return (
      <h1 className={`${css} font-bold font-space-grotest text-5xl`}>
        {content}
      </h1>
    );
  }

  if (as === "h2") {
    return (
      <h2 className={`${css} font-bold font-space-grotest text-2xl`}>
        {content}
      </h2>
    );
  }

  return (
    <h3 className={`${css} font-bold font-space-grotest text-xl`}>
      {content}
    </h3>
  );
}

export default Component;
