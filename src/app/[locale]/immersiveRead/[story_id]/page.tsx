import ImmersiveReader from '@/components/Stori/immersive/ImmersiveReader';

import React from 'react';

const ImmersiveReadPage = async ({
  params,
}: {
  params: Promise<{ story_id: string }>;
}) => {
  const { story_id } = await params;

  return <ImmersiveReader story_id={story_id} />;
};

export default ImmersiveReadPage;
