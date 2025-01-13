type Props = {
  topics: string[];
  className?: string;
};
1;
export default function TopicList({ topics, className }: Props) {
  return (
    <div className={`flex flex-col justify-between ${className}`}>
      {topics.map((t, i) => (
        <div className="flex items-center gap-4 w-full" key={i}>
          <div className="h-1 w-1 bg-primary rounded-full" />
          <div className="text-dark text-[15px] md:text-[16px] leading-[24px]">
            {t}
          </div>
        </div>
      ))}
    </div>
  );
}
