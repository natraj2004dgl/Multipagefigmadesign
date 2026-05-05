import { Outlet, useLocation, Link } from "react-router";
import { Home, Activity, Pill, Apple, Menu } from "lucide-react";

export function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <div className="h-screen bg-[#F5F8FF] flex flex-col">
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>

      {!isLoginPage && (
        <nav className="bg-white border-t border-[#DCE5FF] px-2 py-2 flex items-center justify-around">
          <NavItem to="/home" icon={Home} label="Home" active={location.pathname === "/home"} />
          <NavItem to="/glucose" icon={Activity} label="Glucose" active={location.pathname === "/glucose"} />
          <NavItem to="/medications" icon={Pill} label="Meds" active={location.pathname === "/medications"} />
          <NavItem to="/diet" icon={Apple} label="Diet" active={location.pathname === "/diet"} />
          <NavItem to="/more" icon={Menu} label="More" active={location.pathname === "/more"} />
        </nav>
      )}
    </div>
  );
}

function NavItem({ to, icon: Icon, label, active }: { to: string; icon: any; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      className="flex flex-col items-center gap-1 py-1 px-3 min-w-[60px]"
    >
      <Icon className={`w-5 h-5 ${active ? "text-[#1D9BF0]" : "text-[#7B8EC8]"}`} />
      <span className={`text-[10px] font-semibold ${active ? "text-[#1D9BF0]" : "text-[#7B8EC8]"}`}>
        {label}
      </span>
    </Link>
  );
}
