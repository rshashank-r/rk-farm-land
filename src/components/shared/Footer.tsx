import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-lg font-headline font-semibold text-primary">RK FARM LAND</p>
          <p className="text-sm text-muted-foreground">Peace. Wealth. Health.</p>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RK FARM LAND. All Rights Reserved.</p>
          <p>Invest in nature. Grow your future.</p>
        </div>
      </div>
    </footer>
  );
}
