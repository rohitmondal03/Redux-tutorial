import React from 'react'
import { useSelector } from 'react-redux'

import CartItem from './CartItems'


const CartContainer = () => {

    const { cartItems, total, amount } = useSelector(store => store.cart)

    return (
        <>
            {amount < 1
                ?
                <section>
                    <header>
                        <h2>Your Bag</h2>
                        <h4 className='empty-cart'>is currently empty</h4>
                    </header>
                </section >

                :

                <section className='cart'>
                    <header>
                        <h2>Your bag</h2>
                    </header>

                    <div>
                        {cartItems.map(item =>
                            <CartItem
                                key={item.id}
                                {...item}
                            />
                        )}
                    </div>

                    <footer>
                        <hr />

                        <div className='cart-total'>
                            <h4>
                                Total <span>${total}</span>
                            </h4>
                        </div>

                        <button className='btn clear-btn'>Clear btn</button>
                    </footer>
                </section>
            }
        </>
    )

}


export default CartContainer        