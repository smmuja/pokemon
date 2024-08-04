import { Navbar } from "components/features/navbar";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
