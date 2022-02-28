import React from 'react';

function ListItems(props) {
  return (
    <>
      {props.list.map((item) => {
        return (
          <li className={props.className} key={item.id}>
            {item.value}
          </li>
        );
      })}
    </>
  );
}

export default ListItems;
