import React, { FC } from "react";

interface List<T> {
  items: T[];
  renderItems: (item: T) => React.ReactNode;
}

const List: FC<List<any>> = (props: List<any>) => {
  return <div>{props.items.map(props.renderItems)}</div>;
};

export default List;
