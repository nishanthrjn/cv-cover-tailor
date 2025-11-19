// apps/frontend/components/jobs/JobList.tsx
'use client';

import { useJobApplications } from '../../hooks/useJobApplications';
import { GlassCard } from '../ui/GlassCard';
import { SectionHeader } from '../ui/SectionHeader';
import { JobListItem } from './JobListItem';

export function JobList() {
  const { jobsQuery } = useJobApplications();

  const count = jobsQuery.data?.length ?? 0;

  return (
    <GlassCard className="flex flex-col">
      <SectionHeader
        title="Job Applications"
        subtitle="Browse and open tailored CV / cover letter workspaces."
        rightSlot={
          count > 0 ? (
            <span className="glass-chip text-[11px]">
              {count} job{count > 1 ? 's' : ''}
            </span>
          ) : null
        }
      />

      <div className="flex-1 overflow-hidden">
        {jobsQuery.isLoading ? (
          <p className="text-xs text-slate-300">Loading jobs…</p>
        ) : jobsQuery.isError ? (
          <p className="text-xs text-red-400">Failed to load jobs.</p>
        ) : count > 0 ? (
          <ul className="space-y-3 overflow-y-auto pr-1">
            {jobsQuery.data!.map((job) => (
              <JobListItem key={job._id} job={job} />
            ))}
          </ul>
        ) : (
          <div className="mt-3 rounded-xl border border-dashed border-white/15 bg-white/5 px-4 py-6 text-center text-xs text-slate-300">
            No jobs yet. Use the form on the right to add your first target
            position.
          </div>
        )}
      </div>
    </GlassCard>
  );
}
