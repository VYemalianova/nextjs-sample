const HoroscopeSignPage = async ({ params }: { params: Promise<{ type: string; sign: string }> }) => {
  const { sign } = await params;

  return <div>Horoscopes {sign} page.</div>
};

export default HoroscopeSignPage;