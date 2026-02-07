export function SectionHeading({
  number,
  title,
}: {
  number: string
  title: string
}) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-lg text-primary">{number}.</span>
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
        {title}
      </h2>
      <div className="hidden h-px flex-1 bg-border sm:block" />
    </div>
  )
}
