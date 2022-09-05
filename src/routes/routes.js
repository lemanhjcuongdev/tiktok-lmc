//Layouts
import { HeaderOnlyLayout } from "~/layouts";

//Components
import config from "~/config";
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import Profile from "~/pages/Profile";
import Live from "~/pages/Live";

//publicRoutes can be viewed without log in
const publicRoutes = [
  { path: config.routerConfig.home, component: Home },
  { path: config.routerConfig.following, component: Following },
  { path: config.routerConfig.upload, component: Upload, layout: HeaderOnlyLayout },
  { path: config.routerConfig.search, component: Search, layout: null },
  { path: config.routerConfig.profile, component: Profile },
  { path: config.routerConfig.live, component: Live },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
