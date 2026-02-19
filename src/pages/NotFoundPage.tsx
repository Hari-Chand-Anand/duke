import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="px-[4vw] py-20">
      <div className="max-w-4xl mx-auto info-card p-10 text-center">
        <p className="micro-label mb-3">404</p>
        <h1 className="headline-lg mb-3">Page not found</h1>
        <p className="text-[#A1A1AA] mb-6">The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="btn-primary inline-flex">Back to Home</Link>
      </div>
    </section>
  );
}
