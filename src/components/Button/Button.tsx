type Props = {
  type?: 'button' | 'submit';
  children: React.ReactNode;
  onClick?: VoidFunction;
};

export function Button({ type = 'button', children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="mt-4 w-full rounded-lg bg-orange-500 px-2 py-2 text-base font-light text-white outline-none transition-all hover:bg-orange-600"
    >
      {children}
    </button>
  );
}
