type Props = {
  params: Promise<{ id: string }>;
};

export default async function page({ params }: Props) {
  const { id } = await params;
  return <h1 className='text-5xl font-bold'>{id}번 도서 상세 페이지</h1>;
}
