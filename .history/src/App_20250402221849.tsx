import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { ErrorComponent, ThemedLayoutV2, ThemedSiderV2, useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, { CatchAllNavigate, DocumentTitleHandler, NavigateToResource, UnsavedChangesNotifier } from "@refinedev/react-router";
import dataProvider from "@refinedev/simple-rest";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { authProvider } from "./authProvider";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { BlogPostCreate, BlogPostEdit, BlogPostList, BlogPostShow } from "./pages/blog-posts";
import { CategoryCreate, CategoryEdit, CategoryList, CategoryShow } from "./pages/categories";
import { ForgotPassword } from "./pages/forgotPassword";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import ClientLayout from "./client/ClientLayout";
import Home from "./client/Home";
import ProductDetail from "./client/ProductDetail";
import Contact from "./client/Contact";
import Shop from "./client/Shop";
import Cart from "./client/Cart";
import CheckOut from "./client/CheckOut";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";

function App() {
    return (
        <BrowserRouter>
            <RefineKbarProvider>
                <ColorModeContextProvider>
                    <AntdApp>
                        <DevtoolsProvider>
                            <Refine
                                dataProvider={dataProvider("http://localhost:3000")}
                                notificationProvider={useNotificationProvider}
                                routerProvider={routerBindings}
                                authProvider={authProvider}
                                resources={[
                                    {
                                        name: "blog_posts",
                                        list: "/blog-posts",
                                        create: "/blog-posts/create",
                                        edit: "/blog-posts/edit/:id",
                                        show: "/blog-posts/show/:id",
                                        meta: {
                                            canDelete: true,
                                        },
                                    },
                                    {
                                        name: "categories",
                                        list: "/categories",
                                        create: "/categories/create",
                                        edit: "/categories/edit/:id",
                                        show: "/categories/show/:id",
                                        meta: {
                                            canDelete: true,
                                        },
                                    },
                                ]}
                                options={{
                                    syncWithLocation: true,
                                    warnWhenUnsavedChanges: true,
                                    useNewQueryKeys: true,
                                    projectId: "9NcWLZ-l2Z6Vh-uRU2Ju",
                                }}
                            >
                                <Routes>
                                    <Route path="/" element={<ClientLayout />}>
                                        {/* Các route con */}
                                        <Route index element={<Home />} />
                                        <Route path="productdetail" element={<ProductDetail />} />
                                        <Route path="contact" element={<Contact />} />
                                        <Route path="shop" element={<Shop />} />
                                        <Route path="cart" element={<Cart />} />
                                        <Route path="checkout" element={<CheckOut />} />
                                        <Route path="/login" element={<Signin />} />
                                        <Route path="/register" element={<Signup />} />
                                    </Route>
                                    <Route
                                        element={
                                            <Authenticated key="authenticated-inner" fallback={<CatchAllNavigate to="/login" />}>
                                                <ThemedLayoutV2 Header={Header} Sider={(props) => <ThemedSiderV2 {...props} fixed />}>
                                                    <Outlet />
                                                </ThemedLayoutV2>
                                            </Authenticated>
                                        }
                                    >
                                        <Route index element={<NavigateToResource resource="blog_posts" />} />
                                        <Route path="/blog-posts">
                                            <Route index element={<BlogPostList />} />
                                            <Route path="create" element={<BlogPostCreate />} />
                                            <Route path="edit/:id" element={<BlogPostEdit />} />
                                            <Route path="show/:id" element={<BlogPostShow />} />
                                        </Route>
                                        <Route path="/categories">
                                            <Route index element={<CategoryList />} />
                                            <Route path="create" element={<CategoryCreate />} />
                                            <Route path="edit/:id" element={<CategoryEdit />} />
                                            <Route path="show/:id" element={<CategoryShow />} />
                                        </Route>
                                        <Route path="*" element={<ErrorComponent />} />
                                    </Route>
                                    {/* <Route
                                        element={
                                            <Authenticated key="authenticated-outer" fallback={<Outlet />}>
                                                <NavigateToResource />
                                            </Authenticated>
                                        }
                                    >
                                        <Route path="/forgot-password" element={<ForgotPassword />} />
                                    </Route> */}
                                </Routes>

                                <RefineKbar />
                                <UnsavedChangesNotifier />
                                <DocumentTitleHandler />
                            </Refine>
                            <DevtoolsPanel />
                        </DevtoolsProvider>
                    </AntdApp>
                </ColorModeContextProvider>
            </RefineKbarProvider>
        </BrowserRouter>
    );
}

export default App;
