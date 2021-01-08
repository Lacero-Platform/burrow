// source: crypto.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var gogoproto_gogo_pb = require('./gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.crypto.PrivateKey', null, global);
goog.exportSymbol('proto.crypto.PublicKey', null, global);
goog.exportSymbol('proto.crypto.Signature', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.crypto.PublicKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.crypto.PublicKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.crypto.PublicKey.displayName = 'proto.crypto.PublicKey';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.crypto.PrivateKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.crypto.PrivateKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.crypto.PrivateKey.displayName = 'proto.crypto.PrivateKey';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.crypto.Signature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.crypto.Signature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.crypto.Signature.displayName = 'proto.crypto.Signature';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.crypto.PublicKey.prototype.toObject = function(opt_includeInstance) {
  return proto.crypto.PublicKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.crypto.PublicKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.crypto.PublicKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    curvetype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    publickey: msg.getPublickey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.crypto.PublicKey}
 */
proto.crypto.PublicKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.crypto.PublicKey;
  return proto.crypto.PublicKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.crypto.PublicKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.crypto.PublicKey}
 */
proto.crypto.PublicKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurvetype(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublickey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.crypto.PublicKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.crypto.PublicKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.crypto.PublicKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.crypto.PublicKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurvetype();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPublickey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional uint32 CurveType = 1;
 * @return {number}
 */
proto.crypto.PublicKey.prototype.getCurvetype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.crypto.PublicKey} returns this
 */
proto.crypto.PublicKey.prototype.setCurvetype = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes PublicKey = 2;
 * @return {!(string|Uint8Array)}
 */
proto.crypto.PublicKey.prototype.getPublickey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes PublicKey = 2;
 * This is a type-conversion wrapper around `getPublickey()`
 * @return {string}
 */
proto.crypto.PublicKey.prototype.getPublickey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublickey()));
};


/**
 * optional bytes PublicKey = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublickey()`
 * @return {!Uint8Array}
 */
proto.crypto.PublicKey.prototype.getPublickey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublickey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.crypto.PublicKey} returns this
 */
proto.crypto.PublicKey.prototype.setPublickey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.crypto.PrivateKey.prototype.toObject = function(opt_includeInstance) {
  return proto.crypto.PrivateKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.crypto.PrivateKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.crypto.PrivateKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    curvetype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    publickey: msg.getPublickey_asB64(),
    privatekey: msg.getPrivatekey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.crypto.PrivateKey}
 */
proto.crypto.PrivateKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.crypto.PrivateKey;
  return proto.crypto.PrivateKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.crypto.PrivateKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.crypto.PrivateKey}
 */
proto.crypto.PrivateKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurvetype(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublickey(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPrivatekey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.crypto.PrivateKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.crypto.PrivateKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.crypto.PrivateKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.crypto.PrivateKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurvetype();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPublickey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getPrivatekey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional uint32 CurveType = 1;
 * @return {number}
 */
proto.crypto.PrivateKey.prototype.getCurvetype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.crypto.PrivateKey} returns this
 */
proto.crypto.PrivateKey.prototype.setCurvetype = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes PublicKey = 2;
 * @return {!(string|Uint8Array)}
 */
proto.crypto.PrivateKey.prototype.getPublickey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes PublicKey = 2;
 * This is a type-conversion wrapper around `getPublickey()`
 * @return {string}
 */
proto.crypto.PrivateKey.prototype.getPublickey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublickey()));
};


/**
 * optional bytes PublicKey = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublickey()`
 * @return {!Uint8Array}
 */
proto.crypto.PrivateKey.prototype.getPublickey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublickey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.crypto.PrivateKey} returns this
 */
proto.crypto.PrivateKey.prototype.setPublickey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes PrivateKey = 3;
 * @return {!(string|Uint8Array)}
 */
proto.crypto.PrivateKey.prototype.getPrivatekey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes PrivateKey = 3;
 * This is a type-conversion wrapper around `getPrivatekey()`
 * @return {string}
 */
proto.crypto.PrivateKey.prototype.getPrivatekey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPrivatekey()));
};


/**
 * optional bytes PrivateKey = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPrivatekey()`
 * @return {!Uint8Array}
 */
proto.crypto.PrivateKey.prototype.getPrivatekey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPrivatekey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.crypto.PrivateKey} returns this
 */
proto.crypto.PrivateKey.prototype.setPrivatekey = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.crypto.Signature.prototype.toObject = function(opt_includeInstance) {
  return proto.crypto.Signature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.crypto.Signature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.crypto.Signature.toObject = function(includeInstance, msg) {
  var f, obj = {
    curvetype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    signature: msg.getSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.crypto.Signature}
 */
proto.crypto.Signature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.crypto.Signature;
  return proto.crypto.Signature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.crypto.Signature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.crypto.Signature}
 */
proto.crypto.Signature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurvetype(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.crypto.Signature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.crypto.Signature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.crypto.Signature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.crypto.Signature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurvetype();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional uint32 CurveType = 1;
 * @return {number}
 */
proto.crypto.Signature.prototype.getCurvetype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.crypto.Signature} returns this
 */
proto.crypto.Signature.prototype.setCurvetype = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes Signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.crypto.Signature.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes Signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.crypto.Signature.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes Signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.crypto.Signature.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.crypto.Signature} returns this
 */
proto.crypto.Signature.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


goog.object.extend(exports, proto.crypto);
