// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from "../../../node_modules/flatbuffers/mjs/flatbuffers.js";

import { PrecipitationType } from '../wk2/precipitation-type.js';


export class PrecipitationAmountByType {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):PrecipitationAmountByType {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsPrecipitationAmountByType(bb:flatbuffers.ByteBuffer, obj?:PrecipitationAmountByType):PrecipitationAmountByType {
  return (obj || new PrecipitationAmountByType()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsPrecipitationAmountByType(bb:flatbuffers.ByteBuffer, obj?:PrecipitationAmountByType):PrecipitationAmountByType {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new PrecipitationAmountByType()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

precipitationType():PrecipitationType {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : PrecipitationType.CLEAR;
}

expected():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

minimumSnow():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

maximumSnow():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

expectedSnow():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

static startPrecipitationAmountByType(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static addPrecipitationType(builder:flatbuffers.Builder, precipitationType:PrecipitationType) {
  builder.addFieldInt8(0, precipitationType, PrecipitationType.CLEAR);
}

static addExpected(builder:flatbuffers.Builder, expected:number) {
  builder.addFieldFloat32(1, expected, 0.0);
}

static addMinimumSnow(builder:flatbuffers.Builder, minimumSnow:number) {
  builder.addFieldFloat32(2, minimumSnow, 0.0);
}

static addMaximumSnow(builder:flatbuffers.Builder, maximumSnow:number) {
  builder.addFieldFloat32(3, maximumSnow, 0.0);
}

static addExpectedSnow(builder:flatbuffers.Builder, expectedSnow:number) {
  builder.addFieldFloat32(4, expectedSnow, 0.0);
}

static endPrecipitationAmountByType(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createPrecipitationAmountByType(builder:flatbuffers.Builder, precipitationType:PrecipitationType, expected:number, minimumSnow:number, maximumSnow:number, expectedSnow:number):flatbuffers.Offset {
  PrecipitationAmountByType.startPrecipitationAmountByType(builder);
  PrecipitationAmountByType.addPrecipitationType(builder, precipitationType);
  PrecipitationAmountByType.addExpected(builder, expected);
  PrecipitationAmountByType.addMinimumSnow(builder, minimumSnow);
  PrecipitationAmountByType.addMaximumSnow(builder, maximumSnow);
  PrecipitationAmountByType.addExpectedSnow(builder, expectedSnow);
  return PrecipitationAmountByType.endPrecipitationAmountByType(builder);
}
}
