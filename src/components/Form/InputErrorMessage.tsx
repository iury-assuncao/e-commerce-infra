type Props = {
  name?: string;
  errors?: string;
};

export function InputErrorMessage({ name, errors }: Props) {
  if (!name || !errors) return null;

  let error: any = errors || {};
  name.split('.').forEach((propName) => {
    error = error?.[propName];
  });
  const errorMessage = error?.message || '';

  return (
    <>
      {errorMessage && (
        <span className="mb-4 text-sm font-semibold text-red-600">
          {errorMessage}
        </span>
      )}
    </>
  );
}
