import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const PricingCard = ({ plan }) => {
  const isPopular = plan.popular;

  return (
    <Card
      className={`relative flex flex-col h-full transition-all duration-300 hover:shadow-xl ${
        isPopular
          ? "border-primary/50 bg-gradient-to-b from-primary/5 to-transparent glow"
          : "border-border bg-card/50 hover:border-primary/30"
      }`}
    >
      {isPopular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg text-primary-foreground">
          Most Popular
        </Badge>
      )}

      <CardHeader className="pb-4">
        <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
        <div className="flex items-baseline gap-1 mt-4">
          <span className="font-display text-4xl font-bold">{plan.price}</span>
          {plan.period && (
            <span className="text-muted-foreground">{plan.period}</span>
          )}
        </div>
        <p className="text-muted-foreground mt-2">{plan.description}</p>
      </CardHeader>

      <CardContent className="flex-1">
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                <Check className="h-3 w-3 text-primary" />
              </div>
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pt-4">
        <Button
          asChild
          className={`w-full ${
            isPopular
              ? "gradient-bg hover:opacity-90"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {plan.cta.href.startsWith("mailto:") ? (
            <a href={plan.cta.href}>{plan.cta.label}</a>
          ) : (
            <Link to={plan.cta.href}>{plan.cta.label}</Link>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
