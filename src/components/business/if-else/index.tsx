type IfElseProps = {
  condition: boolean;
  render: {
    toBeTruthy: () => JSX.Element;
    toBeFalsy: () => JSX.Element;
  };
};

export const IfElse = ({ condition, render }: IfElseProps): JSX.Element => {
  if (!condition) return render.toBeFalsy();

  return render.toBeTruthy();
};
