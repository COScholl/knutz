import mongoose from 'mongoose';

/* istanbul ignore next */
const schema = mongoose.Schema({});

let Model;
try {
  Model = mongoose.model('SRD');
} catch (error) {
  Model = mongoose.model('SRD', schema);
}

const SRDCollection = Model;
export const SRDModel = Model;
export default SRDCollection;
