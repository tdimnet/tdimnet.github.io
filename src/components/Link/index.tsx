function Component({ url, content }: { url: string; content: string }) {
  return (
    <a
      className="text-white uppercase font-space-grotest font-bold text-base tracking-wider border-b-2 border-secondary"
      href={url}
      target="_blank"
    >
      {content}
    </a>
  );
}

export default Component;
