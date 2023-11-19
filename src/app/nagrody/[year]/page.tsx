export default function Page({ params }: { params: { year: string } }) {

  return (
    <>
      {params.year}
    </>
  )
}