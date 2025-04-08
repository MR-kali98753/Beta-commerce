import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllProduct = async () => {
    const ALL_PRODUCTS_QUERY = defineQuery(`
            *[_type == "product"] | order(name asc)
    `)

    try {
        const products = await sanityFetch({
            query: ALL_PRODUCTS_QUERY,
        })

        return products.data || []
    } catch (error: any) {
        console.error("Error fetching all products");
    }

}