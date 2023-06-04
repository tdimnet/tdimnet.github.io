function Component({ content, color }: { content: string; color: string }) {
  return (
    <p
      className={`${color} font-space-grotest font-medium text-lg`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default Component;
