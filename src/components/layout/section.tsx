type Props = React.HTMLProps<HTMLElement> & {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, id, className }: Props) {
  return (
    <section id={id} className={`${className} w-full`}>
      {children}
    </section>
  );
}
