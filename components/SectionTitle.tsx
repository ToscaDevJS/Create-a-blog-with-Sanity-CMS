interface SectionTitle {
  title: string;
  descriptions?: string;
}
export const SectionTitle = ({ title, descriptions }: SectionTitle) => {
  return (
    <div className="p-5">
      <p className="mt-12 text-3xl font-bold tracking-tight  sm:text-4xl">
        {title}
      </p>
      <p className=" leading-7 mt-4 md:text-xl font-roboto ">{descriptions}</p>
    </div>
  );
};
