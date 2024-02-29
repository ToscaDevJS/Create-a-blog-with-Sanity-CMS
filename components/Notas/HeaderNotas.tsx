interface Props {
  title: string;
  descriptions: string;
}
export const HeaderNotas = ({ descriptions, title }: Props) => {
  return (
    <div className="flex flex-col p-3">
      <p className="text-4xl text-start font-serif font-semibold">
        {title} <b className="font-normal  text-xs">beta v1.0</b>
      </p>
      <p className="text-xs mt-2 text-gray-400">{descriptions}</p>
    </div>
  );
};
