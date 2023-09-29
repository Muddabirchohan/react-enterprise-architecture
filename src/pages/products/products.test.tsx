import {render ,screen} from "@testing-library/react";
import CachedApiComponent from "./products";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';



test('render component users' , () => {
    const initialState = {
        loading: false,
        products: [],
        errors: "",
        cart: [],
        total: 0,
        wishlist: [],
        singleProduct: {},
        loadingSingle: false,
        errorSingle: "",
        category: ""
    }
    const mockStore = configureStore();
    let store;

    store = mockStore(initialState);

    render( <Provider store={store}>
        <CachedApiComponent />
    </Provider>)
    // const text = screen.getByText("hello")
    // expect(text).toBeInTheDocument()
})


