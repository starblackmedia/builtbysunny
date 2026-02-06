import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <p className="font-headline text-9xl font-bold text-primary">404</p>
      <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight">
        Page Not Found
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-10">
        <Button asChild>
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </div>
  );
}
