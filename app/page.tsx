import { CommunityStats } from "@/components/CommunityStats";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Newsletter } from "@/components/Newsletter";
import { PageLayout } from "@/components/PageLayout";
import { UpcomingEvents } from "@/components/UpcomingEvents";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <UpcomingEvents />
      <HowItWorks />
      <CommunityStats />
      <Newsletter />
    </PageLayout>
  );
}
