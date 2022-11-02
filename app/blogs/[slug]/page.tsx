

export default function BlogDetailspage(  { params }: {
  params: { slug: string },

}) {
  return (
    <div>blog details page : {params.slug}</div>
  )
}
