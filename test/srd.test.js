import mongoose from 'mongoose';

import { SRDModel } from '../models/srd';

const mongoURI = process.env.MONGO_URL;
const setupFunc = async () => {
  await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
      console.error(err); // eslint-disable-line no-console
      process.exit(1);
    }
  });
};
const teardownFunc = () => {
  mongoose.connection.close();
};

/* eslint-disable */
describe('SRDModel test', () => {
  const srdObject = new SRDModel({});
  setupFunc();

  it('sets up some stuff', () => {
    expect(true).toBe(true);
  });

  teardownFunc();
});
