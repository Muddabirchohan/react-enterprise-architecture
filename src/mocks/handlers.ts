import { rest } from "msw";
const apiUrl = "https://fakestoreapi.com/products/categories";
export const handlers = [
    rest.get(apiUrl , (req,res,ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    name: "muddabir"
                },
                {
                    name: "chohan"
                },
                {
                    name: "ics"
                }
            ])
        )
    })
]