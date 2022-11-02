

export default function ProductDetailpage(

  { params }: {
    params: { id: string },
 
  }
) {
  return (
    <div>product Detail page {params.id}</div>
  )
}
