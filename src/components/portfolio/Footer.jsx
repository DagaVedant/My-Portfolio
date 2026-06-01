import { personal } from '@/data/portfolio-data';

export default function Footer() {
  return (
    <footer className="border-t py-8 px-6" style={{ borderColor: 'hsla(180, 30%, 16%, 0.8)' }}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm font-inter" style={{ color: 'hsl(175 20% 45%)' }}>
          © {new Date().getFullYear()} {personal.firstName} {personal.lastName}
        </span>

      </div>
    </footer>
  );
}