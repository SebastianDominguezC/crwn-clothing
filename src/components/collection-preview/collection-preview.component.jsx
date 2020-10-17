import React from 'react';
import CollectionTiem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const PreviewCollection = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                    .filter((item, i) => i < 4)
                    .map(item => (
                        <CollectionTiem key={item.id} item={item} />
                    ))
            }
        </div>
    </div>
);

export default PreviewCollection;