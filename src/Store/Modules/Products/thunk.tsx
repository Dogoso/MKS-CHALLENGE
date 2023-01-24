import axios from "axios";
import { productsDTO } from "DTO/productsDTO";
import { AppDispatch } from "Store/store";
import { getProducts } from "./reducers";

export function getProductsThunk(dispatch: AppDispatch, page: number) {
    axios.get(`https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=${page}&rows=8&sortBy=id&orderBy=DESC`)
        .then(response => {
            const productsDTO: productsDTO = response.data;
            dispatch(getProducts(productsDTO.products));
        })
}