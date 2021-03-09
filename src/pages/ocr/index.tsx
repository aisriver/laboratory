import React, { useEffect } from 'react';
import { createWorker } from 'tesseract.js';

// https://tessdata.projectnaptha.com/4.0.0/chi_sim.traineddata.gz
const languageObj = {
  中文: 'chi_sim',
  英文: 'eng',
};
const img = 'http://localhost:8066/image10.jpg';

const worker = createWorker({
  logger: m => console.log(m),
});

export default () => {
  useEffect(() => {
    (async () => {
      await worker.load();
      await worker.loadLanguage(languageObj.中文);
      await worker.initialize(languageObj.中文);
      const { data } = await worker.recognize(img);
      console.log(data.text);
      console.log('data', data);
      await worker.terminate();
    })();
  }, []);

  return (
    <div>
      <img src={img} />
    </div>
  );
};
