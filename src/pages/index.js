import loadable from "react-loadable"
import Loading from "@common/loading"


export const Home = loadable({
    loader:_=>import("./home"),
    loading:Loading
})

export const Books = loadable({
    loader:_=>import("./books"),
    loading:Loading
})

export const Cart = loadable({
    loader:_=>import("./cart"),
    loading:Loading
})

export const Mine = loadable({
    loader:_=>import("./mine"),
    loading:Loading
})

export const Classify = loadable({
    loader:_=>import("./clasify"),
    loading:Loading
})