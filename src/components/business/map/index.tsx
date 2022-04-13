import React from 'react';

type MapProps<T> = {
  data: Array<T>;
  render: (item: T, index: number) => JSX.Element;
};

type MapComponent = <T>(props: MapProps<T>) => JSX.Element;

export const Map: MapComponent = ({ data, render }) => {
  return <>{data.map((value, index) => render(value, index))}</>;
};
