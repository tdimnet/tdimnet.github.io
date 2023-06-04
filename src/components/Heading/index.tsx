function Component({ color, content, as }: {color: string, content: string, as: string}) {
  if (as === 'h1') {
    return <h1 className={`${color} text-7xl`}>{content}</h1>
  }

  if (as === 'h2') {
    return <h2 className={`${color} text-5xl`}>{content}</h2>
  }

  return <h3>Not found</h3>
}

export default Component
