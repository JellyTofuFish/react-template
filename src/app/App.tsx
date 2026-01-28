import { SiteHeader } from '@/components/site-header';
import Intro from '@/features/dashboard/Intro';

function App() {
  return (
    <div className="font-roboto">
      <div className="[--header-height:calc(--spacing(14))]">
        <SiteHeader />
      </div>

      <Intro />
    </div>
  );
}

export default App;
