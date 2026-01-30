import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroData } from "@/data/landing.data";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      
      {/* Decorative Floating Circles */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-accent/10 blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-primary/5 blur-2xl animate-float" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
            {heroData.badge}
          </Badge>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            {heroData.title}{" "}
            <span className="gradient-text">{heroData.titleAccent}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {heroData.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="gradient-bg hover:opacity-90 transition-opacity text-lg px-8 py-6 glow"
            >
              <Link to={heroData.primaryCta.href}>
                {heroData.primaryCta.label}
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/5"
            >
              <Link to={heroData.secondaryCta.href}>
                {heroData.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
