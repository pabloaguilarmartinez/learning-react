const CAT_ENDPOINT_RANDOM_FACT: string = 'https://catfact.ninja/fact';

type CatFactResponse = {
  fact: string;
  length: number;
};

export const getRandomFact = async (): Promise<string> => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
  const data: CatFactResponse = await res.json();
  const { fact } = data;
  return fact;
};
