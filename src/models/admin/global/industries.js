import mongoose from 'mongoose';

const IndustrySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Industry= mongoose.models.Industry || mongoose.model('Industry', IndustrySchema);
export default Industry
