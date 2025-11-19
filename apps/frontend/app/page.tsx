// apps/frontend/app/page.tsx
import Link from 'next/link';
import { PrimaryButton } from '../components/ui/Buttons';


export default function HomePage() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">
        CV &amp; Cover Letter Tailor
      </h2>
      <p className="max-w-xl text-xs text-slate-300 md:text-sm">
        Manage job applications, tailor CV sections and cover letters with AI,
        and export LaTeX snippets for your Overleaf CV &amp; cover letter
        templates.
      </p>
<PrimaryButton type="button">
  <Link href="/jobs">Go to Job Applications</Link>
</PrimaryButton>

    </main>
  );
}
