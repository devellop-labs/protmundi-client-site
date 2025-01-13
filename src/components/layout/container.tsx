type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Container({ children, className }: Props) {
  return (
    <div
      className={
        "mx-auto px-4 sm:px-8 lg:px-0 lg:max-w-[1300px] h-full " + className
      }
    >
      {children}
    </div>
  );
}
