const HoroscopeTypePage = async ({ params }: { params: Promise<{ type: string }> }) => {
  const { type } = await params;

  return <div>Horoscopes {type} page.</div>
};

export default HoroscopeTypePage;
