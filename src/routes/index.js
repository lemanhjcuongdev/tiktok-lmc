//Layouts
import { HeaderOnlyLayout } from "~/components/Layouts";

//Components
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";

//publicRoutes can be viewed without log in
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/upload", component: Upload, layout: HeaderOnlyLayout },
  { path: "/search", component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
