import { JobList } from '../../components/jobs/JobList';
import { JobCreateForm } from '../../components/jobs/JobCreateForm';

export default function JobsPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr,1.6fr]">
      <JobList />
      <JobCreateForm />
    </div>
  );
}
