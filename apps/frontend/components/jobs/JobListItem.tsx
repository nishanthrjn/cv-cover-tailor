// apps/frontend/components/jobs/JobListItem.tsx
'use client';

import Link from 'next/link';
import { JobApplication } from '../../lib/types';
import { StatusPill } from '../ui/StatusPill';

type Props = {
  job: JobApplication;
};

export function JobListItem({ job }: Props) {
  return (
    <li className="group rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-xs text-slate-100/90 hover:bg-white/10">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-50">{job.title}</p>
          <p className="mt-0.5 text-[11px] text-slate-300">
            {job.company} · {job.location}
          </p>
        </div>
        <StatusPill value={job.status} />
      </div>

      <p className="mt-2 line-clamp-2 text-[11px] text-slate-300/90">
        {job.jobDescription}
      </p>

      <div className="mt-3 flex items-center justify-between">
        {job.referenceLink && (
          <a
            href={job.referenceLink}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] text-slate-300 underline-offset-2 hover:text-slate-100 hover:underline"
          >
            View job ad
          </a>
        )}
        <Link
          href={`/jobs/${job._id}`}
          className="secondary-btn text-[11px]"
        >
          Open workspace →
        </Link>
      </div>
    </li>
  );
}
