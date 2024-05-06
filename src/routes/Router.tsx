import { Routes, Route } from 'react-router-dom';
import Top from '@/features/top/routes';
import NotFound from '@/features/notFound/routes';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default Router;
