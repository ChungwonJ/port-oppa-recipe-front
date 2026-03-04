type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return <h2 className="sectionTitle">{title}</h2>;
}
