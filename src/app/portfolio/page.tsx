import Navbar from '@/components/Navbar';

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <Navbar title="Portfolio" />
      <div className="flex flex-1 items-center justify-center pt-20">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-base-content mb-8 text-4xl font-bold">Portfolio</h1>
          <div className="prose max-w-none">
            <p className="text-base-content text-lg">This is the portfolio page.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
