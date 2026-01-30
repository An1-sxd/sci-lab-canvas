import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DownloadSection from "@/components/download/DownloadSection";
import { downloadHeaderData } from "@/data/download.data";
import { Badge } from "@/components/ui/badge";
import appPreviewImg from "@/assets/app-preview.png";

const Download = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 pattern-grid opacity-30" />
          <div className="absolute top-1/4 left-10 w-48 h-48 rounded-full bg-primary/10 blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float-slow" />

          <div className="container relative">
            <div className="text-center mb-16">
              <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20">
                {downloadHeaderData.version} • {downloadHeaderData.releaseDate}
              </Badge>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {downloadHeaderData.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                {downloadHeaderData.subtitle}
              </p>
            </div>

            {/* App Preview */}
            <div className="max-w-4xl mx-auto mb-20">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl scale-90" />
                <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl glow">
                  <img
                    src={appPreviewImg}
                    alt="Virtual Lab Desktop Application"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Download Section */}
            <DownloadSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Download;
