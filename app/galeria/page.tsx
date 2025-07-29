import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GalleryGrid from './GalleryGrid';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-8">
        <GalleryGrid />
      </main>
      <Footer />
    </div>
  );
}