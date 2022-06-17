import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { ProductsProvider } from "./context/products_context"
import { FilterProvider } from "./context/filter_context"
import { CartProvider } from "./context/cart_context"
import { UserProvider } from "./context/user_context"
import { Auth0Provider } from "@auth0/auth0-react"

// dev - tjnvojoc.us.auth0.com
// nL5S064wqZZ40TOxPKjoU5ubJ0YzW2LV

ReactDOM.render(
  <Auth0Provider
    domain='dev-tjnvojoc.us.auth0.com'
    clientId='nL5S064wqZZ40TOxPKjoU5ubJ0YzW2LV'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,

  document.getElementById("root")
)
