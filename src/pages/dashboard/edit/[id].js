import FormProduct from '@components/FormProducts';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import endPoints from '@services/api';
import { makeFetch } from '@hooks/useAuth';

export default function Edit() {
  const [product, setProduct] = useState({});
  const router = useRouter();
  useEffect(() => {
    const {id} = router.query;
    if (!router.isReady) return;
    (async () => {
      try {
        const response = await makeFetch(endPoints.products.getProduct(id), 'GET');
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        alert(error);
      }
    })();
  }, [router?.isReady]);
  return <FormProduct product={product} />;
}
