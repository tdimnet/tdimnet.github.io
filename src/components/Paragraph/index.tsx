function Component({ content, color }: { content: string; color: string }) {
  return (
    <p
      className={`${color} text-lg`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default Component;
