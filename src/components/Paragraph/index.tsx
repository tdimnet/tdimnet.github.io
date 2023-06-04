function Component({ content, color } : { content: string, color: string}) {
  return (
    <p className={`${color} text-lg`}>{content}</p>
  )
}

export default Component

