import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

export default function VideoSubtitleTranslationToolLandingPage() {
  const [selectedTab, setSelectedTab] = useState('features');

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Video Subtitle Translation Tool</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-6">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Transform Your Videos with Easy Subtitle Translations</h2>
          <AspectRatio ratio={16 / 9} className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b2?w=800&dpr=2&q=80"
              alt="Video Translation"
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <p className="mb-4">
            Our tool provides an effortless solution for translating and embedding subtitles into your videos. 
            Enhance your viewers' experience by offering multiple language options, powered by our advanced AI translation technology.
          </p>
          <Button>Get Started</Button>
        </section>

        <section className="mb-10">
          <Tabs defaultValue="features" className="w-full">
            <TabsList>
              <TabsTrigger value="features" onValueChange={setSelectedTab}>Features</TabsTrigger>
              <TabsTrigger value="pricing" onValueChange={setSelectedTab}>Pricing</TabsTrigger>
            </TabsList>
            <TabsContent value="features" className={selectedTab === 'features' ? 'block' : 'hidden'}>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Automatic Translation</AccordionTrigger>
                  <AccordionContent>
                    Utilize our AI-powered translation engine to automatically generate accurate subtitles in multiple languages.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Customizable Subtitle Styles</AccordionTrigger>
                  <AccordionContent>
                    Customize the font, size, and color of your subtitles to match your video's branding and style.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Integrated Video Player</AccordionTrigger>
                  <AccordionContent>
                    Our built-in video player supports seamless playback with your newly translated subtitles.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="pricing" className={selectedTab === 'pricing' ? 'block' : 'hidden'}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Basic', price: '9.99', features: ['Automatic translation', '2 languages', 'HD video support'] },
                  { title: 'Pro', price: '19.99', features: ['Up to 5 languages', 'Full HD support', 'Customizable styles'] },
                  { title: 'Enterprise', price: '49.99', features: ['Unlimited languages', '4K video support', 'Priority support'] },
                ].map((plan, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{plan.title}</CardTitle>
                      <CardDescription>
                        <span className="text-4xl font-bold">${plan.price}</span>/month
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <Check className="text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button>Choose {plan.title}</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <Alert>
            <AlertTitle>Try it Free!</AlertTitle>
            <AlertDescription>
              Sign up today and get a 14-day free trial with full access to all features. No credit card required.
            </AlertDescription>
          </Alert>
        </section>
      </main>
      <footer className="bg-white p-6 shadow-md">
        <div className="flex justify-between items-center">
          <span>© 2023 Video Subtitle Translation Tool</span>
          <div className="space-x-4">
            <Badge variant="outline">Privacy Policy</Badge>
            <Badge variant="outline">Terms of Service</Badge>
          </div>
        </div>
      </footer>
    </div>
  );
}