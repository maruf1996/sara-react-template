import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HomeOne from "./pages/HomeOne";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomeOneLayout from "./component/HomeOneLayout";
import HomeTwoLayout from "./component/HomeTwoLayout";
import HomeTwo from "./pages/HomeTwo";
import HomeThreeLayout from "./component/HomeThreeLayout";
import HomeThree from "./pages/HomeThree";
import ServicesPage from "./pages/ServicesPage";
import InnerPageLayout from "./component/InnerPageLayout";
import AboutPage from "./pages/AboutPage";
import BlogGridPage from "./pages/BlogGridPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import BlogListViewPage from "./pages/BlogListViewPage";
import ContactUsPage from "./pages/ContactUsPage";
import FAQPage from "./pages/FAQPage";
import PricingPage from "./pages/PricingPage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import SingleMemberPage from "./pages/SingleMemberPage";
import TeamMemberPage from "./pages/TeamMemberPage";
import TestimonialPage from "./pages/TestimonialPage";
import Error404 from "./pages/Error404";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Routes>
        {/* Home One */}
        <Route path="/" element={<HomeOneLayout />}>
          <Route index element={<HomeOne />} />
        </Route>
        {/* Home Two */}
        <Route path="home-two" element={<HomeTwoLayout />}>
          <Route index element={<HomeTwo />} />
        </Route>
        {/* Home Three */}
        <Route path="home-three" element={<HomeThreeLayout />}>
          <Route index element={<HomeThree />} />
        </Route>
        {/* Inner Page */}
        <Route element={<InnerPageLayout />}>
          <Route path="services" element={<ServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog-grid" element={<BlogGridPage />} />
          <Route path="blog-details" element={<BlogDetailsPage />} />
          <Route path="blog-list-view" element={<BlogListViewPage />} />
          <Route path="contuct-us" element={<ContactUsPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="services-detais" element={<ServiceDetailsPage />} />
          <Route path="single-member" element={<SingleMemberPage />} />
          <Route path="team" element={<TeamMemberPage />} />
          <Route path="testimonial" element={<TestimonialPage />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
