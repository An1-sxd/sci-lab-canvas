import { Download, Monitor, Apple, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { platformsData, systemRequirementsData } from "@/data/download.data";

const iconMap = {
  windows: Monitor,
  apple: Apple,
  linux: Terminal,
};

const DownloadSection = () => {
  return (
    <div className="space-y-16">
      {/* Platform Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {platformsData.map((platform) => {
          const Icon = iconMap[platform.icon] || Monitor;
          return (
            <Card
              key={platform.id}
              className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {platform.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {platform.fileName}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {platform.fileSize}
                </p>
                <p className="text-xs text-muted-foreground mb-6">
                  {platform.requirements}
                </p>
                <Button
                  asChild
                  className="w-full gradient-bg hover:opacity-90"
                >
                  <a href={platform.downloadUrl}>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* System Requirements */}
      <div className="rounded-xl border border-border bg-card/30 p-8">
        <h3 className="font-display text-2xl font-semibold mb-8 text-center">
          {systemRequirementsData.title}
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Minimum */}
          <div>
            <h4 className="font-display font-semibold text-primary mb-4">
              {systemRequirementsData.minimum.title}
            </h4>
            <ul className="space-y-2">
              {systemRequirementsData.minimum.specs.map((spec, index) => (
                <li key={index} className="text-muted-foreground flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                  {spec}
                </li>
              ))}
            </ul>
          </div>
          {/* Recommended */}
          <div>
            <h4 className="font-display font-semibold text-accent mb-4">
              {systemRequirementsData.recommended.title}
            </h4>
            <ul className="space-y-2">
              {systemRequirementsData.recommended.specs.map((spec, index) => (
                <li key={index} className="text-muted-foreground flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent/50" />
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
