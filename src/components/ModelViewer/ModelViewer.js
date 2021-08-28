import React from 'react';
import * as S from './styles';
import '@google/model-viewer'

const ModelViewer = () => {
  return (
  <S.ModelViewerContainer>
    <style jsx>{`
      model-viewer {
        width: 100%;
        height: 85vh;
      }
    `}</style>
    <model-viewer camera-controls disable-zoom alt="A 3D model of an astronaut" environment-image="neutral" poster="/poster.jpg" src="/tpose.glb"></model-viewer>
  </S.ModelViewerContainer>
  );
}

export default ModelViewer;