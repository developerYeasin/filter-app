import React from 'react';
import ListItem from './ListItem';

const List = ({allListItem}) => {
    return (
        <div className="grid grid-cols-3 gap-4 p-8 ">
            {allListItem.map(listItem => <ListItem key={listItem.id} item={listItem} /> )}
        </div>
    );
};

export default List;