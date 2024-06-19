import ScrollToTop from "@components/scrollToTop/ScrollToTop";
import RouterComponent from "@components/router/RouterComponent";
import Menu from "@components/menu/Menu";
import { translate } from "@i18n";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <RouterComponent />
      <Menu />
    </>
  );
};

export default App;
