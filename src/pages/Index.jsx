import React from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">My Application</h1>
      </header>
      
      <main>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Welcome</h2>
          <p className="mb-4">This is a bare-bones application that you can modify and build on.</p>
          <Button>Get Started</Button>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside">
            <li>React components</li>
            <li>Shadcn UI integration</li>
            <li>Responsive design</li>
            <li>Easy to customize</li>
          </ul>
        </section>
      </main>
      
      <footer className="mt-8 text-center text-gray-500">
        <p>&copy; 2023 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;