import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";


export default function PublicSiteLayout({ children }) {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  );
}
