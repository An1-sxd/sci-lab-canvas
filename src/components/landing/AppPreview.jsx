import { Check } from "lucide-react";
import { appPreviewData } from "@/data/landing.data";
import appPreviewImg from "@/assets/app-preview.png";

const AppPreview = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              {appPreviewData.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {appPreviewData.description}
            </p>
            <ul className="space-y-4">
              {appPreviewData.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl scale-90" />
              <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl glow">
                <img
                  src={appPreviewImg}
                  alt="Virtual Lab Application Interface"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
