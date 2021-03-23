type Post = {
  type: BlogMetaProps['type']
  tags: string[]
  title: string
  description?: string
  image: string
  path?: string
  date?: string | Date;
  author?: {
    name: string
    image: string
    title: string
  }
}
