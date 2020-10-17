import React from 'react';
import CustomButton from '../custom-button/custom-button.component';


import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionTiem = ({ item, addItem, }) => {
    const { id, name, price, imageUrl } = item;
    return (
        <div className="collection-item" onClick={() => addItem(item)}>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="collection-footer">
                <span className="name"> {name} </span>
                <span className="price"> {price} </span>
            </div>
            <CustomButton inverted={true}> Add to cart </CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item)),
    }
}

export default connect(null, mapDispatchToProps)(CollectionTiem);