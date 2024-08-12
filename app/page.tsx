import Header from "./components/Header";
import { Control, Folder, FolderItem, NavItem } from "./types";
import data from "./data/db.json";
import Main from "./components/Main";
import Prefooter from "./components/Prefooter";
import Footer from "./components/Footer";

export default function Home() {
  const { navMenuItems, files, folders, controls }: { navMenuItems: NavItem[], files: FolderItem[], folders: Folder[], controls: Control[] } = data;

  return (
    <main>
      <Header navMenuItems={navMenuItems} />
      <Main folders={folders} files={files} />
      <Prefooter />
      <Footer controls={controls} />
    </main>
  );
}
