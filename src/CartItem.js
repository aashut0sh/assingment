import React from 'react';

class CartItem extends React.Component{

  

    // for this class to be React component
    render(){
    
        // now this will return Jsx code
        return(
              <div className="cart-item" style={styles.image}>
                 

              </div>
        );

    }
}
const styles={
    image:{
        height:125,
        width:125,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;