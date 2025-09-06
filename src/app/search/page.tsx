type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function page({ searchParams }: Props) {
  const { q } = await searchParams;

  return <h1 className='text-3xl font-bold'>검색페이지 : {q}</h1>;
}
