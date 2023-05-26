import Header from "./header/header";
import AppHero from "./hero";
import MyAlert from "./my-alert";
import MyAccordion from "./my-accordion";
import MyBadge from "./my-badge";
import MyBreadcrumb from "./my-breadcrumb";
import MyButtonGroup from "./buttons/my-button-group";
import MyCard from "./MyCard";
import MyCloseButton from "./buttons/my-close-button";
import MyDropdown from "./my-dropdown";
import MyFigure from "./my-figure";
import MyList from "./data-structures/my-list";
import MyModal from "./my-modal";
import MyOffcanvas from "./my-offcanvas";
import MyTable from "./data-structures/my-table";

const BootstrapDemo = () => {
  return (
    <>
      <MyTable />
      <MyOffcanvas />
      <MyModal />
      <MyList />
      <MyFigure />
      <MyDropdown />
      <MyCloseButton />
      <MyCard />
      <MyButtonGroup />
      <MyBreadcrumb />
      <MyBadge />
      <MyAccordion />
      <MyAlert />
      <AppHero />
      <Header />
    </>
  );
};

export default BootstrapDemo;
