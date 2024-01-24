import { Home, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { useState } from 'react';

export default function VideoTranslationLandingPage() {
  const [email, setEmail] = useState('');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Home className="w-8 h-8 text-blue-600" />
            <h1 className="text-xl font-bold">VideoTranslator</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Login</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Translate Your Videos Automatically</h2>
          <p className="text-lg text-gray-600 mb-8">Add subtitles and translate your videos with a single click.</p>
          <Input placeholder="Enter your email" className="mb-4" onChange={(e) => setEmail(e.target.value)} />
          <Button size="large">Get Started <ArrowRight className="ml-2" /></Button>
        </section>

        {/* Features Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Automatic Transcription</CardTitle>
                  <CardDescription>Convert your video's speech into text.</CardDescription>
                </CardHeader>
                <CardContent>
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                      alt="Automatic Transcription"
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                </CardContent>
                <CardFooter>
                  <Check className="text-green-500" /> Accurate and fast
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Easy Editing</CardTitle>
                  <CardDescription>Edit your subtitles for perfect timing.</CardDescription>
                </CardHeader>
                <CardContent>
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                      alt="Easy Editing"
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                </CardContent>
                <CardFooter>
                  <Check className="text-green-500" /> User-friendly interface
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Multiple Languages</CardTitle>
                  <CardDescription>Translate your video into multiple languages.</CardDescription>
                </CardHeader>
                <CardContent>
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                      alt="Multiple Languages"
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                </CardContent>
                <CardFooter>
                  <Check className="text-green-500" /> Over 50 languages supported
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-8 text-center">What Our Users Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent>
                  <p>"VideoTranslator has revolutionized the way we create content for our international audience. The automatic translation feature is a game-changer!"</p>
                </CardContent>
                <CardFooter>
                  <Avatar>
                    <AvatarImage src="https://github.com/Yuyz0112.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-bold">Christina N.</p>
                    <p className="text-sm text-gray-600">Content Creator</p>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardContent>
                  <p>"The easy editing tool allows me to fine-tune my subtitles for perfect timing. It's incredibly user-friendly and efficient."</p>
                </CardContent>
                <CardFooter>
                  <Avatar>
                    <AvatarImage src="https://github.com/Yuyz0112.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-bold">Michael Z.</p>
                    <p className="text-sm text-gray-600">Video Editor</p>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardContent>
                  <p>"Being able to translate my videos into multiple languages has opened up new markets for my business. The translation quality is excellent."</p>
                </CardContent>
                <CardFooter>
                  <Avatar>
                    <AvatarImage src="https://github.com/Yuyz0112.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-bold">Samantha L.</p>
                    <p className="text-sm text-gray-600">Business Owner</p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>How accurate is the automatic transcription?</AccordionTrigger>
                <AccordionContent>
                  Our automatic transcription service is highly accurate, but we always recommend reviewing and editing the subtitles for the best results.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I edit the subtitles?</AccordionTrigger>
                <AccordionContent>
                  Yes, our easy editing tool allows you to adjust the timing and text of your subtitles to ensure they are perfectly synchronized with your video.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Which languages are supported for translation?</AccordionTrigger>
                <AccordionContent>
                  We support over 50 languages for translation, including Spanish, French, German, Chinese, Japanese, and many more.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white p-4 shadow-md">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-600">© 2021 VideoTranslator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}