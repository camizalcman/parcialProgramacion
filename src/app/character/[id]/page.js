import CharacterDetail from '@/app/components/CharacterDetail';

export default function CharacterPage({ params }) {
  const { id } = params;

  return <CharacterDetail id={id} />;
}
