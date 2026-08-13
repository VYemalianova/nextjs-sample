const ZodiacSignPage = async ({ params }: { params: Promise<{ type: string; sign: string }> }) => {
  const { sign } = await params;

  return <div>Show general information about a {sign}.</div>
};

export default ZodiacSignPage;