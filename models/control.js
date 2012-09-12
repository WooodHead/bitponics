var mongoose = require('mongoose'),
	mongooseTypes = require('mongoose-types'),
  	Schema = mongoose.Schema,
  	mongoosePlugins = require('../lib/mongoose-plugins'),
	useTimestamps = mongoosePlugins.useTimestamps,
  	ObjectId = Schema.ObjectId;

var ControlSchema = new Schema({
	name: { type: String, required: true }
});

ControlSchema.plugin(useTimestamps);

ControlSchema.suggestions = {
};

exports.schema = ControlSchema;
exports.model = mongoose.model('Control', ControlSchema);
