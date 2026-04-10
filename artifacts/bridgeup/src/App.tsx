import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import NotFound from "@/pages/not-found";
import LandingPage from "@/pages/LandingPage";
import HowItWorksPage from "@/pages/HowItWorksPage";
import CompetitionsPage from "@/pages/CompetitionsPage";
import CompetitionDetailPage from "@/pages/CompetitionDetailPage";
import ForStudentsPage from "@/pages/ForStudentsPage";
import ForSponsorsPage from "@/pages/ForSponsorsPage";
import JoinStudentPage from "@/pages/JoinStudentPage";
import JoinSponsorPage from "@/pages/JoinSponsorPage";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import DashboardEnterPage from "@/pages/DashboardEnterPage";
import StudentsPage from "@/pages/StudentsPage";
import SponsorDashboardPage from "@/pages/SponsorDashboardPage";
import AdminPage from "@/pages/AdminPage";

const queryClient = new QueryClient();

const PUBLIC_PAGES = [
  "/",
  "/how-it-works",
  "/competitions",
  "/for-students",
  "/for-sponsors",
  "/join/student",
  "/join/sponsor",
  "/login",
];

function isPublicPage(path: string) {
  if (path === "/") return true;
  return PUBLIC_PAGES.some(p => path === p || path.startsWith("/competitions/"));
}

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        {/* Public pages with Navbar + Footer */}
        <Route path="/">
          <PublicLayout><LandingPage /></PublicLayout>
        </Route>
        <Route path="/how-it-works">
          <PublicLayout><HowItWorksPage /></PublicLayout>
        </Route>
        <Route path="/competitions">
          <PublicLayout><CompetitionsPage /></PublicLayout>
        </Route>
        <Route path="/competitions/:id">
          <PublicLayout><CompetitionDetailPage /></PublicLayout>
        </Route>
        <Route path="/for-students">
          <PublicLayout><ForStudentsPage /></PublicLayout>
        </Route>
        <Route path="/for-sponsors">
          <PublicLayout><ForSponsorsPage /></PublicLayout>
        </Route>
        <Route path="/join/student">
          <PublicLayout><JoinStudentPage /></PublicLayout>
        </Route>
        <Route path="/join/sponsor">
          <PublicLayout><JoinSponsorPage /></PublicLayout>
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>

        {/* Authenticated pages — sidebar layout, no public navbar */}
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/dashboard/enter">
          <DashboardEnterPage />
        </Route>
        <Route path="/students">
          <StudentsPage />
        </Route>
        <Route path="/sponsor">
          <SponsorDashboardPage />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
