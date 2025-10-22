import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Html_project } from "../pages/html_project";
import { Cats_project } from "../pages/cats_project";
import { Circle_project } from "../pages/circle_project";
import { Learning_project } from "../pages/learning_project";
import { Paint_project } from "../pages/paint_project";
import { Vectors_project } from "../pages/vectors_project";
import { Vending_project } from "../pages/vending_project";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 200,
        exit: 200,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
        <Route path="/html_project" element={<Html_project />} />
        <Route path="/cats_project" element={<Cats_project />} />
        <Route path="/circle_project" element={<Circle_project />} />
        <Route path="/learning_project" element={<Learning_project />} />
        <Route path="/paint_project" element={<Paint_project />} />
        <Route path="/vectors_project" element={<Vectors_project />} />
        <Route path="/vending_project" element={<Vending_project />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
