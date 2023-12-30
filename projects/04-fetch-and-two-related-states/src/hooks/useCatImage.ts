import { useEffect, useState } from 'react';

const CAT_PREFIX_IMAGE_URL: string = 'https://cataas.com';

type CatImageResponse = {
  tags: string[];
  _id: string;
};

export function useCatImage ({ fact }: { fact: string | undefined }): { imageUrl: string } {
  const [pathImage, setPathImage] = useState<string>();
  useEffect(() => {
    if (!fact) return;
    const threeFirstWords = fact.split(' ', 3).join(' ');
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then((data: CatImageResponse) => {
        const { _id } = data;
        setPathImage(`/cat/${_id}/says/${threeFirstWords}?fontSize=50&fontColor=red`);
      });
  }, [fact]);

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${pathImage}` };
}
