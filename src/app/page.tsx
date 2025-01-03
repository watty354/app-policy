import { AppUsing } from "@/app/_components/app-using";
import { PrivacyPolicy } from "@/app/_components/privacy-policy";
import { TermsOfService } from "@/app/_components/terms-of-service";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="md:max-w-3xl md:mx-auto mb-5">
      <Tabs defaultValue="app-using" className="w-full mx-auto">
        <TabsList>
          <TabsTrigger value="app-using">アプリ概要</TabsTrigger>
          <TabsTrigger value="terms-of-service">利用規約</TabsTrigger>
          <TabsTrigger value="privacy-policy">プライバシーポリシー</TabsTrigger>
        </TabsList>
        <TabsContent value="app-using">
          <AppUsing />
        </TabsContent>
        <TabsContent value="terms-of-service">
          <TermsOfService />
        </TabsContent>
        <TabsContent value="privacy-policy">
          <PrivacyPolicy />
        </TabsContent>
      </Tabs>
    </div>
  );
}
