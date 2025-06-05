import { useEffect } from 'react';
import * as blazeface from '@tensorflow-models/blazeface';
import * as tf from '@tensorflow/tfjs';

const useFaceDetection = (webcamRef, onAlert) => {
  useEffect(() => {
    tf.setBackend('webgl').then(() => {
      tf.ready().then(async () => {
        const model = await blazeface.load();
        const interval = setInterval(async () => {
          if (
            webcamRef.current &&
            webcamRef.current.video &&
            webcamRef.current.video.readyState === 4
          ) {
            const video = webcamRef.current.video;
            const predictions = await model.estimateFaces(video, false);
            if (predictions.length === 0) {
              onAlert('⚠️ No face in frame');
            } else if (predictions.length > 1) {
              onAlert('🚨 Multiple faces detected');
            }
          }
        }, 2000);

        return () => clearInterval(interval);
      });
    });
  }, [webcamRef, onAlert]);
};

export default useFaceDetection;