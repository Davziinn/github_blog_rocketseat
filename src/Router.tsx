import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Blog } from "./pages/Blog";
import { Post } from "./pages/Post";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route path="/" element={<Blog />} />
                <Route path="/post" element={<Post />} />
            </Route>
        </Routes>
    )
}