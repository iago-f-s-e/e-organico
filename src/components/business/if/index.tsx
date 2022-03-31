type IfProps = {
  condition: boolean;
  render: () => JSX.Element;
};

export const If = ({ condition, render }: IfProps): JSX.Element => {
  if (!condition) return null;

  return render();
};
