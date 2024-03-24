import { LucideProps, icons } from 'lucide-react'

export type IconName = Omit<typeof icons, 'createReactComponent' | 'IconNode'>

type IconPropss = LucideProps & {
  name: keyof IconName
}

const Icon = ({ name, color, size, className }: IconPropss) => {
  const LucideIcon = icons[name]

  return <LucideIcon color={color} size={size} className={className} />
}

export default Icon
