import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './preview-collection.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
            //Means that index <4 is displayed therefore 4 items
                .filter((item, idx) => idx < 4)
                //... Makes all props available
                .map(({ id, ...otherItemProps }) => (
                <CollectionItem key={id} {...otherItemProps} />
            ))}
        </div>
    </div>
);

export default CollectionPreview;