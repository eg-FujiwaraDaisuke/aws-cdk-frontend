import { useRouter } from 'next/router';
import { useEffect } from 'react';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    // コンポーネントがマウントされたときにリダイレクト
    router.push('/login');
  }, [router]);

  return null; // 何も表示しない
};

export default IndexPage;