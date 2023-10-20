import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Postagens',
  description: 'This is the post page',
};

export default async function AboutPage() {
  return <h1>Postagens</h1>;
}
