import React from "react"
import styled from "styled-components"
import { useCartContext } from "../context/cart_context"
import { useUserContext } from "../context/user_context"
import { formatPrice } from "../utils/helpers"
import { Link } from "react-router-dom"

const CartTotals = () => {
  const { total_amount, shipping_fee, gst_rate, pst_rate } = useCartContext()

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping_fee)}</span>
            PST (${gst_rate}%) :
            <span>{formatPrice((total_amount * gst_rate) / 100)}</span>
            GST (${pst_rate}%) :
            <span>{formatPrice((total_amount * pst_rate) / 100)}</span>
          </p>
          <hr />
          <h4>
            order total :
            <span>
              {formatPrice(
                total_amount +
                  shipping_fee +
                  (total_amount * gst_rate) / 100 +
                  (total_amount * pst_rate) / 100
              )}
            </span>
          </h4>
        </article>
        <Link to='/checkout' className='btn'>
          proceed to checkout
        </Link>
      </div>
    </Wrapper>
  )
}

// total_items: 0,
// total_amount: 0,
// shipping_fee: SHIPPING_FEE,
// gst_rate: GST_RATE,
// pst_rate: PST_RATE,

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`

export default CartTotals
