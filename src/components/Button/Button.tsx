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
      className="rounded-lg bg-blue-400 px-2 py-2 text-base font-semibold text-white outline-none transition-all"
    >
      {children}
    </button>
  );
}
