import { IconRail } from "./components/icon-rail";
import { Sidebar } from "./components/sidebar";
import { MainContent } from "./components/main-content";

export default function App() {
  return (
    <div className="bg-[var(--neutral-950)] flex h-screen w-full overflow-hidden">
      {/* Icon Rail */}
      <div className="flex items-center p-[6px] shrink-0">
        <IconRail />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <MainContent />
    </div>
  );
}
